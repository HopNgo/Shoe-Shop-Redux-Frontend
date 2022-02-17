import "./ListProductItem.scss";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import InfoIcon from "@mui/icons-material/Info";
import React from "react";
import { useDispatch } from "react-redux";
import { showAndgetUrlImageOverlay } from "../../redux/overlay/overlaySlice";
import { useNavigate } from "react-router-dom";

function ListProductItem({ imageUrl, name, newPrice, brand, slug }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClickZoomIn = (imageUrl) => {
    const action = showAndgetUrlImageOverlay(imageUrl);
    dispatch(action);
  };
  const handleClickBtnInfo = () => {
    navigate(`/brand/${brand}/${slug}`);
  };
  return (
    <div className="list-product-item-container">
      <div className="list-product-item-container__image">
        <img src={imageUrl} alt="Not Found" />
        <div className="list-product-item-container__image-overlay">
          <button
            onClick={() => handleClickZoomIn(imageUrl)}
            className="btn-zoom-in"
          >
            <ZoomInIcon className="zoom-in"></ZoomInIcon>
          </button>
          <button onClick={handleClickBtnInfo} className="btn-infor">
            <InfoIcon className="infor"></InfoIcon>
          </button>
        </div>
      </div>
      <div className="list-product-item-container__name">
        <h3>{name}</h3>
      </div>
      <div className="list-product-item-container__price">
        <span className="new-price">{newPrice}.000 VNĐ</span>
      </div>
    </div>
  );
}

export default ListProductItem;
