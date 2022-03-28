import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Input, Row } from "reactstrap";
import { changeEmailAction } from "../../redux/user/userSlice";

const ChangeEmail = ({ changeEmail, setChangeEmail }) => {
  console.log(changeEmail);
  const [showErrorEmail, setShowErrorEmail] = useState(false);
  const dispatch = useDispatch();
  const handleClickChangeEmail = () => {
    var regexEmail = new RegExp(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    if (regexEmail.test(changeEmail.email)) {
      dispatch(changeEmailAction({ email: changeEmail.email }));
      setChangeEmail({ show: false, email: "" });
    } else {
      setShowErrorEmail(true);
    }
  };
  return (
    <>
      <Row>
        <Input
          className="fs-5"
          name="email"
          type="text"
          placeholder="Email"
          value={changeEmail.email}
          onChange={(e) =>
            setChangeEmail({
              ...changeEmail,
              email: e.target.value,
            })
          }
        />
      </Row>
      {showErrorEmail && (
        <Row className="fs-5 text-danger mt-1 mb-1">
          *Email không đúng định dạng
        </Row>
      )}
      <Row className="d-flex justify-content-center">
        <Button
          className="fs-5 bg-success text-white mt-2 w-50"
          onClick={handleClickChangeEmail}
        >
          Cập nhật
        </Button>
      </Row>
    </>
  );
};

export default React.memo(ChangeEmail);
