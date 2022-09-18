import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  addCommentFn,
  updateCommentFn,
} from "../../../redux/comment/commentSlice.js";
import "./CommentForm.scss";

function CommentForm({
  parentId,
  label,
  setActiveComment,
  body,
  activeComment,
}) {
  const commentRef = useRef();
  const { slug } = useParams();
  const [commentText, setCommentText] = useState(body);
  const isTextareaDisabled = commentText.length === 0;
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  const handleClickSubmitFormComment = () => {
    if (!currentUser) {
      navigate("/signin");
      window.alert("ERROR: YOU ARE NOT LOGGED IN !!!");
    } else {
      
      const comment =
        activeComment && activeComment.type === "editting"
          ? {
              _id: activeComment.id,
              body: commentText,
              productSlug: slug,
              name: currentUser.name,
              userId: currentUser.userId,
              parentId: parentId,
              avatarUrl: currentUser.avatarUrl,
            }
          : {
              body: commentText,
              productSlug: slug,
              name: currentUser.name,
              userId: currentUser.userId,
              parentId: parentId,
              avatarUrl: currentUser.avatarUrl,
            };
      if (label === "RESPONSE" || label === "COMMENT") {
        dispatch(addCommentFn(comment));
      } else if (label === "EDIT") {
        dispatch(updateCommentFn(comment));
      }

      setCommentText("");
      commentRef.current.focus();
      setActiveComment(null);
    }
  };
  return (
    <div className="comment-form-container">
      <textarea
        ref={commentRef}
        className="comment-form-container__textarea"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Enter your comments..."
      />
      <div className="comment-form-container__btn">
        <button
          disabled={isTextareaDisabled}
          className="comment-form-container__btn-submit"
          onClick={handleClickSubmitFormComment}
        >
          {label}
        </button>
        {(label === "RESPONSE" || label === "EDIT") && (
          <button
            className="comment-form-container__btn-destroy"
            onClick={() => setActiveComment(null)}
          >
            CANCEL
          </button>
        )}
      </div>
    </div>
  );
}

export default CommentForm;
