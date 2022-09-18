import React from "react";
import { Route, Routes } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import DashBoard from "../../components/DashBoard";
import AdminPage from "../../pages/AdminPage";
import ManageAccountPage from "../../pages/ManageAccountPage";
import ManageCartPage from "../../pages/ManageOrderPage";
import ManageProductPage from "../../pages/ManageProductPage";
import "./Admin.scss";

const Admin = () => {
  return (
    <Container className="adminPage-container bg-white" fluid>
      <Row style={{ height: "100vh" }}>
        <Col xl={2} className="adminPage-container_dashboard ">
          <DashBoard />
        </Col>
        <Col xl={10} className="mt-5">
          <Routes>
            <Route path="/" element={<AdminPage />} />
            <Route path="/manage-product" element={<ManageProductPage />} />
            <Route path="/manage-cart" element={<ManageCartPage />} />
            <Route path="/manage-account" element={<ManageAccountPage />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
};

export default Admin;
