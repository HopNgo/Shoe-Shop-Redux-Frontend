import "./SignInForm.scss";
import React from "react";
import images from "../../constants/images";
import { facebookProvider, googleProvider } from "../../config/authMethod";
import socialMediaAuth from "../../service/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logIn } from "../../redux/user/userSlice";

function SignInForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClickAuth = async (provider) => {
    const res = await socialMediaAuth(provider);
    const dataUser = {
      id: res.uid,
      photoURL: res.photoURL,
      username: res.displayName,
    };
    dispatch(logIn(dataUser));
    if (dataUser.id) {
      navigate(-1);
    }
  };
  return (
    <div className="sign-in-form-container">
      <h1>ĐĂNG NHẬP NGAY</h1>
      <div className="sign-in-form-container__logo-social-media">
        <img
          src={images.LOGO_FACEBOOK}
          alt="Not Found"
          className="facebook-logo"
          onClick={() => handleClickAuth(facebookProvider)}
        />
        <img
          src={images.LOGO_GOOGLE}
          alt="Not Found"
          className="google-logo"
          onClick={() => handleClickAuth(googleProvider)}
        />
      </div>
    </div>
  );
}

export default SignInForm;
