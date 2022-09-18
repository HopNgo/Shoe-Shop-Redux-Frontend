import React from "react";

const RectangularBoxAdmin = ({ title, value, backgroundColor }) => {
  return (
    <div className={backgroundColor + " p-5"}>
      <p className="text-center fs-5 text-light">{title}</p>
      <p
        style={{ fontStyle: "italic" }}
        className="text-center fs-3 text-light"
      >
        {value}
      </p>
    </div>
  );
};

export default RectangularBoxAdmin;
