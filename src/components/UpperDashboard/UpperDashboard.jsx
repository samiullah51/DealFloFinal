import React from "react";
import "./UpperDashboard.css";
import wallet from "../../assets/wallet.svg";
import total from "../../assets/total.svg";
import trendingup from "../../assets/trendingup.svg";
function UpperDashboard() {
  return (
    <div className="upper__dashboard">
      <div className="upper__dashboard__left">
        <div className="upper__left__banner">
          <p style={{ fontWeight: "600", fontSize: "20px" }}>
            Start you journey to financial freedom
          </p>
          <p style={{ fontSize: "16px", fontWeight: "400", width: "45%" }}>
            See a list of investment funds and take decision of investing in it.
          </p>
          <button>See Funds</button>
        </div>
        <div className="cards">
          <div className="single__card">
            <div className="card__header">
              <img src={wallet} alt="" />
              <span>Asset Value</span>
            </div>
            <p>$593,980</p>
          </div>
          <div className="single__card">
            <div className="card__header">
              <img src={total} alt="" />
              <span>Total Profit</span>
            </div>
            <p>
              $205,875
              <span>
                <img src={trendingup} alt="" /> +16.24 %
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="upper__dashboard__right">
        <h2>Chart here</h2>
      </div>
    </div>
  );
}

export default UpperDashboard;
