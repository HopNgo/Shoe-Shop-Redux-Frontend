import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCommentFn } from "../../../redux/comment/commentSlice";
import formatDate from "../../../utils/formatDate";
import CommentForm from "../CommentForm";
import "./Comment.scss";

function Comment({ comment, replies, activeComment, setActiveComment }) {
  const currentUserId = useSelector((state) =>
    state.user.currentUser ? state.user.currentUser.userId : null
  );
  const dispatch = useDispatch();
  const canReply = Boolean(currentUserId);
  const canEdit = currentUserId === comment.userId;
  const canDelete = currentUserId === comment.userId;

  const handleClickDeleteComment = (commentId) => {
    console.log(commentId);
    const commentIdObject = {
      id: commentId,
    };
    dispatch(deleteCommentFn(commentIdObject));
  };
  const isReplying =
    activeComment &&
    activeComment.type === "replying" &&
    activeComment.id === comment._id;
  const isEditting =
    activeComment &&
    activeComment.type === "editting" &&
    activeComment.id === comment._id;

  const replyId = comment.parentId ? comment.parentId : comment._id;
  return (
    <div className="comment-container">
      <div className="comment-container-image">
        <img src={comment.avatarUrl} alt="Not found" />
      </div>
      <div className="comment-container-right-part">
        <div className="comment-container-right-part__content">
          <span className="author">{comment.name}</span>
          <span className="createAt">{formatDate(comment.updatedAt)}</span>
        </div>
        {!isEditting && (
          <div className="comment-container-right-part__text">
            {comment.body}
          </div>
        )}
        {isEditting && (
          <CommentForm
            label="EDIT"
            body={comment.body}
            setActiveComment={setActiveComment}
            parentId={comment.parentId}
            activeComment={activeComment}
          />
        )}
        <div className="comment-container-right-part__action">
          {canReply && (
            <span
              onClick={() =>
                setActiveComment({ id: comment._id, type: "replying" })
              }
              className="reply"
            >
              RESPONSE
            </span>
          )}
          {canEdit && (
            <span
              className="edit"
              onClick={() =>
                setActiveComment({ id: comment._id, type: "editting" })
              }
            >
              EDIT
            </span>
          )}
          {canDelete && (
            <span
              onClick={() => handleClickDeleteComment(comment._id)}
              className="delete"
            >
              REMOVE
            </span>
          )}
        </div>
        {isReplying && (
          <CommentForm
            parentId={replyId}
            label="RESPONSE"
            setActiveComment={setActiveComment}
            body=""
            activeComment={activeComment}
          />
        )}
        {replies.length > 0 && (
          <div className="comment-container-right-part-replies">
            {replies.map((reply) => (
              <Comment
                comment={reply}
                key={reply._id}
                replies={[]}
                activeComment={activeComment}
                setActiveComment={setActiveComment}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Comment;
