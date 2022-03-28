import React from "react";
import { Container, Row } from "reactstrap";
import TableCart from "../../components/TableCart";

const ManageCartPage = () => {
  return (
    <Container fluid="true">
      <Row className="text-center">
        <h1 style={{ fontSize: "3rem", color: "#ff7a00" }} className="fw-bold">
          DANH SÁCH ĐƠN HÀNG
        </h1>
      </Row>
      <Row>
        <TableCart />
      </Row>
    </Container>
  );
};

export default ManageCartPage;
