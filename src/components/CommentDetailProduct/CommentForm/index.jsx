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
      alert("ERROR: Bạn chưa đăng nhập !!!");
    } else {
      console.log(currentUser);
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
      if (label === "PHẢN HỒI" || label === "BÌNH LUẬN") {
        dispatch(addCommentFn(comment));
      } else if (label === "CHỈNH SỬA") {
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
        placeholder="Viết bình luận vào đây"
      />
      <div className="comment-form-container__btn">
        <button
          disabled={isTextareaDisabled}
          className="comment-form-container__btn-submit"
          onClick={handleClickSubmitFormComment}
        >
          {label}
        </button>
        {(label === "PHẢN HỒI" || label === "CHỈNH SỬA") && (
          <button
            className="comment-form-container__btn-destroy"
            onClick={() => setActiveComment(null)}
          >
            HỦY
          </button>
        )}
      </div>
    </div>
  );
}

export default CommentForm;
