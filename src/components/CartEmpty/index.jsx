import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Row } from "reactstrap";
import images from "../../constants/images";

const CartEmpty = () => {
  const navigate = useNavigate();
  return (
    <Container className="d-flex flex-column align-items-center">
      <Row>
        <img
          style={{ maxWidth: "30rem" }}
          src={images.LOGO_CART_EMPTY}
          alt=""
        />
      </Row>
      <Row className="fs-4 mt-5">
        Không có sản phẩm nào trong giỏ hàng của bạn !!
      </Row>
      <Row>
        <Button
          onClick={() => navigate("/")}
          style={{ backgroundColor: "#472F1E" }}
          className="pt-2 mt-5 pb-2 px-4 py-4 fs-4 "
        >
          Tiếp tục mua sắm
        </Button>
      </Row>
    </Container>
  );
};

export default CartEmpty;
