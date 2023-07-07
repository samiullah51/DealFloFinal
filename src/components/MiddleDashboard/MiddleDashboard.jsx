import React from "react";
import "./MiddleDashboard.css";
import RecommendedDeals from "./RecommendedDeals/RecommendedDeals";
function MiddleDashboard() {
  return (
    <div className="middle__dashboard">
      <div className="middle__left" style={{ backgroundColor: "#fff" }}>
        <h2>Chart is here...</h2>
      </div>
      <div className="middle__right" style={{ backgroundColor: "#fff" }}>
        {/* recommended Deals */}
        <RecommendedDeals />
      </div>
    </div>
  );
}

export default MiddleDashboard;
