import React from "react";
import { Navigate } from "react-router-dom";
import Customer from "../views/Customer";
const AuthUser = ({ isAdmin }) => {
  return isAdmin ? <Navigate to="/admin" /> : <Customer />;
};

export default AuthUser;
