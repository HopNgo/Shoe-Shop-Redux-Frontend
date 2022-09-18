import React, { useState } from "react";
import { Button, Row } from "reactstrap";
import FormAddProduct from "../../components/FormAddProduct";
import TableProduct from "../../components/TableProduct";
import "./ManageProductPage.scss";

const ManageProductPage = () => {
  const [showFormAddProduct, setShowFormAddProduct] = useState(false);
  return (
    <>
      {showFormAddProduct && (
        <FormAddProduct
          setShowFormAddProduct={setShowFormAddProduct}
          showFormAddProduct={showFormAddProduct}
        />
      )}
      <Row>
        <h1
          className="text-center fw-bold"
          style={{ fontSize: "3rem", color: "rgb(255, 122, 0)" }}
        >
          PRODUCT LIST
        </h1>
      </Row>
      <Row className="d-flex justify-content-end">
        <Button
          onClick={() => setShowFormAddProduct(!showFormAddProduct)}
          style={{ maxWidth: "15rem", borderRadius: "1rem" }}
          className="btn-add fs-4 p-2 bg-primary text-white border-0 mx-5"
        >
          Add Product
        </Button>
      </Row>
      <Row className="px-4 py-4">
        <TableProduct />
      </Row>
    </>
  );
};

export default ManageProductPage;
