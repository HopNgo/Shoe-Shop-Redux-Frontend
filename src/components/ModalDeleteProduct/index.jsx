import React from "react";
import { useDispatch } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { deleteProduct } from "../../redux/product/productSlice";

const ModalDeleteProduct = ({ setIsDeleting, isDeleting }) => {
  console.log(isDeleting);
  const dispatch = useDispatch();
  const handleClickDeleteProduct = () => {
    dispatch(deleteProduct({ _id: isDeleting.id }));
    setIsDeleting({ show: !isDeleting.show, id: null });
  };
  console.log("123");
  return (
    <Modal
      className="fs-4"
      isOpen={isDeleting.show}
      toggle={() => setIsDeleting({ show: !isDeleting.show, id: null })}
    >
      <ModalHeader
        toggle={() => setIsDeleting({ show: !isDeleting.show, id: null })}
      >
        Xóa sản phẩm ?
      </ModalHeader>
      <ModalBody style={{ height: "10rem" }}>
        Bán có chắc chắn muốn xóa sản phẩm này không ?
      </ModalBody>
      <ModalFooter>
        <Button
          className="fs-4 px-4"
          color="danger"
          onClick={handleClickDeleteProduct}
        >
          Xóa
        </Button>
        <Button
          className="fs-4 px-4"
          onClick={() => setIsDeleting({ show: !isDeleting.show, id: null })}
        >
          Hủy
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default React.memo(ModalDeleteProduct);
