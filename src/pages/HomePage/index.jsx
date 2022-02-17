import "./HomePage.scss";

import React from "react";
import CarouselBanner from "../../components/CarouselBanner";
import ListProductType from "../../components/ListProductType";

function HomePage() {
  return (
    <div className="home-container">
      <CarouselBanner />
      <div className="latest-product-container">
        <h1 className="latest-product-container__heading">Sản phẩm mới nhất</h1>
        <ListProductType type="latestproduct" />
      </div>
      <div className="best-seller-container">
        <h1 className="best-seller-container__heading">Sản phẩm bán chạy</h1>
        <ListProductType type="bestseller" />
      </div>
    </div>
  );
}

export default HomePage;
