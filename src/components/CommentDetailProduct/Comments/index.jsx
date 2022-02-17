import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Comment from "../Comment";
import CommentForm from "../CommentForm";
import "./Comments.scss";

function Comments() {
  const { slug } = useParams();
  const listComments = useSelector((state) => state.comment.list);
  const [activeComment, setActiveComment] = useState(null);
  const rootComments = listComments.filter(
    (comment) => comment.parentId === null && comment.productSlug === slug
  );
  const getReplies = (commentId) => {
    const repliesComment = listComments.filter(
      (comment) =>
        comment.parentId === commentId && comment.productSlug === slug
    );
    return repliesComment;
  };
  console.log(rootComments);
  return (
    <div className="comments-container">
      <CommentForm
        parentId={null}
        label="BÌNH LUẬN"
        body=""
        activeComment={activeComment}
        setActiveComment={setActiveComment}
      />
      {rootComments.length > 0 &&
        rootComments.map((comment) => (
          <Comment
            key={comment._id}
            comment={comment}
            replies={getReplies(comment._id)}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
          />
        ))}
    </div>
  );
}

export default Comments;
