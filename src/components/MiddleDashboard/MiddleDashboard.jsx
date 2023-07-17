import React from "react";
import "./MiddleDashboard.css";
import RecommendedDeals from "./RecommendedDeals/RecommendedDeals";
import LineChart from "../../LineChart";
import ResLineChart from "../../ResLineChart";
function MiddleDashboard() {
  return (
    <div className="middle__dashboard">
      <div className="middle__left" style={{ backgroundColor: "#fff" }}>
        <h2 style={{ marginTop: "-120px", marginLeft: "10px" }}>
          Investment Performance
        </h2>
        <LineChart />
      </div>
      <div className="middle__left__res" style={{ backgroundColor: "#fff" }}>
        <h2>Investment Performance</h2>
        {/* <ResLineChart /> */}
        <LineChart />
      </div>

      {/* recommended Deals */}
      <RecommendedDeals />
    </div>
  );
}

export default MiddleDashboard;
