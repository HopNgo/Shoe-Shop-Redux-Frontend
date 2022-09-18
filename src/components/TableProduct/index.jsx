import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, Table } from "reactstrap";
import { editProduct } from "../../redux/product/productSlice";
import ModalDeleteProduct from "../ModalDeleteProduct";

const TableProduct = () => {
  const products = useSelector((state) => state.products.list);
  const dispatch = useDispatch();

  const [isDeleting, setIsDeleting] = useState({ show: false, id: null });

  console.log(products);
  const [isEditting, setIsEditting] = useState({ show: false, id: null });

  const handleClickBtnEdit = (id) => {
    setIsEditting({ show: true, id: id });
    const productEditting = products.find((product) => product._id === id);
    setValuesProductEdit({
      name: productEditting.name,
      img: productEditting.img,
      costOld: productEditting.costOld,
      costNew: productEditting.costNew,
      gender: productEditting.gender,
      type: productEditting.type,
      brand: productEditting.brand,
    });
  };

  const [valuesProductEdit, setValuesProductEdit] = useState({
    name: "",
    img: "",
    costOld: "",
    costNew: "",
    gender: "",
    type: "",
    brand: "",
  });

  const handleClickEditProduct = () => {
    console.log(valuesProductEdit);
    console.log(isEditting.id);
    if (
      valuesProductEdit.name.length === 0 ||
      valuesProductEdit.img.length === 0 ||
      valuesProductEdit.costOld.length === 0 ||
      valuesProductEdit.costNew.length === 0 ||
      valuesProductEdit.brand.length === 0
    ) {
      return;
    } else {
      dispatch(
        editProduct({
          _id: isEditting.id,
          ...valuesProductEdit,
        })
      );
      setIsEditting({ show: false, id: null });
    }
  };
  return (
    <>
      <ModalDeleteProduct
        setIsDeleting={setIsDeleting}
        isDeleting={isDeleting}
      />
      <Table
        className="fs-4 mt-5 px-3 text-center align-baseline"
        striped
        bordered
      >
        <thead>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Image</th>
            <th>Old Price</th>
            <th>New Price</th>
            <th>Brand</th>
            <th>Gender</th>
            <th>Type</th>
            <th>Edit/Remove</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product._id}>
              <td>{index + 1}</td>
              <td style={{ width: "22rem" }}>
                {isEditting.show && product._id === isEditting.id ? (
                  <>
                    <Input
                      name="name"
                      className="border-1 py-2 fs-5 mt-5"
                      value={valuesProductEdit.name}
                      onChange={(e) =>
                        setValuesProductEdit({
                          ...valuesProductEdit,
                          name: e.target.value,
                        })
                      }
                    />
                    {valuesProductEdit.name.length > 0 ? null : (
                      <span className="mb-5 fs-5 text-danger">
                        * Bạn phải nhập trường này
                      </span>
                    )}
                  </>
                ) : (
                  product.name
                )}
              </td>
              <td style={{ width: "25rem" }}>
                {isEditting.show && product._id === isEditting.id ? (
                  <>
                    <Input
                      name="img"
                      className="border-1 py-2 fs-5"
                      value={valuesProductEdit.img}
                      onChange={(e) =>
                        setValuesProductEdit({
                          ...valuesProductEdit,
                          img: e.target.value,
                        })
                      }
                    />
                    {valuesProductEdit.img.length > 0 ? null : (
                      <span className="mb-5 fs-5 text-danger">
                        * Bạn phải nhập trường này
                      </span>
                    )}
                  </>
                ) : (
                  <img
                    style={{
                      maxWidth: "15rem",
                      minWidth: "15rem",
                      maxHeight: "15rem",
                      minHeight: "15rem",
                      objectFit: "cover",
                    }}
                    src={product.img}
                    alt="Not Found"
                  />
                )}
              </td>
              <td style={{ width: "10rem" }}>
                {isEditting.show && product._id === isEditting.id ? (
                  <>
                    <div className="d-flex">
                      <Input
                        name="costOld"
                        className="border-1 py-2 fs-5"
                        value={valuesProductEdit.costOld}
                        onChange={(e) =>
                          setValuesProductEdit({
                            ...valuesProductEdit,
                            costOld: e.target.value,
                          })
                        }
                      />
                      <span className="align-middle pt-2">.000đ</span>
                    </div>
                    {valuesProductEdit.costOld.length > 0 ? null : (
                      <span className="mb-5 fs-5 text-danger">
                        * You must enter this field
                      </span>
                    )}
                  </>
                ) : (
                  product.costOld + ".000đ"
                )}
              </td>
              <td style={{ width: "10rem" }}>
                {isEditting.show && product._id === isEditting.id ? (
                  <>
                    <div className="d-flex">
                      <Input
                        name="costNew"
                        className="border-1 py-2 fs-5"
                        value={valuesProductEdit.costNew}
                        onChange={(e) =>
                          setValuesProductEdit({
                            ...valuesProductEdit,
                            costNew: e.target.value,
                          })
                        }
                      />
                      <span className="align-middle pt-2">.000đ</span>
                    </div>
                    {valuesProductEdit.costNew.length > 0 ? null : (
                      <span className="mb-5 fs-5 text-danger">
                        * You must enter this field
                      </span>
                    )}
                  </>
                ) : (
                  product.costNew + ".000đ"
                )}
              </td>
              <td style={{ width: "12rem" }}>
                {isEditting.show && product._id === isEditting.id ? (
                  <>
                    <Input
                      name="brand"
                      className="border-1 py-2 fs-5 mt-5"
                      value={valuesProductEdit.brand}
                      onChange={(e) =>
                        setValuesProductEdit({
                          ...valuesProductEdit,
                          brand: e.target.value,
                        })
                      }
                    />
                    {valuesProductEdit.brand.length > 0 ? null : (
                      <span className="mb-5 fs-5 text-danger">
                        * You must enter this field
                      </span>
                    )}
                  </>
                ) : (
                  product.brand
                )}
              </td>
              <td>
                {isEditting.show && product._id === isEditting.id ? (
                  <Input
                    type="select"
                    name="gender"
                    className="border-1 py-2 fs-5 mt-5 mb-5"
                    value={valuesProductEdit.gender}
                    onChange={(e) =>
                      setValuesProductEdit({
                        ...valuesProductEdit,
                        gender: e.target.value,
                      })
                    }
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </Input>
                ) : (
                  (product.gender === "male" && "Male") ||
                  (product.gender === "female" && "Female")
                )}
              </td>
              <td>
                {isEditting.show && product._id === isEditting.id ? (
                  <Input
                    type="select"
                    name="type"
                    className="border-1 py-2 fs-5 mt-5 mb-5"
                    value={valuesProductEdit.type}
                    onChange={(e) =>
                      setValuesProductEdit({
                        ...valuesProductEdit,
                        type: e.target.value,
                      })
                    }
                  >
                    <option value="">None</option>
                    <option value="bestseller">Best Seller</option>
                    <option value="latestproduct">Latest Product</option>
                  </Input>
                ) : (
                  (product.type === "bestseller" && "Best Seller") ||
                  (product.type === "latestproduct" && "Latest Product")
                )}
              </td>
              <td>
                {isEditting.show && isEditting.id === product._id ? (
                  <>
                    <Button
                      onClick={handleClickEditProduct}
                      className="fs-5 pt-2 pb-2 px-3 bg-primary text-white border-0 mx-3"
                    >
                      Update
                    </Button>
                    <Button
                      className="fs-5 pt-2 pb-2 px-3 bg-secondary border-0"
                      onClick={() => setIsEditting({ show: false, id: null })}
                    >
                      Cancel
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      onClick={() => handleClickBtnEdit(product._id)}
                      className="fs-5 pt-2 pb-2 px-3 bg-success border-0 mx-3"
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() =>
                        setIsDeleting({
                          show: !isDeleting.show,
                          id: product._id,
                        })
                      }
                      className="fs-5 pt-2 pb-2 px-3 bg-danger border-0"
                    >
                      Remove
                    </Button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default TableProduct;
