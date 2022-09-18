import "./ListProductPage.scss";
import { Link, useParams } from "react-router-dom";
import Filter from "../../components/Filter";
import ListProduct from "../../components/ListProduct";
import { Breadcrumbs, Typography } from "@mui/material";
import { useEffect, useState } from "react";

function ListProductPage() {
  const [nameBreadCrumb, setNameBreadCrumb] = useState();
  const { gender, type, brand } = useParams();

  useEffect(() => {
    if (gender) {
      setNameBreadCrumb(gender.charAt(0).toUpperCase() + gender.slice(1));
    } else if (type) {
      setNameBreadCrumb(type.charAt(0).toUpperCase() + type.slice(1));
    } else if (brand) {
      setNameBreadCrumb(brand.charAt(0).toUpperCase() + brand.slice(1));
    }
  }, [gender, type, brand]);

  return (
    <div className="list-product-page-container">
      <div className="list-product-page-container--breadcrumb">
        <Breadcrumbs aria-label="breadcrumb">
          <Link className="link" underline="hover" color="inherit" to="/">
            Home
          </Link>
          <Typography fontSize="1.5rem" color="#533723" fontWeight={600}>
            {nameBreadCrumb}
          </Typography>
        </Breadcrumbs>
      </div>
      <div className="list-product-page-container__line"></div>
      <div className="list-product-page-container-filterAndListProduct">
        <Filter />
        <ListProduct />
      </div>
    </div>
  );
}

export default ListProductPage;
