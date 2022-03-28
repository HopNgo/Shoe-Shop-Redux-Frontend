import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";
const Auth = ({ authRoute }) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  console.log(!currentUser);
  if (currentUser && !currentUser.isAdmin) {
    return <Navigate to="/" />;
  }  else {
    let body = (
      <>
        {authRoute === "signin" && <SignInForm />}
        {authRoute === "signup" && <SignUpForm />}
      </>
    );
    return <>{body}</>;
  }
};

export default Auth;
