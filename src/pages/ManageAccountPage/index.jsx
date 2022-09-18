import SettingsIcon from "@mui/icons-material/Settings";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row, UncontrolledAlert } from "reactstrap";
import ManageAccountAdmin from "../../components/ManageAccountAdmin";
import { setEmptyMessageSuccess } from "../../redux/user/userSlice";
const ManageAccountPage = () => {
  const messageSuccess = useSelector((state) => state.user.messageSuccess);
  const dispatch = useDispatch();
  console.log(messageSuccess);
  const timerDestroyMessageSuccessIdRef = useRef(null);
  useEffect(() => {
    timerDestroyMessageSuccessIdRef.current = setTimeout(() => {
      dispatch(setEmptyMessageSuccess());
      console.log("dispatch empty");
    }, 3000);
    return () => {
      clearTimeout(timerDestroyMessageSuccessIdRef.current);
    };
  }, [messageSuccess, dispatch]);

  return (
    <Container>
      <Row>
        <Col xs={1} style={{ maxWidth: "5rem" }}>
          <SettingsIcon style={{ fontSize: "4rem", color: "#ff7a00" }} />
        </Col>
        <Col>
          <h1 className="fw-bold mt-2" style={{ color: "#ff7a00" }}>
            Account Information
          </h1>
        </Col>
      </Row>
      <Row className="mt-3">
        <hr />
      </Row>
      {messageSuccess.length > 0 && (
        <Row className="w-50 fs-5">
          <UncontrolledAlert color="success">
            {messageSuccess}
          </UncontrolledAlert>
        </Row>
      )}
      <Row>
        <ManageAccountAdmin />
      </Row>
    </Container>
  );
};

export default ManageAccountPage;
