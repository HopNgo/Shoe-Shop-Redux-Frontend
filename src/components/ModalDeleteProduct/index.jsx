import React from "react";
import { useDispatch } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { deleteProduct } from "../../redux/product/productSlice";

const ModalDeleteProduct = ({ setIsDeleting, isDeleting }) => {
  const dispatch = useDispatch();
  const handleClickDeleteProduct = () => {
    dispatch(deleteProduct({ _id: isDeleting.id }));
    setIsDeleting({ show: !isDeleting.show, id: null });
  };

  return (
    <Modal
      className="fs-4"
      isOpen={isDeleting.show}
      toggle={() => setIsDeleting({ show: !isDeleting.show, id: null })}
    >
      <ModalHeader
        toggle={() => setIsDeleting({ show: !isDeleting.show, id: null })}
      >
        Remove Product
      </ModalHeader>
      <ModalBody style={{ height: "10rem" }}>
        Are you sure you want to remove this product ?
      </ModalBody>
      <ModalFooter>
        <Button
          className="fs-4 px-4"
          color="danger"
          onClick={handleClickDeleteProduct}
        >
          Comfirm
        </Button>
        <Button
          className="fs-4 px-4"
          onClick={() => setIsDeleting({ show: !isDeleting.show, id: null })}
        >
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default React.memo(ModalDeleteProduct);
