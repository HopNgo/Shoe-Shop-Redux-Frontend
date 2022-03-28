import { Formik } from "formik";
import React from "react";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { signUpUser } from "../../redux/user/userSlice";
import "./SignUpForm.scss";

function SignUpForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userStore = useSelector((state) => state.user);
  console.log(userStore);

  const handleSubmitFormSignUp = async (values) => {
    console.log(values);
    const newUser = {
      name: values.name,
      username: values.username,
      password: values.password,
      email: values.email,
      telephone: values.telephone,
    };
    const data = await dispatch(signUpUser(newUser));
    if (data.meta.requestStatus === "fulfilled") {
      navigate("/signin");
    }
  };
  const phoneRegExp = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;

  const schema = yup.object().shape({
    name: yup.string().required("* Bạn chưa nhập tên của bạn !!"),
    username: yup.string().required("* Bạn chưa nhập tài khoản !!"),
    email: yup
      .string()
      .required("* Bạn chưa nhập email !!")
      .email("* Email không xác thực !! vd: abcxyz.gmail.com"),
    telephone: yup
      .string()
      .required("* Bạn chưa nhập số điện thoại !!")
      .matches(phoneRegExp, "Số điện thoại không đúng định dạng !!"),
    password: yup.string().required("* Bạn chưa nhập mật khẩu !!"),
    confirmPassword: yup
      .string()
      .required("* Bạn chưa nhập lại mật khẩu !!")
      .oneOf([yup.ref("password")], "Mật khẩu không khớp !!"),
  });
  return (
    <div className="sign-up-form-container">
      {userStore.isLoading && (
        <div className="sign-in-form-container_loading">
          <Spinner
            animation="border"
            variant="primary"
            style={{ width: "3rem", height: "3rem" }}
          />
        </div>
      )}
      {userStore.messageError.length > 0 ? (
        <Alert variant="danger" className="fs-4 mb-5">
          * {userStore.messageError}
        </Alert>
      ) : (
        <></>
      )}
      <h1>ĐĂNG KÝ NGAY</h1>
      <Formik
        onSubmit={(values) => handleSubmitFormSignUp(values)}
        initialValues={{
          name: "",
          username: "",
          password: "",
          email: "",
          telephone: "",
          confirmPassword: "",
        }}
        validationSchema={schema}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          setFieldValue,
          values,
          touched,
          errors,
          isValid,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="">
              <Form.Control
                className="fs-4 py-2"
                name="name"
                type="text"
                placeholder="Tên của bạn"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                isInvalid={touched.name && errors.name}
              />
              <Form.Control.Feedback className="fs-5" type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Control
                className="fs-4 py-2"
                name="email"
                type="email"
                placeholder="Email của bạn"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                isInvalid={touched.email && errors.email}
              />
              <Form.Control.Feedback className="fs-5" type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Control
                className="fs-4 py-2"
                name="telephone"
                type="text"
                placeholder="Số điện thoại của bạn"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.telephone}
                isInvalid={touched.telephone && errors.telephone}
              />
              <Form.Control.Feedback className="fs-5" type="invalid">
                {errors.telephone}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Control
                className="fs-4 py-2"
                name="username"
                type="text"
                placeholder="Tên tài khoản"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                isInvalid={touched.username && errors.username}
              />
              <Form.Control.Feedback className="fs-5" type="invalid">
                {errors.username}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Control
                className="fs-4 py-2"
                name="password"
                type="password"
                value={values.password}
                placeholder="Mật khẩu"
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.password && errors.password}
              />
              <Form.Control.Feedback className="fs-5" type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Control
                className="fs-4 py-2"
                name="confirmPassword"
                type="password"
                value={values.confirmPassword}
                placeholder="Nhập lại mật khẩu"
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.confirmPassword && errors.confirmPassword}
              />
              <Form.Control.Feedback className="fs-5" type="invalid">
                {errors.confirmPassword}
              </Form.Control.Feedback>
            </Form.Group>
            <Button
              style={{ fontSize: "2rem", color: "white" }}
              className="w-100 py-2 fw-bold mt-5"
              variant="warning"
              type="submit"
            >
              ĐĂNG KÝ
            </Button>
          </Form>
        )}
      </Formik>
      <div className="sign-in-form-container__isHasAccount">
        <span className="text">Bạn đã có tài khoản ?</span>
        <Link className="link" to="/signin">
          Đăng nhập ngay
        </Link>
      </div>
    </div>
  );
}

export default SignUpForm;
