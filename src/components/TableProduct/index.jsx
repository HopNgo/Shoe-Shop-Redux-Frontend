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
            <th>Tên sản phẩm</th>
            <th>Hình ảnh</th>
            <th>Giá cũ</th>
            <th>Giá mới</th>
            <th>Thương hiệu</th>
            <th>Giới tính</th>
            <th>Loại</th>
            <th>Chỉnh sửa/Xóa</th>
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
                    style={{ maxWidth: "15rem", minWidth: "15rem" }}
                    src={product.img}
                    alt=""
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
                        * Bạn phải nhập trường này
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
                        * Bạn phải nhập trường này
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
                        * Bạn phải nhập trường này
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
                    <option value="male">Nam</option>
                    <option value="female">Nữ</option>
                  </Input>
                ) : (
                  (product.gender === "male" && "Nam") ||
                  (product.gender === "female" && "Nữ")
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
                    <option value="">Không</option>
                    <option value="bestseller">Bán chạy nhất</option>
                    <option value="latestproduct">Mới nhất</option>
                  </Input>
                ) : (
                  (product.type === "bestseller" && "Bán chạy nhất") ||
                  (product.type === "latestproduct" && "Mới nhất")
                )}
              </td>
              <td>
                {isEditting.show && isEditting.id === product._id ? (
                  <>
                    <Button
                      onClick={handleClickEditProduct}
                      className="fs-5 pt-2 pb-2 px-4 bg-primary text-white border-0 mx-3"
                    >
                      Cập nhật
                    </Button>
                    <Button
                      className="fs-5 pt-2 pb-2 px-4 bg-secondary border-0"
                      onClick={() => setIsEditting({ show: false, id: null })}
                    >
                      Hủy
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      onClick={() => handleClickBtnEdit(product._id)}
                      className="fs-5 pt-2 pb-2 px-4 bg-success border-0 mx-3"
                    >
                      Chỉnh sửa
                    </Button>
                    <Button
                      onClick={() =>
                        setIsDeleting({
                          show: !isDeleting.show,
                          id: product._id,
                        })
                      }
                      className="fs-5 pt-2 pb-2 px-4 bg-danger border-0"
                    >
                      Xóa
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
