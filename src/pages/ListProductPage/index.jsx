import "./ListProductPage.scss";
import { Link, useParams } from "react-router-dom";
import Filter from "../../components/Filter";
import ListProduct from "../../components/ListProduct";
import { Breadcrumbs, Typography } from "@mui/material";

function ListProductPage() {
  let nameBreadCrumb = "";
  const gender = useParams();
  const type = useParams();
  const brand = useParams();
  if (type && type.type === "latestproduct") {
    nameBreadCrumb = "Hàng mới";
  } else if (gender && gender.gender === "female") {
    nameBreadCrumb = "NỮ";
  } else if (gender && gender.gender === "male") {
    nameBreadCrumb = "NAM";
  } else if (brand) {
    nameBreadCrumb = brand.brand.charAt(0).toUpperCase() + brand.brand.slice(1);
  }

  return (
    <div className="list-product-page-container">
      <div className="list-product-page-container--breadcrumb">
        <Breadcrumbs aria-label="breadcrumb">
          <Link className="link" underline="hover" color="inherit" to="/">
            Home
          </Link>
          <Typography fontSize="1.5rem" fontWeight={600} color="text.primary">
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
