import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../redux/product/productSlice.js";
import overlayReducer from "../redux/overlay/overlaySlice.js";
import userReducer from "../redux/user/userSlice.js";
import cartReducer from "../redux/cart/cartSlice.js";
import commentReducer from "../redux/comment/commentSlice.js";

const rootReducer = {
  products: productsReducer,
  overlay: overlayReducer,
  user: userReducer,
  cart: cartReducer,
  comment: commentReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
