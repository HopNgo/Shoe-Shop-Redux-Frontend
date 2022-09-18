import React from "react";
import { Col, Container, Row } from "reactstrap";
import DeleteIcon from "@mui/icons-material/Delete";
import "./ListCart.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeItemCart } from "../../redux/cart/cartSlice";

const ListCart = () => {
  const dispatch = useDispatch();

  const listCart = useSelector((state) => state.cart);
  console.log(listCart);
  const handleClickDeleteCart = (index) => {
    dispatch(removeItemCart(index));
  };
  return (
    <Container className="list-cart-container">
      <Row
        className="p-3 shadow list-cart-container__heading"
        style={{ backgroundColor: "rgba(234,234,234,1)" }}
      >
        <Col xs={5} className="px-5">
          <span className="fw-bold">Product Info</span>
        </Col>
        <Col
          xs={2}
          className="fw-bold d-flex align-items-center justify-content-center"
        >
          <span>Price</span>
        </Col>
        <Col
          xs={2}
          className="fw-bold d-flex align-items-center justify-content-center"
        >
          <span>Quantity</span>
        </Col>
        <Col
          xs={2}
          className="fw-bold d-flex align-items-center justify-content-center"
        >
          <span>Total</span>
        </Col>
        <Col xs={1}></Col>
      </Row>
      {listCart.items.map((item, index) => (
        <Row
          key={index}
          className="p-3 mt-5 shadow list-cart-container__item"
          style={{ backgroundColor: "rgba(234,234,234,1)" }}
        >
          <Col xs={5} className="">
            <Row className="">
              <Col
                xs={4}
                style={{
                  maxWidth: "10.5rem",
                  maxHeight: "11rem",
                  minWidth: "10.5rem",
                  minHeight: "11rem",
                }}
              >
                <img
                  src={item.item.img}
                  alt=""
                  width={"100%"}
                  height={"100%"}
                  style={{ objectFit: "cover" }}
                  className="shadow"
                />
              </Col>
              <Col>
                <p className="fw-bold text-wrap">{item.item.name}</p>
                <p className="fs-5">Brand: {item.item.brand}</p>
                <p className="fs-5">Gender: {item.item.gender}</p>
                <p className="fs-5">Size: {item.size}</p>
                <p></p>
              </Col>
            </Row>
          </Col>
          <Col
            xs={2}
            className=" d-flex align-items-center justify-content-center"
          >
            <span className=" align-middle">{item.item.costNew}.000đ</span>
          </Col>
          <Col
            xs={2}
            className=" d-flex align-items-center justify-content-center"
          >
            <span className="">{item.qty}</span>
          </Col>
          <Col
            xs={2}
            className="d-flex align-items-center justify-content-center"
          >
            <span className="">
              {new Intl.NumberFormat("vi-VN").format(item.price)}.000đ
            </span>
          </Col>
          <Col
            xs={1}
            className="d-flex align-items-center justify-content-center"
          >
            <DeleteIcon
              onClick={() => handleClickDeleteCart(index)}
              className="delete-icon"
            />
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default ListCart;
