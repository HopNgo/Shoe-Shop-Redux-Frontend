import React, { useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeItemCart } from "../../redux/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { hideCart } from "../../redux/cart/cartSlice";

function Cart({ isShow }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const cartContainerElement = document.querySelector(".cart-container");
    if (isShow === true) {
      Object.assign(cartContainerElement.style, {
        animationName: "showCartFromRightToLeft",
        animationDuration: "0.6s",
        animationTimingFunction: "linear",
        animationFillMode: "forwards",
      });
    } else if (isShow === false) {
      Object.assign(cartContainerElement.style, {
        animationName: "hideCartFromLeftToRight",
        animationDuration: "0.6s",
        animationTimingFunction: "linear",
        animationFillMode: "forwards",
      });
    }
  }, [isShow]);
  const cart = useSelector((state) => state.cart);

  const handleClickDeleteIcon = (index) => {
    dispatch(removeItemCart(index));
  };
  return (
    <div className="cart-container">
      <h1 className="cart-container--heading">CART</h1>
      <div className="cart-container--title">
        <p>Image</p>
        <p>Quantity</p>
        <p>Size</p>
        <p>Total</p>
      </div>
      <div className="cart-container--item-scroll">
        {cart.items.length > 0 &&
          cart.items.map((item, index) => (
            <div key={index} className="cart-container--item-scroll--item">
              <img
                className="cart-container--item-scroll--item__image"
                src={item.item.img}
                alt="Not Found"
              />
              <span className="cart-container--item-scroll--item__quantity">
                {item.qty}
              </span>
              <span className="cart-container--item-scroll--item__size">
                {item.size}
              </span>
              <span className="cart-container--item-scroll--item__price">
                {new Intl.NumberFormat("vi-VN").format(item.price)}.000đ
              </span>
              <DeleteIcon
                className="remove-icon"
                onClick={() => handleClickDeleteIcon(index)}
              />
            </div>
          ))}
      </div>
      <div className="cart-container__totalPrice">
        <span className="title">TOTAL:</span>
        <span className="value">
          {new Intl.NumberFormat("vi-VN").format(cart.totalPrice)}
          .000đ
        </span>
      </div>
      <button
        onClick={() => {
          navigate("/cart/shoppingCart");
          dispatch(hideCart());
        }}
        className="cart-container__btnCheckout"
      >
        CHECK OUT
      </button>
    </div>
  );
}

export default Cart;
