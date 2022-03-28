import React from "react";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import BoxInfoCart from "../../components/BoxInfoCart";
import CartEmpty from "../../components/CartEmpty";
import ListCart from "../../components/ListCart";
import "./ShoppingCartPage.scss";

const ShoppingCartPage = () => {
  const listCart = useSelector((state) => state.cart.items);
  return (
    <Container fluid className="shopping-cart-page-container px-5 ">
      <Row>
        <h1 className="shopping-cart-page-container__heading">
          Giỏ hàng của bạn
        </h1>
      </Row>
      {listCart.length > 0 ? (
        <Row className="mt-5">
          <Col xs={8}>
            <ListCart />
          </Col>
          <Col xs={4}>
            <Row>
              <BoxInfoCart />
            </Row>
          </Col>
        </Row>
      ) : (
        <CartEmpty />
      )}
    </Container>
  );
};

export default ShoppingCartPage;
