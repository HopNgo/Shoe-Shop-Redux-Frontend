import React from "react";
import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import Charts from "../../components/Charts";
import RectangularBoxAdmin from "../../components/BoxAdmin";
import "./AdminPage.scss";

const AdminPage = () => {
  const listProducts = useSelector((state) => state.products.list);
  return (
    <>
      <Row>
        <Charts />
      </Row>
      <Row
        style={{ marginTop: "5rem" }}
        className="d-flex justify-content-evenly"
      >
        <Col xs={2}>
          <RectangularBoxAdmin
            title="Number of orders"
            value={25 + " orders"}
            backgroundColor="bg-primary"
          />
        </Col>
        <Col xs={2}>
          <RectangularBoxAdmin
            title="Number of products"
            value={listProducts.length + " products"}
            backgroundColor="bg-warning"
          />
        </Col>
        <Col xs={2}>
          <RectangularBoxAdmin
            title="Total Sales In Year"
            value={25 + " million dong"}
            backgroundColor="bg-danger"
          />
        </Col>
        <Col xs={2}>
          <RectangularBoxAdmin
            title="Number of shoes sold"
            value={25 + " shoes"}
            backgroundColor="bg-info"
          />
        </Col>
      </Row>
    </>
  );
};

export default AdminPage;
