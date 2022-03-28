import React from "react";
import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import Charts from "../../components/Charts";
import RectangularBoxAdmin from "../../components/RectangularBoxAdmin";
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
            title="Số lượng đơn hàng"
            value={25 + " đơn hàng"}
            backgroundColor="bg-primary"
          />
        </Col>
        <Col xs={2}>
          <RectangularBoxAdmin
            title="Các sản phẩm bày bán"
            value={listProducts.length + " sản phẩm"}
            backgroundColor="bg-warning"
          />
        </Col>
        <Col xs={2}>
          <RectangularBoxAdmin
            title="Doanh số tất cả các năm"
            value={25 + " triệu đồng"}
            backgroundColor="bg-danger"
          />
        </Col>
        <Col xs={2}>
          <RectangularBoxAdmin
            title="Số lượng giày đã bán"
            value={25 + " đôi giày"}
            backgroundColor="bg-info"
          />
        </Col>
      </Row>
    </>
  );
};

export default AdminPage;
