import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Cart from "../../components/Cart";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Overlay from "../../components/Overlay";
import DetailProductPage from "../../pages/DetaiProductPage";
import HomePage from "../../pages/HomePage";
import ListProductPage from "../../pages/ListProductPage";
import OrderSuccessPage from "../../pages/OrderSuccessPage";
import SearchPage from "../../pages/SearchPage";
import { getCommentsFn } from "../../redux/comment/commentSlice";
import { getProducts } from "../../redux/product/productSlice";
import Auth from "../../utils/Auth";
import AuthShoppingCart from "../../utils/AuthShoppingCart";

const Customer = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { isShow, ...rest } = cart;
  const jsonCart = JSON.stringify(rest);
  localStorage.setItem("storageCart", jsonCart);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCommentsFn());
  }, [dispatch]);

  const showOverlay = useSelector((state) => state.overlay);
  const isShowCart = useSelector((state) => state.cart.isShow);
  return (
    <div>
      {showOverlay.isShow && <Overlay imageUrl={showOverlay.imageUrl} />}
      <Cart isShow={isShowCart} />
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<Auth authRoute="signin" />} />
        <Route path="/signup" element={<Auth authRoute="signup" />} />
        <Route path="/type/:type" element={<ListProductPage />} />
        <Route path="/brand/:brand" element={<ListProductPage />} />
        <Route path="/gender/:gender" element={<ListProductPage />} />
        <Route path="/price/*" element={<ListProductPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/brand/:brand/:slug" element={<DetailProductPage />} />
        <Route path="/cart/shoppingCart" element={<AuthShoppingCart />} />
        <Route path="/cart/orderSuccess" element={<OrderSuccessPage />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default Customer;
