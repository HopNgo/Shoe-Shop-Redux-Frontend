import "./Overlay.scss";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { hideOverlay } from "../../redux/overlay/overlaySlice";
function Overlay({ imageUrl }) {
  const dispatch = useDispatch();
  const handleClickClose = () => {
    const action = hideOverlay();
    dispatch(action);
  };
  const handleClickOverlayToClose = (e) => {
    if (!e.target.closest(".overlay-container__image")) {
      const action = hideOverlay();
      dispatch(action);
    }
  };
  return (
    <div
      onClick={(e) => handleClickOverlayToClose(e)}
      className="overlay-container"
    >
      <img className="overlay-container__image" src={imageUrl} alt="" />
      <div className="overlay-container__icon">
        <CloseIcon onClick={handleClickClose} className="icon-close" />
      </div>
    </div>
  );
}

export default Overlay;
