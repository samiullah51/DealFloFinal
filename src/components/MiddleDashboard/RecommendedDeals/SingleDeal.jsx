import React from "react";
import fundicon from "../../../assets/fundicon.svg";
import "./RecommendedDeals.css";
function SingleDeal() {
  return (
    <div className="single__deal">
      {/* single deal header */}
      <div className="deal__header">
        <div className="deal__header__left">
          <img src={fundicon} alt="" />
          <div className="deal__info">
            <p>ABC Growth Fund</p>
            <span>Stratups</span>
          </div>
        </div>
        <div className="days__left">21 day's left</div>
      </div>
      {/* single deal footer */}
      <div className="deal__footer">
        <div className="deal__footer__left">
          <div className="min__invest">Minimum investment</div>
          <div className="invest__price">$10,000</div>
        </div>
        {/* join button */}
        <button>Join deal</button>
      </div>
    </div>
  );
}

export default SingleDeal;
