import React from "react";
import "./MiddleDashboard.css";
import RecommendedDeals from "./RecommendedDeals/RecommendedDeals";
import LineChart from "../../LineChart";
import ResLineChart from "../../ResLineChart";
function MiddleDashboard() {
  return (
    <div className="middle__dashboard">
      <div className="middle__left" style={{ backgroundColor: "#fff" }}>
        <h2>Investment Performance</h2>
        <LineChart />
      </div>
      <div className="middle__left__res" style={{ backgroundColor: "#fff" }}>
        <h2>Investment Performance</h2>
        {/* <ResLineChart /> */}
        <LineChart />
      </div>
      <div className="middle__right" style={{ backgroundColor: "#fff" }}>
        {/* recommended Deals */}
        <RecommendedDeals />
      </div>
    </div>
  );
}

export default MiddleDashboard;
