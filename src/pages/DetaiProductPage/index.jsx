import "./DetailProductPage.scss";
import React from "react";
import { Link, useParams } from "react-router-dom";
import Filter from "../../components/Filter";
import DetailProduct from "../../components/DetailProduct";
import { Breadcrumbs, Typography } from "@mui/material";
import Comments from "../../components/CommentDetailProduct/Comments";

function DetailProductPage() {
  const { brand, slug } = useParams();
  console.log(slug, brand);
  return (
    <div className="detail-product-page-container">
      <div className="detail-product-page-container--breadcrumb">
        <Breadcrumbs aria-label="breadcrumb">
          <Link className="link" underline="hover" color="inherit" to="/">
            Home
          </Link>
          <Link
            className="link"
            underline="hover"
            color="inherit"
            to={"/brand/" + brand}
          >
            {brand}
          </Link>
          <Typography fontSize="1.5rem" fontWeight={600} color="text.primary">
            {slug}
          </Typography>
        </Breadcrumbs>
      </div>
      <div className="detail-product-page-container__line"></div>
      <div className="detail-product-page-container-filterAndDetailProductAndComments">
        <div className="filter">
          <Filter />
        </div>
        <div className="detailProductAndComments">
          <div className="detailProduct">
            <DetailProduct />
          </div>
          <div className="comment">
            <h1> Khách Hàng Review</h1>
            <div className="comment-line"></div>
            <Comments />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailProductPage;
