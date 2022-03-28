import React from "react";
import { Navigate } from "react-router-dom";
import Admin from "../views/Admin";

const AuthAdmin = ({ isAdmin }) => {
  console.log(isAdmin);
  return isAdmin ? <Admin /> : <Navigate to="/" />;
};

export default AuthAdmin;
