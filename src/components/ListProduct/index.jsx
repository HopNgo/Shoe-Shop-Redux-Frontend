import "./ListProduct.scss";
import queryString from "query-string";
import React from "react";
import ListProductItem from "../ListProductItem";
import { useSelector } from "react-redux";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import NotFoundProduct from "../NotFoundProduct";
import { LinearProgress } from "@mui/material";
import { isEmpty } from "lodash";
function ListProduct() {
  const products = useSelector((state) => state.products.list);
  const loadingProducts = useSelector((state) => state.products.status);
  const [searchParams] = useSearchParams();
  const { type, brand, gender } = useParams();
  const location = useLocation();

  const priceParsed = queryString.parse(location.search);

  const searchWord = searchParams.get("q");
  const listProductSearched = products.filter((item) =>
    item.name.toLowerCase().includes(searchWord?.toLowerCase())
  );

  const filterProduct = (type, gender, brand) => {
    if (type) {
      return products.filter((item) => item.type === type);
    } else if (gender) {
      return products.filter((item) => item.gender === gender);
    } else if (brand) {
      return products.filter((item) => item.brand === brand);
    } else if (!isEmpty(priceParsed)) {
      console.log(priceParsed);
      return products.filter(
        (item) =>
          Number(priceParsed.min) <= Number(item.costNew) &&
          Number(item.costNew) <= Number(priceParsed.max)
      );
    }
    return [];
  };

  console.log(searchWord, listProductSearched);

  if (loadingProducts === "loading") {
    return (
      <div
        style={{
          width: "100%",
        }}
      >
        <LinearProgress color="warning" />
      </div>
    );
  } else
    return (
      <div className="list-product-container">
        {filterProduct(type, gender, brand).map((item, index) => (
          <ListProductItem
            key={item._id}
            imageUrl={item.img}
            name={item.name}
            newPrice={item.costNew}
            brand={item.brand}
            slug={item.slug}
          />
        ))}
        {listProductSearched.length > 0 &&
          searchWord &&
          listProductSearched.map((item) => (
            <ListProductItem
              key={item._id}
              imageUrl={item.img}
              name={item.name}
              newPrice={item.costNew}
              brand={item.brand}
              slug={item.slug}
            />
          ))}
        {listProductSearched.length === 0 && searchWord && <NotFoundProduct />}
      </div>
    );
}

export default ListProduct;
