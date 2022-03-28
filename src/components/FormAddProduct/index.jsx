import { Formik } from "formik";
import React, { useRef } from "react";
import { Form, Spinner, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { addProduct } from "../../redux/product/productSlice";
import "./FormAddProduct.scss";
const FormAddProduct = ({ showFormAddProduct, setShowFormAddProduct }) => {
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    name: yup.string().required("* Bạn cần nhập trường này"),
    img: yup.string().required("* Bạn cần nhập trường này"),
    costOld: yup.string().required("* Bạn cần nhập trường này"),
    costNew: yup.string().required("* Bạn cần nhập trường này"),
    brand: yup.string().required("* Bạn cần nhập trường này"),
    type: yup.string(),
    gender: yup.string().required("* Bạn cần nhập trường này"),
  });
  const handleSubmitFormAddProduct = (values) => {
    console.log(values);
    dispatch(addProduct(values));
    setShowFormAddProduct(false);
  };
  return (
    <div className="form-add-product-container">
      <div className="form-add-product-container__form">
        <h1 className="fw-bold text-center text-info">THÊM SẢN PHẨM</h1>
        <Formik
          onSubmit={handleSubmitFormAddProduct}
          initialValues={{
            name: "",
            img: "",
            costOld: "",
            costNew: "",
            brand: "",
            type: "",
            gender: "",
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
                <Form.Label className="fs-4 text-info">Tên sản phẩm</Form.Label>
                <Form.Control
                  className="fs-4 py-2"
                  name="name"
                  type="text"
                  placeholder="Tên sản phẩm ..."
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  isInvalid={touched.name && errors.name}
                />
                <Form.Control.Feedback className="fs-5" type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="fs-4 text-info">Link Ảnh</Form.Label>
                <Form.Control
                  className="fs-4 py-2"
                  name="img"
                  type="text"
                  placeholder="Link Ảnh ..."
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.img}
                  isInvalid={touched.img && errors.img}
                />
                <Form.Control.Feedback className="fs-5" type="invalid">
                  {errors.img}
                </Form.Control.Feedback>
              </Form.Group>
              <div className="form-add-product-container__price mb-3">
                <Form.Group style={{ maxWidth: "20rem" }}>
                  <Form.Label className="fs-4 text-info">Giá cũ</Form.Label>
                  <Form.Control
                    className="fs-4 py-2"
                    name="costOld"
                    type="text"
                    placeholder="Giá cũ ..."
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.costOld}
                    isInvalid={touched.costOld && errors.costOld}
                  />
                  <Form.Control.Feedback className="fs-5" type="invalid">
                    {errors.costOld}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group style={{ maxWidth: "20rem" }}>
                  <Form.Label className="fs-4 text-info">Giá mới</Form.Label>
                  <Form.Control
                    className="fs-4 py-2"
                    name="costNew"
                    type="text"
                    value={values.costNew}
                    placeholder="Giá mới ..."
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.costNew && errors.costNew}
                  />
                  <Form.Control.Feedback className="fs-5" type="invalid">
                    {errors.costNew}
                  </Form.Control.Feedback>
                </Form.Group>
              </div>
              <Form.Group className="mb-3">
                <Form.Label className="fs-4 text-info">Thương hiệu</Form.Label>
                <Form.Control
                  className="fs-4 py-2"
                  name="brand"
                  type="text"
                  value={values.brand}
                  placeholder="Thương hiệu ..."
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.brand && errors.brand}
                />
                <Form.Control.Feedback className="fs-5" type="invalid">
                  {errors.brand}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="fs-4 text-info">Giới tính</Form.Label>
                <Form.Control
                  className="fs-4 py-2"
                  as="select"
                  name="gender"
                  value={values.gender}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.gender && errors.gender}
                >
                  <option disabled value="">
                    Chọn giới tính
                  </option>
                  <option value="male">Nam</option>
                  <option value="female">Nữ</option>
                </Form.Control>
                <Form.Control.Feedback className="fs-5" type="invalid">
                  {errors.gender}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="fs-4 text-info">Loại</Form.Label>
                <Form.Control
                  className="fs-4 py-2"
                  as="select"
                  name="type"
                  value={values.type}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.type && errors.type}
                >
                  <option value="">Không</option>
                  <option value="bestseller">Bán chạy nhất</option>
                  <option value="latestproduct">Mới nhất</option>
                </Form.Control>
                <Form.Control.Feedback className="fs-5" type="invalid">
                  {errors.type}
                </Form.Control.Feedback>
              </Form.Group>
              <Button
                className="w-25 py-2 fw-bold mt-5 fs-4 text-white mx-4 float-end"
                variant="secondary"
                onClick={() => setShowFormAddProduct(!showFormAddProduct)}
              >
                HỦY
              </Button>
              <Button
                className="w-25 py-2 fw-bold mt-5 fs-4 text-white float-end"
                variant="info"
                type="submit"
              >
                THÊM
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FormAddProduct;
