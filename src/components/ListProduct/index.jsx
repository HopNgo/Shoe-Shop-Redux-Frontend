import "./ListProduct.scss";

import React from "react";
import ListProductItem from "../ListProductItem";
import { useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import NotFoundProduct from "../NotFoundProduct";
function ListProduct() {
  const products = useSelector((state) => state.products.list);
  const [searchParams, setSearchParams] = useSearchParams();
  const type = useParams();
  const gender = useParams();
  const brand = useParams();
  const searchWord = searchParams.get("q") || "";
  const listProductSearched = products.filter((item) =>
    item.name.toLowerCase().includes(searchWord.toLowerCase())
  );
  console.log(listProductSearched);
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
      {listProductSearched.length > 0 ? (
        listProductSearched.map((item) => (
          <ListProductItem
            key={item._id}
            imageUrl={item.img}
            name={item.name}
            newPrice={item.costNew}
            brand={item.brand}
            slug={item.slug}
          />
        ))
      ) : (
        <NotFoundProduct />
      )}
    </div>
  );
}

export default ListProduct;
