import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import StarIcon from "@mui/icons-material/Star";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addItemCart } from "../../redux/cart/cartSlice";
import SizeGuideModal from "../SizeGuideModal";
import "./DetailProduct.scss";

function DetailProduct() {
  const arrSize = [38, 39, 40, 41, 42];

  const [isOpenSizeGuideModal, setIsOpenSizeGuideModal] = useState(false);

  const [sizeValue, setSizeValue] = useState(38);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { slug } = useParams();

  const detailProductItem = useSelector((state) =>
    state.products.list.find((item) => item.slug === slug)
  );

  useEffect(() => {
    const listBtnSize = document.querySelectorAll(".btn-size");
    listBtnSize.forEach((btn) => {
      if (Number(btn.textContent) === sizeValue) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }, [sizeValue]);

  const toggleSizeGuideModal = () => {
    setIsOpenSizeGuideModal(!isOpenSizeGuideModal);
  };

  const handleClickDecrease = () => {
    if (quantity === 1) {
      return;
    } else {
      setQuantity(quantity - 1);
    }
  };
  const handleClickIncrease = () => {
    setQuantity(quantity + 1);
  };
  const handleClickBtnSize = (size) => {
    setSizeValue(size);
  };

  const handleClickAddToCart = () => {
    const itemAddToCart = {
      item: detailProductItem,
      size: sizeValue,
      qty: quantity,
      price: quantity * detailProductItem.costNew,
    };
    dispatch(addItemCart(itemAddToCart));
  };
  return (
    <div className="detail-product-container">
      <div className="detail-product-container--image">
        <img src={detailProductItem && detailProductItem.img} alt="Not Found" />
      </div>
      <div className="detail-product-container--info">
        <h2 className="detail-product-container--info__name">
          {detailProductItem && detailProductItem.name}
        </h2>
        <div className="detail-product-container--info__price">
          <p className="oldPrice">
            {detailProductItem && detailProductItem.costOld}.000 VNĐ
          </p>
          <p className="newPrice">
            {detailProductItem && detailProductItem.costNew}.000 VNĐ
          </p>
        </div>
        <p className="detail-product-container--info__free-delivery">
          + Shipping Cost:{" "}
          <strong style={{ color: "#e1a32b", marginLeft: "1rem" }}>
            {" "}
            30.000đ
          </strong>
        </p>
        <div className="detail-product-container--info__starsAndViewer">
          <div className="stars">
            <StarIcon className="star" />
            <StarIcon className="star" />
            <StarIcon className="star" />
            <StarIcon className="star" />
            <StarIcon className="star" />
          </div>
          <p className="viewer">453 viewer</p>
        </div>
        <div className="detail-product-container--info__description">
          <p>
            The radiance that lives in this shoe puts a new spin on what you
            know best: Solid overlays, clean, soft finishes and the perfect
            amount of flash to make you shine. Help us to be more confident in
            our steps.
          </p>
        </div>
        <div className="detail-product-container--info__sizes">
          <span className="title">Size</span>
          {arrSize.map((size) => (
            <button
              onClick={() => handleClickBtnSize(size)}
              key={size}
              className="btn-size"
            >
              {size}
            </button>
          ))}
        </div>
        <div className="detail-product-container--info__sizeGuide">
          <SizeGuideModal
            isOpenSizeGuideModal={isOpenSizeGuideModal}
            toggle={toggleSizeGuideModal}
          />
          <span onClick={toggleSizeGuideModal}>Size Guide</span>
        </div>
        <div className="detail-product-container--info__quantityAndAddToCart">
          <div className="quantity">
            <RemoveIcon onClick={handleClickDecrease} className="decrease" />
            <span className="value">{quantity}</span>
            <AddIcon onClick={handleClickIncrease} className="increase" />
          </div>
          <div className="add-to-cart">
            <button onClick={handleClickAddToCart}>ADD TO CART</button>
          </div>
        </div>
      </div>
      <div className="detail-product-container--extra-info">
        <div className="detail-product-container--extra-info__item">
          <p className="left-text">Brand</p>
          <p className="right-text">
            {detailProductItem && detailProductItem.brand}
          </p>
        </div>
        <div className="detail-product-container--extra-info__item">
          <p className="left-text">Weight</p>
          <p className="right-text">560mg</p>
        </div>
        <div className="detail-product-container--extra-info__item">
          <p className="left-text">Type</p>
          <p className="right-text">Sneaker</p>
        </div>
        <div className="detail-product-container--extra-info__item">
          <p className="left-text">Material</p>
          <p className="right-text">Mesh Fabric</p>
        </div>
        <div className="detail-product-container--extra-info__item">
          <p className="left-text">Origin</p>
          <p className="right-text">American</p>
        </div>
        <div className="detail-product-container--extra-info__item">
          <p className="left-text">Remaining Mount</p>
          <p className="right-text">100</p>
        </div>
        <div className="detail-product-container--extra-info__item">
          <p className="left-text">Gender</p>
          <p className="right-text">
            {detailProductItem && detailProductItem.gender}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;
