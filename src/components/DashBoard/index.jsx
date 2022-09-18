import React from "react";
import { Col, Row } from "reactstrap";
import images from "../../constants/images";
import "./DashBoard.scss";
import HomeIcon from "@mui/icons-material/Home";
import IceSkatingIcon from "@mui/icons-material/IceSkating";
import { Link, useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/user/userSlice";
const DashBoard = () => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const handleClickLogOut = () => {
    localStorage.removeItem("accessToken");
    dispatch(logOut());
    navigate("/");
  };

  return (
    <>
      <Row className="d-flex justify-content-center">
        <img src={images.logo} className="w-50 mt-3 mb-2" alt="" />
      </Row>
      <Row className="">
        <h1
          className="fw-bold text-center text-primary"
          style={{ fontSize: "3rem" }}
        >
          SHOE SHOP
        </h1>
      </Row>
      <Row className="mb-5">
        <p
          style={{ fontStyle: "italic" }}
          className="text-primary fs-3 text-center "
        >
          Hello, {currentUser.name}
        </p>
      </Row>
      <Row className="p-3 row-feature">
        <Col xs={5} className="text-end">
          <HomeIcon className="icon-feature" style={{ fontSize: "2.5rem" }} />
        </Col>
        <Col className="d-flex align-items-center justify-content-start">
          <Link
            className="link-feature"
            style={{ textDecoration: "none", fontSize: "1.6rem" }}
            to="/admin"
          >
            Home
          </Link>
        </Col>
      </Row>
      <Row className="p-3 row-feature">
        <Col xs={5} className="text-end">
          <IceSkatingIcon
            className="icon-feature"
            style={{ fontSize: "2.5rem" }}
          />
        </Col>
        <Col className="d-flex align-items-center justify-content-start">
          <Link
            className="link-feature"
            style={{ textDecoration: "none", fontSize: "1.6rem" }}
            to="/admin/manage-product"
          >
            Products
          </Link>
        </Col>
      </Row>
      <Row className="p-3 row-feature">
        <Col xs={5} className="text-end">
          <ShoppingCartIcon
            className="icon-feature"
            style={{ fontSize: "2.5rem" }}
          />
        </Col>
        <Col className="d-flex align-items-center justify-content-start">
          <Link
            className="link-feature"
            style={{ textDecoration: "none", fontSize: "1.6rem" }}
            to="/admin/manage-cart"
          >
            Orders
          </Link>
        </Col>
      </Row>
      <Row className="p-3 row-feature">
        <Col xs={5} className="text-end">
          <MiscellaneousServicesIcon
            className="icon-feature"
            style={{ fontSize: "2.5rem" }}
          />
        </Col>
        <Col className="d-flex align-items-center justify-content-start">
          <Link
            className="link-feature"
            style={{ textDecoration: "none", fontSize: "1.6rem" }}
            to="/admin/manage-account"
          >
            Account
          </Link>
        </Col>
      </Row>
      <Row className="p-3 row-feature">
        <Col xs={5} className="text-end">
          <LogoutRoundedIcon
            className="icon-feature"
            style={{ fontSize: "2.5rem" }}
          />
        </Col>
        <Col className="d-flex align-items-center justify-content-start">
          <button
            onClick={handleClickLogOut}
            className="btn-feature"
            style={{ textDecoration: "none", fontSize: "1.6rem" }}
          >
            Log Out
          </button>
        </Col>
      </Row>
    </>
  );
};

export default DashBoard;
