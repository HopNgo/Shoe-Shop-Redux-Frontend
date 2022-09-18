import "./HomeProductItem.scss";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import InfoIcon from "@mui/icons-material/Info";
import { useDispatch } from "react-redux";
import { showAndgetUrlImageOverlay } from "../../redux/overlay/overlaySlice";
import { useNavigate } from "react-router-dom";

function HomeProductItem({ imageUrl, name, oldPrice, newPrice, brand, slug }) {
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
    <div className="product-item-container">
      <div className="product-item-container__image">
        <img src={imageUrl} alt="Not Found" />
        <div className="product-item-container__image-overlay">
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
      <div className="product-item-container__name">
        <h3>{name}</h3>
      </div>
      <div className="product-item-container__price">
        <span className="old-price">
          {new Intl.NumberFormat("vi-VN").format(oldPrice)} .000 VNĐ
        </span>
        <span className="new-price">
          {new Intl.NumberFormat("vi-VN").format(newPrice)} .000 VNĐ
        </span>
      </div>
    </div>
  );
}

export default HomeProductItem;
