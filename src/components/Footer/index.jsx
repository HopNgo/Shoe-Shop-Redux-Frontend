import "./Footer.scss";

import React from "react";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-container--support">
        <h3 className="footer-container--support__heading">Support</h3>
        <p className="footer-container--support__hotline"> 19001234</p>
        <p className="footer-container--support__content">
          All days in week (except holidays )
        </p>
      </div>
      <div className="footer-container--branch">
        <h3 className="footer-container--branch__heading">Brand System</h3>
        <p className="footer-container--branch__city"> HCM </p>
        <p className="footer-container--branch__city"> Ha Noi </p>
        <p className="footer-container--branch__city"> Da Nang </p>
      </div>
      <div className="footer-container--registation">
        <h3 className="footer-container--registation__heading">
          Sign up for information
        </h3>
        <input
          className="footer-container--registation__input"
          type="text"
          placeholder="Email"
        />
        <button className="footer-container--registation__btn">Register</button>
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
