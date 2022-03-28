import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import ShoppingCartPage from "../pages/ShoppingCartPage";

const AuthShoppingCart = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  return currentUser ? <ShoppingCartPage /> : <Navigate to="/signin" />;
};

export default AuthShoppingCart;
