import "./Filter.scss";
import queryString from "query-string";
import React from "react";
import { Link } from "react-router-dom";

function Filter() {
  const stringifiedPrice = (min, max) =>
    queryString.stringify({ min: min, max: max });

  return (
    <div className="filter-container">
      <h2 className="filter-container__heading">SEARCH FILTER</h2>
      <div className="filter-container--brand">
        <h4 className="filter-container--brand__heading">BRAND</h4>
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
        <h4 className="filter-container--gender__heading">GENDER</h4>
        <Link to="/gender/female" className="link">
          Female
        </Link>
        <Link to="/gender/male" className="link">
          Male
        </Link>
      </div>
      <div className="filter-container--price">
        <h4 className="filter-container--price__heading">PRICE</h4>
        <Link to={`/price/?${stringifiedPrice(0, 500)}`} className="link">
          {"< 500.000Đ"}
        </Link>
        <Link to={`/price/?${stringifiedPrice(500, 750)}`} className="link">
          500.000đ - 750.000đ
        </Link>
        <Link to={`/price/?${stringifiedPrice(750, 1000)}`} className="link">
          750.000đ - 1.000.000đ
        </Link>
        <Link
          to={`/price/?${stringifiedPrice(1000, 9999999)}`}
          className="link"
        >
          {"> 1.000.000Đ"}
        </Link>
      </div>
    </div>
  );
}

export default Filter;
