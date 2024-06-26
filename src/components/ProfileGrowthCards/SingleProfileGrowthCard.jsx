import React from "react";
import fundicon from "../../assets/fundicon.svg";
import { Link } from "react-router-dom";
function SingleProfileGrowthCard({ totalInvest, currentVal, totalReturn }) {
  return (
    <Link to="/portfoliodetails" className="single__profile__growth__card">
      <div className="proifle__growth__header">
        <img src={fundicon} alt="" />
        <div>
          <p>ABC Growth Fund</p>
          <span>Type: Venture capital</span>
        </div>
      </div>
      <div className="line"></div>
      {/* afterline */}
      <div className="proifle__growth__footer">
        <div className="invest__card">
          <span>Total investment</span>
          <p>{totalInvest}</p>
        </div>
        <div className="invest__card">
          <span>Current value</span>
          <p>{currentVal}</p>
        </div>
        <div className="invest__card">
          <span>Total Return</span>
          <p>{totalReturn}</p>
        </div>
      </div>
    </Link>
  );
}

export default SingleProfileGrowthCard;
