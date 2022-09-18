import { Formik } from "formik";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { addProduct } from "../../redux/product/productSlice";
import "./FormAddProduct.scss";
const FormAddProduct = ({ showFormAddProduct, setShowFormAddProduct }) => {
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    name: yup.string().required("* You must enter this field"),
    img: yup.string().required("* You must enter this field"),
    costOld: yup.string().required("* You must enter this field"),
    costNew: yup.string().required("* You must enter this field"),
    brand: yup.string().required("* You must enter this field"),
    type: yup.string(),
    gender: yup.string().required("* You must enter this field"),
  });
  const handleSubmitFormAddProduct = (values) => {
    console.log(values);
    dispatch(addProduct(values));
    setShowFormAddProduct(false);
  };
  return (
    <div className="form-add-product-container">
      <div className="form-add-product-container__form">
        <h1 className="fw-bold text-center text-info">ADD PRODUCT</h1>
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
                <Form.Label className="fs-4 text-info">Name</Form.Label>
                <Form.Control
                  className="fs-4 py-2"
                  name="name"
                  type="text"
                  placeholder="Name ..."
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
                <Form.Label className="fs-4 text-info">Link Image</Form.Label>
                <Form.Control
                  className="fs-4 py-2"
                  name="img"
                  type="text"
                  placeholder="Link Image ..."
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
                  <Form.Label className="fs-4 text-info">Old Cost</Form.Label>
                  <Form.Control
                    className="fs-4 py-2"
                    name="costOld"
                    type="text"
                    placeholder="Old Cost..."
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
                  <Form.Label className="fs-4 text-info">New Cost</Form.Label>
                  <Form.Control
                    className="fs-4 py-2"
                    name="costNew"
                    type="text"
                    value={values.costNew}
                    placeholder="New cost ..."
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
                <Form.Label className="fs-4 text-info">Brand</Form.Label>
                <Form.Control
                  className="fs-4 py-2"
                  name="brand"
                  type="text"
                  value={values.brand}
                  placeholder="Brand ..."
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.brand && errors.brand}
                />
                <Form.Control.Feedback className="fs-5" type="invalid">
                  {errors.brand}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="fs-4 text-info">Gender</Form.Label>
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
                    Select Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Form.Control>
                <Form.Control.Feedback className="fs-5" type="invalid">
                  {errors.gender}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="fs-4 text-info">Type</Form.Label>
                <Form.Control
                  className="fs-4 py-2"
                  as="select"
                  name="type"
                  value={values.type}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.type && errors.type}
                >
                  <option value="">None</option>
                  <option value="bestseller">Best Seller</option>
                  <option value="latestproduct">Latest Product</option>
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
                Cancel
              </Button>
              <Button
                className="w-25 py-2 fw-bold mt-5 fs-4 text-white float-end"
                variant="info"
                type="submit"
              >
                Confirm
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FormAddProduct;
