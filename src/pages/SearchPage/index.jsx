import React from "react";
import Filter from "../../components/Filter";
import ListProduct from "../../components/ListProduct";
import "./SearchPage.scss";
const SearchPage = () => {
  return (
    <div className="search-page-container">
      <div className="search-page-container__heading">
        <h3>Sản phẩm tìm kiếm</h3>
      </div>
      <div className="search-page-container__line"></div>
      <div className="search-page-container-filterAndListProduct">
        <Filter />
        <ListProduct />
      </div>
    </div>
  );
};

export default SearchPage;
