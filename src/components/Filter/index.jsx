import "./Filter.scss";

import React from "react";
import { Link } from "react-router-dom";

function Filter() {
  return (
    <div className="filter-container">
      <h2 className="filter-container__heading">BỘ LỌC TÌM KIẾM</h2>
      <div className="filter-container--brand">
        <h4 className="filter-container--brand__heading">THƯƠNG HIỆU</h4>
        <Link to="/brand/adidas" className="link">
          Adidas
        </Link>
        <Link to="/brand/nike" className="link">
          Nike
        </Link>
        <Link to="/brand/converse" className="link">
          Converse
        </Link>
        <Link to="/brand/vans" className="link">
          Vans
        </Link>
      </div>
      <div className="filter-container--gender">
        <h4 className="filter-container--gender__heading">GIỚI TÍNH</h4>
        <Link to="/gender/female" className="link">
          Nữ
        </Link>
        <Link to="/gender/male" className="link">
          Nam
        </Link>
      </div>
    </div>
  );
}

export default Filter;
