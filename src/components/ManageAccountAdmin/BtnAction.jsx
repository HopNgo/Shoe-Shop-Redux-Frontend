import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateNameUser,
  updatePasswordUser,
  updateUsernameUser,
} from "../../redux/user/userSlice";

const BtnAction = ({
  type,
  isChange,
  setIsChange,
  setError,
  valueNameInput,
  valueUsernameInput,
  valuePasswordInput,
  valueConfirmPasswordInput,
  setNameInput,
  setUsername,
  setConfirmPassword,
  setPassword,
}) => {
  const dispatch = useDispatch();
  const adminId = useSelector((state) => state.user.currentUser.userId);

  console.log(isChange);
  console.log(type);
  const handleClickChange = () => {
    console.log(123);
    setIsChange({ show: true, type: type });
    setError({ type: null, message: null });
    if (type === "name") {
      setNameInput("");
    } else if (type === "username") {
      setUsername("");
    } else if (type === "password") {
      setConfirmPassword("");
      setPassword("");
    }
  };
  const handleClickCancel = () => {
    setIsChange({ show: false, type: null });
  };

  const handleClickSubmit = () => {
    if (type === "name") {
      if (valueNameInput.length === 0) {
        setError({ type: type, message: "* You didn't enter your name" });
      } else {
        const body = { _id: adminId, name: valueNameInput };
        dispatch(updateNameUser(body));
        setIsChange({ show: false, type: null });
      }
    } else if (type === "username") {
      if (valueUsernameInput.length === 0) {
        setError({ type: type, message: "* You didn't enter your account" });
      } else {
        const body = { _id: adminId, username: valueUsernameInput };
        dispatch(updateUsernameUser(body));
        setIsChange({ show: false, type: null });
      }
    } else if (type === "password") {
      if (valuePasswordInput.length === 0) {
        setError({
          type: type,
          message: "* You didn't enter your new password",
        });
      } else if (valuePasswordInput !== valueConfirmPasswordInput) {
        setError({ type: type, message: "* Password is not matched" });
      } else {
        const body = { _id: adminId, password: valuePasswordInput };
        dispatch(updatePasswordUser(body));
        setIsChange({ show: false, type: null });
      }
    }
  };
  return (
    <div>
      {isChange.show && isChange.type === type ? (
        <>
          <span onClick={handleClickSubmit} className="p-3 text-save mx-3">
            Save
          </span>
          <span onClick={handleClickCancel} className="p-3 text-cancel">
            Cancel
          </span>
        </>
      ) : (
        <span onClick={handleClickChange} className="p-3 text-change">
          Change
        </span>
      )}
    </div>
  );
};

export default BtnAction;
