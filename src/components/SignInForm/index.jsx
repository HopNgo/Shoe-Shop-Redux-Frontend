import { Formik } from "formik";
import React from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { facebookProvider, googleProvider } from "../../config/authMethod";
import images from "../../constants/images";
import { logIn, signInUser } from "../../redux/user/userSlice";
import socialMediaAuth from "../../service/auth";
import "./SignInForm.scss";

function SignInForm() {
  const dispatch = useDispatch();
  const userStore = useSelector((state) => state.user);

  const handleClickAuth = async (provider) => {
    const res = await socialMediaAuth(provider);
    if (res.uid) {
      const dataUser = {
        userId: res.uid,
        name: res.displayName,
        avatarUrl: res.photoURL,
        isAdmin: false,
        email: res.email,
        telephone: res.phoneNumber,
        address: null,
      };
      dispatch(logIn(dataUser));
      console.log(res);
      localStorage.setItem("rememberedAccount", JSON.stringify(dataUser));
    }
  };

  const handleSubmitFormSignIn = async (values) => {
    console.log(values);
    const data = await dispatch(signInUser(values));
    if (data.meta.requestStatus === "fulfilled") {
      localStorage.setItem("accessToken", data.payload.accessToken);
    }
  };
  const schema = yup.object().shape({
    username: yup.string().required("* Bạn chưa nhập tài khoản !!"),
    password: yup.string().required("* Bạn chưa nhập mật khẩu !!"),
  });
  return (
    <div className="sign-in-form-container">
      {userStore.messageError.length > 0 ? (
        <Alert variant="danger" className="fs-4 mb-5">
          * {userStore.messageError}
        </Alert>
      ) : null}

      {userStore.messageSuccess.length > 0 ? (
        <Alert variant="success" className="fs-4 mb-5">
          * {userStore.messageSuccess}
        </Alert>
      ) : null}
      <h1>ĐĂNG NHẬP NGAY</h1>
      <Formik
        onSubmit={(values) => handleSubmitFormSignIn(values)}
        initialValues={{
          username: "",
          password: "",
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
            <Form.Group className="mb-3">
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
            <Button
              style={{ fontSize: "2rem", color: "white" }}
              className="w-100 py-2 fw-bold mt-5"
              variant="warning"
              type="submit"
            >
              ĐĂNG NHẬP
            </Button>
          </Form>
        )}
      </Formik>
      <div className="sign-in-form-container__line">
        <div className="left-line"></div>
        <span className="or-text">HOẶC</span>
        <div className="right-line"></div>
      </div>
      <div className="sign-in-form-container__logo-social-media">
        <img
          src={images.LOGO_FACEBOOK}
          alt="Not Found"
          className="facebook-logo"
          onClick={() => handleClickAuth(facebookProvider)}
        />
        <img
          src={images.LOGO_GOOGLE}
          alt="Not Found"
          className="google-logo"
          onClick={() => handleClickAuth(googleProvider)}
        />
      </div>
      <div className="sign-in-form-container__isHasAccount">
        <span className="text">Bạn chưa có tài khoản ?</span>
        <Link className="link" to="/signup">
          Đăng ký ngay
        </Link>
      </div>
    </div>
  );
}

export default SignInForm;
