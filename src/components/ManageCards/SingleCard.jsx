import React from "react";
import "./ManageCards.css";
import fundicon from "../../assets/fundicon.svg";
import trendingicon from "../../assets/trendingup.svg";
function SingleCard({ title, value }) {
  return (
    <div className="single__card">
      <div className="single__card__header">
        <img src={fundicon} alt="" />
        <p>{title}</p>
      </div>
      <div className="single__card__footer">
        <p>{value}</p>
        <div className="trending__status">
          <img src={trendingicon} alt="" /> <span>+16.24 %</span>
        </div>
      </div>
    </div>
  );
}

export default SingleCard;
