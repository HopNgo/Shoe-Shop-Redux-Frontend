import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Header.scss";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/user/userSlice";

function IsLoggedIn({ currentUser }) {
  const [showLogOut, setShowLogOut] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClickAccountIcon = () => {
    navigate("/signin");
  };
  const handleClickImage = () => {
    if (showLogOut) {
      setShowLogOut(false);
    } else {
      setShowLogOut(true);
    }
  };
  const handleClickLogOut = () => {
    const action = logOut();
    dispatch(action);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("rememberedAccount");
    navigate("/");
  };
  console.log(currentUser);
  if (currentUser) {
    return (
      <div className="header-container__icons-image">
        <img
          onClick={handleClickImage}
          src={currentUser.avatarUrl}
          alt="Not Found"
        />
        {showLogOut && (
          <div onClick={handleClickLogOut} className="logout">
            Đăng xuất
          </div>
        )}
      </div>
    );
  } else {
    return (
      <AccountCircleIcon onClick={handleClickAccountIcon} className="icon" />
    );
  }
}

export default IsLoggedIn;
