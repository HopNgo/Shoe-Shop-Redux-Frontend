import React from "react";
import "./NotFoundProduct.scss";
const NotFoundProduct = () => {
  return (
    <div className="not-found-product-container">
      <img
        src="https://deo.shopeemobile.com/shopee/shopee-mall-live/images/ic_no_404@2x.png"
        alt=""
      />
      <p className="not-found-product-container__code"> 404 </p>
      <p className="not-found-product-container__message">
        Không tìm thấy sản phẩm
      </p>
    </div>
  );
};

export default NotFoundProduct;
