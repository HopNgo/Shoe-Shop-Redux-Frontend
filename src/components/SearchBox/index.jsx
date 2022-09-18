import React, { useState } from "react";
import { Button, Input } from "reactstrap";
import "./SearchBox.scss";
import { createSearchParams, useNavigate } from "react-router-dom";

const SearchBox = ({ setShowSearchBox }) => {
  const [valueSearchBox, setValueSearchBox] = useState();
  console.log(valueSearchBox);
  const navigate = useNavigate();

  const handleClickBtnSearch = () => {
    navigate({
      pathname: "search",
      search: createSearchParams({
        q: valueSearchBox,
      }).toString(),
    });
    setShowSearchBox((prev) => !prev);
  };
  return (
    <div className="search-box-container">
      <div className="search-box-container__input">
        <Input
          className="input-search"
          placeholder="Enter product..."
          onChange={(e) => setValueSearchBox(e.target.value)}
        />
      </div>
      <div className="search-box-container__btn">
        <Button className="btn-search" onClick={handleClickBtnSearch}>
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchBox;
