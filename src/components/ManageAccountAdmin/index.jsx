import { Col, Container, Input, Row } from "reactstrap";
import { useState } from "react";
import "./ManageAccountAdmin.scss";
import BtnAction from "./BtnAction";
import { useSelector } from "react-redux";
const ManageAccountAdmin = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChange, setIsChange] = useState({ show: false, type: null });
  const [error, setError] = useState({ type: null, message: "" });
  console.log(name);

  return (
    <Container className="fs-4 m-0 mx-5" style={{ maxWidth: "70rem" }}>
      <Row className="mt-5">
        <Row>
          <Col xs={3} className="fw-bold fs-3">
            Tên quản trị
          </Col>
          <Col xs={6}>
            {isChange.show && isChange.type === "name" ? (
              <>
                <Input
                  className="fs-5 py-2"
                  type="text"
                  placeholder="Tên quản trị"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {error.type === "name" && (
                  <span className="text-danger fs-5">{error.message}</span>
                )}
              </>
            ) : (
              <span>{currentUser.name}</span>
            )}
          </Col>
          <Col className="text-end">
            <BtnAction
              type="name"
              isChange={isChange}
              setIsChange={setIsChange}
              valueNameInput={name}
              setError={setError}
              setNameInput={setName}
            />
          </Col>
        </Row>
        <Row>
          <Row className="text-secondary fs-5 mt-3 mb-3">
            Tên quản trị được hiển thị bên thanh dashboard
          </Row>
          <Row>
            <hr />
          </Row>
        </Row>
      </Row>
      <Row className="mt-5">
        <Row>
          <Col xs={3} className="fw-bold fs-3">
            Tên tài khoản
          </Col>
          <Col xs={6}>
            {isChange.show && isChange.type === "username" ? (
              <>
                <Input
                  className="fs-5 py-2"
                  type="text"
                  placeholder="Tên tài khoản"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                {error.type === "username" && (
                  <span className="text-danger fs-5">{error.message}</span>
                )}
              </>
            ) : (
              <span>{currentUser.username}</span>
            )}
          </Col>
          <Col className="text-end">
            <BtnAction
              type="username"
              isChange={isChange}
              setIsChange={setIsChange}
              setError={setError}
              valueUsernameInput={username}
              setUsername={setUsername}
            />
          </Col>
        </Row>
        <Row>
          <Row className="text-secondary fs-5 mt-3 mb-3">
            Tên tài khoản dùng để đăng nhập
          </Row>
          <Row>
            <hr />
          </Row>
        </Row>
      </Row>
      <Row className="mt-5">
        <Row>
          <Col xs={3} className="fw-bold fs-3">
            Mật khẩu
          </Col>
          <Col xs={6}>
            {isChange.show && isChange.type === "password" ? (
              <>
                <Input
                  className="fs-5 py-2 mb-3"
                  type="password"
                  placeholder="Mật khẩu mới"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                  className="fs-5 py-2"
                  type="password"
                  placeholder="Nhập lại mật khẩu"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {error.type === "password" && (
                  <span className="text-danger fs-5">{error.message}</span>
                )}
              </>
            ) : (
              <span>**********</span>
            )}
          </Col>
          <Col className="text-end">
            <BtnAction
              type="password"
              isChange={isChange}
              setIsChange={setIsChange}
              setError={setError}
              valuePasswordInput={password}
              valueConfirmPasswordInput={confirmPassword}
              setConfirmPassword={setConfirmPassword}
              setPassword={setPassword}
            />
          </Col>
        </Row>
        <Row>
          <Row className="text-secondary fs-5 mt-3 mb-3">
            Mật khẩu dùng để đăng nhập
          </Row>
          <Row>
            <hr />
          </Row>
        </Row>
      </Row>
    </Container>
  );
};

export default ManageAccountAdmin;
