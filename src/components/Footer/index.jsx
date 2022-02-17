import "./Footer.scss";

import React from "react";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-container--support">
        <h2 className="footer-container--support__heading">Hổ trợ</h2>
        <p className="footer-container--support__hotline"> 19001234</p>
        <p className="footer-container--support__content">
          Tất cả các ngày trong tuần ( trừ lễ tết )
        </p>
      </div>
      <div className="footer-container--branch">
        <h2 className="footer-container--branch__heading">
          Hệ thống chi nhánh
        </h2>
        <p className="footer-container--branch__city"> Thành Phố Hồ Chí Minh</p>
        <p className="footer-container--branch__city"> Bình Dương </p>
      </div>
      <div className="footer-container--registation">
        <h2 className="footer-container--registation__heading">
          Đăng ký nhận thông tin
        </h2>
        <input
          className="footer-container--registation__input"
          type="text"
          placeholder="Email"
        />
        <button className="footer-container--registation__btn">
          Đăng ký ngay
        </button>
      </div>
      <div className="footer-container--social-media">
        <img
          src="https://brandlogos.net/wp-content/uploads/2021/04/facebook-icon.png"
          alt=""
        />
        <img
          src="https://brandlogos.net/wp-content/uploads/2020/11/facebook-messenger-logo.png"
          alt=""
        />
        <img
          src="https://seeklogo.com/images/I/instagram-new-2016-logo-D9D42A0AD4-seeklogo.com.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Footer;
