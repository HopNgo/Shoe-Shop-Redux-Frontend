import React from "react";
import { Button, Container, Row } from "reactstrap";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useNavigate } from "react-router-dom";
const OrderSuccessPage = () => {
  const navigate = useNavigate();
  return (
    <Container
      style={{ marginTop: "10rem", marginBottom: "20rem" }}
      className="d-flex align-items-center flex-column"
    >
      <Row className="mb-5">
        <h1 className="fw-bold " style={{ fontSize: "3rem", color: "#ff7a00" }}>
          Giỏ hàng của bạn
        </h1>
      </Row>
      <Row>
        <CheckCircleOutlineIcon style={{ fontSize: "20rem", color: "green" }} />
      </Row>
      <Row style={{ color: "green" }} className="fw-bold fs-1 mb-3">
        Đặt hàng thành công
      </Row>
      <Row className="fs-4 mt-5">
        Cảm ơn khách hàng Nguyễn Văn A đã quan tâm đến shop của chúng tôi
      </Row>
      <Row className="fs-4">
        Xin hãy kiểm tra thông tin đặt hàng của bạn qua email
      </Row>
      <Row className="mt-5">
        <Button
          onClick={() => {
            navigate("/");
          }}
          className="fs-4 pt-2 pb-2 "
          style={{ width: "20rem", backgroundColor: "#472F1E", color: "white" }}
        >
          Tiếp tục mua sắm
        </Button>
      </Row>
    </Container>
  );
};

export default OrderSuccessPage;
