import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCommentFn } from "../../../redux/comment/commentSlice";
import CommentForm from "../CommentForm";
import "./Comment.scss";

function Comment({ comment, replies, activeComment, setActiveComment }) {
  const dateComment = new Date(comment.updatedAt);
  const currentUserId = useSelector((state) => state.user.currentUser.id);
  const dispatch = useDispatch();
  const canReply = Boolean(currentUserId);
  const canEdit = currentUserId === comment.userId;
  const canDelete = currentUserId === comment.userId;
  console.log(activeComment);
  const dateConvert =
    dateComment.getDate() +
    "/" +
    (dateComment.getMonth() + 1) +
    "/" +
    dateComment.getFullYear() +
    ", " +
    dateComment.toLocaleTimeString();
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
  console.log(isReplying);
  const replyId = comment.parentId ? comment.parentId : comment._id;
  return (
    <div className="comment-container">
      <div className="comment-container-image">
        <img src={comment.photoURL} alt="Not found" />
      </div>
      <div className="comment-container-right-part">
        <div className="comment-container-right-part__content">
          <span className="author">{comment.username}</span>
          <span className="createAt">{dateConvert}</span>
        </div>
        {!isEditting && (
          <div className="comment-container-right-part__text">
            {comment.body}
          </div>
        )}
        {isEditting && (
          <CommentForm
            label="CHỈNH SỬA"
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
              Phản hồi
            </span>
          )}
          {canEdit && (
            <span
              className="edit"
              onClick={() =>
                setActiveComment({ id: comment._id, type: "editting" })
              }
            >
              Chỉnh sửa
            </span>
          )}
          {canDelete && (
            <span
              onClick={() => handleClickDeleteComment(comment._id)}
              className="delete"
            >
              Xóa
            </span>
          )}
        </div>
        {isReplying && (
          <CommentForm
            parentId={replyId}
            label="PHẢN HỒI"
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
