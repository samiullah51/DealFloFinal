import React from "react";
import "./UpperDashboard.css";
import wallet from "../../assets/wallet.svg";
import total from "../../assets/total.svg";
import trendingup from "../../assets/trendingup.svg";
import AssetAllocationChart from "../../AssetAllocationChart";
function UpperDashboard() {
  return (
    <div className="upper__dashboard">
      <div className="upper__dashboard__left">
        <div className="upper__left__banner">
          <p style={{ fontWeight: "600", fontSize: "20px" }}>
            Start you journey to financial freedom
          </p>
          <p className="pp" style={{ fontSize: "16px", fontWeight: "400" }}>
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
      <div className="upper__dashboard__right" style={{ zIndex: 1 }}>
        <h2>Asset allocation</h2>
        <AssetAllocationChart />
        <div className="single__bar__legends">
          <div className="legend__wrapper">
            <div
              className="single__legend"
              style={{ backgroundColor: "rgba(191, 219, 254, 1)" }}
            >
              <div style={{ backgroundColor: "rgba(59, 130, 246, 1)" }}></div>
            </div>
            <span>Real Estate</span>
          </div>
          <div className="legend__wrapper">
            <div
              className="single__legend"
              style={{ backgroundColor: "rgba(187, 247, 208, 1)" }}
            >
              <div style={{ backgroundColor: "rgba(34, 197, 94, 1)" }}></div>
            </div>
            <span>Startups</span>
          </div>{" "}
          <div className="legend__wrapper">
            <div
              className="single__legend"
              style={{ backgroundColor: "rgba(254, 215, 170, 1)" }}
            >
              <div style={{ backgroundColor: "rgba(249, 115, 22, 1)" }}></div>
            </div>
            <span>Cash</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpperDashboard;
