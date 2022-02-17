import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DehazeIcon from "@mui/icons-material/Dehaze";
import "./Header.scss";
import images from "../../constants/images";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import IsLoggedIn from "./IsLoggedIn";
import { hideCart, showCart } from "../../redux/cart/cartSlice";
import { useState } from "react";

function Header() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const isShowCart = useSelector((state) => state.cart.isShow);
  const totalQtyCart = useSelector((state) => state.cart.totalQty);
  const navigate = useNavigate();
  const [showNavBarMobile, setShowNavBarMobile] = useState(false);
  const handleClickLogo = () => {
    navigate("/");
  };
  const handleClickCart = () => {
    if (isShowCart) {
      dispatch(hideCart());
    } else {
      dispatch(showCart());
    }
  };
  const handleClickDehazeIcon = () => {
    const linksElement = document.querySelector(".mobile-navbar");
    linksElement.classList.toggle("active");
  };
  return (
    <div className="header-container">
      <div className="header-container__logo">
        <img onClick={handleClickLogo} src={images.logo} alt="logo" />
      </div>
      <div className="header-container__iconShowAndHideNavbar">
        <DehazeIcon
          className="iconShowNavbar"
          onClick={handleClickDehazeIcon}
        />
      </div>
      <div className="header-container__links mobile-navbar">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/type/latestproduct">
          Hàng mới
        </Link>
        <Link className="link" to="/brand/nike">
          Nike
        </Link>
        <Link className="link" to="/brand/adidas">
          Adidas
        </Link>
        <Link className="link" to="/brand/converse">
          Converse
        </Link>
      </div>
      <div className="header-container__icons">
        <SearchIcon className="icon" />
        {<IsLoggedIn currentUser={currentUser} />}
        <div className="header-container__icons-cart">
          <div className="bagde">{totalQtyCart}</div>
          <ShoppingCartIcon className="icon" onClick={handleClickCart} />
        </div>
      </div>
    </div>
  );
}

export default Header;
