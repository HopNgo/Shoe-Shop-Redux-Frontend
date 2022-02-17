import { useNavigate } from "react-router-dom";
import "./Banner.scss";

function Banner({ backgroundImage, homeText, homeShoe, title, color }) {
  const navigate = useNavigate();
  const handleClickBtnBuyNow = () => {
    navigate("/brand/nike");
  };
  return (
    <div
      className="banner-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="banner-container__textAndBtn">
        <span style={{ color: color }}>{title}</span>
        <button onClick={handleClickBtnBuyNow}> Mua Ngay</button>
      </div>
      <div className="banner-container__images">
        <img className="text" src={homeText} alt="Not Found" />
        <img className="shoe" src={homeShoe} alt="Not Found" />
      </div>
    </div>
  );
}

export default Banner;
