import "./ListProduct.scss";

import React from "react";
import ListProductItem from "../ListProductItem";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function ListProduct() {
  const products = useSelector((state) => state.products.list);
  const type = useParams();
  const gender = useParams();
  const brand = useParams();
  return (
    <div className="list-product-container">
      {type &&
        products.map((item) => {
          if (item.type === type.type) {
            return (
              <ListProductItem
                key={item._id}
                imageUrl={item.img}
                name={item.name}
                newPrice={item.costNew}
                brand={item.brand}
                slug={item.slug}
              />
            );
          }
        })}
      {brand &&
        products.map((item) => {
          if (item.brand === brand.brand) {
            return (
              <ListProductItem
                key={item._id}
                imageUrl={item.img}
                name={item.name}
                newPrice={item.costNew}
                brand={item.brand}
                slug={item.slug}
              />
            );
          }
        })}
      {gender &&
        products.map((item) => {
          if (item.gender === gender.gender) {
            return (
              <ListProductItem
                key={item._id}
                imageUrl={item.img}
                name={item.name}
                newPrice={item.costNew}
                brand={item.brand}
                slug={item.slug}
              />
            );
          }
        })}
    </div>
  );
}

export default ListProduct;
