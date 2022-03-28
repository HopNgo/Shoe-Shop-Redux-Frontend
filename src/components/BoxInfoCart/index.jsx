import LinearProgress from "@mui/material/LinearProgress";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Col, Container, Row } from "reactstrap";
import { orderCart } from "../../redux/cart/cartSlice";
import ProvincesVnAddress from "../ProvincesVnAddress";
import "./BoxInfoCart.scss";
import ChangeEmail from "./ChangeEmail";
import ChangeTelephone from "./ChangeTelephone";

const BoxInfoCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.currentUser);
  const listCart = useSelector((state) => state.cart);
  const [showChangeAddress, setShowChangeAddress] = useState(false);
  const [changeTelephone, setChangeTelephone] = useState({
    show: false,
    tel: "",
  });
  const [changeEmail, setChangeEmail] = useState({
    show: false,
    email: "",
  });
  const [showErrorTelephone, setShowErrorTelephone] = useState(false);
  const [showErrorAddress, setShowErrorAddress] = useState(false);
  const [showErrorEmail, setShowErrorEmail] = useState(false);

  const handleClickSubmitOrder = async () => {
    if (!currentUser.address) {
      setShowErrorAddress(true);
    } else {
      setShowErrorAddress(false);
    }
    if (!currentUser.email) {
      setShowErrorEmail(true);
    } else {
      setShowErrorEmail(false);
    }
    if (!currentUser.telephone) {
      setShowErrorTelephone(true);
    } else {
      setShowErrorTelephone(false);
    }
    if (currentUser.address && currentUser.telephone) {
      const { isShow, isLoading, ...other } = listCart;
      const data = {
        userInfo: {
          name: currentUser.name,
          email: currentUser.email,
          telephone: currentUser.telephone,
          address: currentUser.address,
        },
        cartInfo: other,
      };
      const res = await dispatch(orderCart(data));
      if (res.payload.isSuccess) {
        localStorage.removeItem("storageCart");
        navigate("/cart/orderSuccess");
      }
    }
  };

  return (
    <Container>
      {listCart.isLoading && (
        <Row>
          <LinearProgress />
        </Row>
      )}
      <Row
        className="shadow"
        style={{ backgroundColor: "rgba(234,234,234,1)" }}
      >
        {showErrorEmail && (
          <Row className="fs-5 text-danger mt-2 mx-2">
            * Bạn chưa nhập email
          </Row>
        )}
        {showErrorTelephone && (
          <Row className="fs-5 text-danger mt-2 mx-2">
            * Bạn chưa nhập số điện thoại
          </Row>
        )}
        {showErrorAddress && (
          <Row className="fs-5 text-danger mt-2 mx-2">
            * Bạn chưa nhập địa chỉ giao hàng
          </Row>
        )}
        <Row>
          <h1
            className="fw-bold text-center pt-4 pb-2"
            style={{ color: "#FF7A00" }}
          >
            Thông tin giỏ hàng
          </h1>
          <hr className="" />
        </Row>
        <Row className="fs-4">
          <Row className="pb-2 pt-2">
            <Col xs={4}>Tên khách hàng: </Col>
            <Col>{currentUser.name}</Col>
          </Row>
          <Row className="pb-2 pt-2">
            <Col xs={4}>Email: </Col>
            {changeEmail.show ? (
              <Col>
                <ChangeEmail
                  changeEmail={changeEmail}
                  setChangeEmail={setChangeEmail}
                />
              </Col>
            ) : (
              <Col>{currentUser.email ? currentUser.email : "Chưa có"}</Col>
            )}
            <Col xs={2}>
              <span
                onClick={() =>
                  setChangeEmail({
                    ...changeEmail,
                    show: !changeEmail.show,
                  })
                }
                className={"btn-change fs-5 text-primary"}
              >
                {changeEmail.show ? "Hủy" : "Thay đổi"}
              </span>
            </Col>
          </Row>
          <Row className="pb-2 pt-2">
            <Col xs={4}>Số điện thoại: </Col>
            {changeTelephone.show ? (
              <Col>
                <ChangeTelephone
                  changeTelephone={changeTelephone}
                  setChangeTelephone={setChangeTelephone}
                />
              </Col>
            ) : (
              <Col>
                {currentUser.telephone ? currentUser.telephone : "Chưa có"}
              </Col>
            )}
            <Col xs={2}>
              <span
                onClick={() =>
                  setChangeTelephone({
                    ...changeTelephone,
                    show: !changeTelephone.show,
                  })
                }
                className={"btn-change fs-5 text-primary"}
              >
                {changeTelephone.show ? "Hủy" : "Thay đổi"}
              </span>
            </Col>
          </Row>
          <Row className="pb-2 pt-2">
            <Col xs={4}>Địa chỉ: </Col>
            {showChangeAddress ? (
              <Col>
                <ProvincesVnAddress
                  setShowChangeAddress={setShowChangeAddress}
                />
              </Col>
            ) : (
              <Col>
                {currentUser.address
                  ? `${currentUser.address.ward}, ${currentUser.address.district}, ${currentUser.address.province}`
                  : "Chưa có"}
              </Col>
            )}

            <Col xs={2}>
              <span
                onClick={() => setShowChangeAddress(!showChangeAddress)}
                className={"btn-change fs-5 text-primary"}
              >
                {showChangeAddress ? "Hủy" : "Thay đổi"}
              </span>
            </Col>
          </Row>
          <Row className="pb-2 pt-2">
            <Col xs={4}>Tổng đơn hàng: </Col>
            <Col>
              {new Intl.NumberFormat("vi-VN").format(listCart.totalPrice)}.000đ
            </Col>
          </Row>
          <Row className="pb-2 pt-2">
            <Col xs={4}>Giảm giá (10%): </Col>
            <Col>{(listCart.totalPrice * 10) / 100}.000đ</Col>
          </Row>
          <Row className="pb-2 pt-2">
            <Col xs={4}>Phí vận chuyển: </Col>
            <Col> 30.000đ</Col>
          </Row>
        </Row>
        <hr />
        <Row className="text-danger fs-3 fw-bold mt-5 pb-5">
          <Col xs={4}>TỔNG CỘNG:</Col>
          <Col>
            {new Intl.NumberFormat("vi-VN").format(
              (listCart.totalPrice * 90) / 100 - 30
            )}
            .000đ
          </Col>
        </Row>
      </Row>
      <Row>
        <Button
          onClick={handleClickSubmitOrder}
          style={{ backgroundColor: "#472F1E" }}
          className="btn-order text-white pt-3 fw-bold pb-3 fs-4 mt-5"
        >
          ĐẶT HÀNG
        </Button>
      </Row>
    </Container>
  );
};

export default BoxInfoCart;
