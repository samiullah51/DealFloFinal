import React from "react";
import "./Latests.css";
import latest from "../../assets/images/latest.png";
function SingleLatest() {
  return (
    <div className="single__latest">
      <img src={latest} alt="" />
      <button>12 Apr, 2023</button>
      <p className="latest__title">New Investment Opportunity</p>
      <p className="desc">
        We are thrilled to present a new investment opportunity in the emerging
        technology sector. The detailed investment proposal, including market
        analysis and growth projections, is now available for interested
        investors.
      </p>
    </div>
  );
}

export default SingleLatest;
