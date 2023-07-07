import React from "react";
import "./MiddleDashboard.css";
import RecommendedDeals from "./RecommendedDeals/RecommendedDeals";
function MiddleDashboard() {
  return (
    <div className="middle__dashboard">
      <div className="middle__left">
        <h2>Chart is here...</h2>
      </div>
      <div className="middle__right">
        {/* recommended Deals */}
        <RecommendedDeals />
      </div>
    </div>
  );
}

export default MiddleDashboard;
