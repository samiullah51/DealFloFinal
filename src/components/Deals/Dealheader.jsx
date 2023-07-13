import React from "react";
import dealicon2 from "../../assets/dealicon2.svg";

function Dealheader() {
  return (
    <div className="single__investment__deal__header">
      <img src={dealicon2} alt="" />
      <div className="single__investment__deal__header__content">
        <div className="deal__info">
          <div className="info__deal">
            <p>ABC Growth Fund</p>
            <div className="days__left">21 day's left</div>
          </div>
          <span>
            A high-growth equity fund focused on technology startups...
          </span>
          <p style={{ fontWeight: "400", fontSize: "14px" }}>
            Target Market: <span>Startups</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dealheader;
