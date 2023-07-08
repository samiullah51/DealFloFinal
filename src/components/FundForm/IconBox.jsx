import React from "react";
import pdficon from "../../assets/pdficon.svg";
import closeicon from "../../assets/closeicon.svg";

function IconBox({ icon, title }) {
  return (
    <div className="icon__box">
      <img src={icon} alt="" />
      <div>
        <p className="title">{title}</p>
        <p className="status">240kb</p>
      </div>
      <img src={closeicon} className="closeicon" alt="" />
    </div>
  );
}

export default IconBox;
