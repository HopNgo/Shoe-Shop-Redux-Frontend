import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Input, Row } from "reactstrap";
import { changeTelephoneAction } from "../../redux/user/userSlice";

const ChangeTelephone = ({ changeTelephone, setChangeTelephone }) => {
  console.log(changeTelephone);
  const [showErrorTelephone, setShowErrorTelephone] = useState(false);
  const dispatch = useDispatch();
  const handleClickChangeTelephone = () => {
    var regexTelephone = new RegExp(
      /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/
    );

    if (regexTelephone.test(changeTelephone.tel)) {
      dispatch(changeTelephoneAction({ telephone: changeTelephone.tel }));
      setChangeTelephone({ show: false, tel: "" });
    } else {
      setShowErrorTelephone(true);
    }
  };
  return (
    <>
      <Row>
        <Input
          className="fs-5"
          name="telephone"
          type="text"
          placeholder="Phone Number..."
          value={changeTelephone.tel}
          onChange={(e) =>
            setChangeTelephone({
              ...changeTelephone,
              tel: e.target.value,
            })
          }
        />
      </Row>
      {showErrorTelephone && (
        <Row className="fs-5 text-danger mt-1 mb-1">*Number is not valid</Row>
      )}
      <Row className="d-flex justify-content-center">
        <Button
          className="fs-5 bg-success text-white mt-2 w-50"
          onClick={handleClickChangeTelephone}
        >
          Update
        </Button>
      </Row>
    </>
  );
};

export default React.memo(ChangeTelephone);
