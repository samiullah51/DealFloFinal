import React from "react";
import "./Sector.css";
function Sector({ status, title }) {
  return (
    <div className="sector">
      <span className="status">{status}</span>
      <p className="sector__title">{title}</p>
    </div>
  );
}

export default Sector;
