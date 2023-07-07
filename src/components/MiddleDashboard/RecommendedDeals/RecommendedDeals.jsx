import React from "react";
import "./RecommendedDeals.css";
import SingleDeal from "./SingleDeal";
function RecommendedDeals() {
  return (
    <div className="recommended__deals">
      <h2>Recommended Deals</h2>
      {/*  single deal */}
      <SingleDeal />
    </div>
  );
}

export default RecommendedDeals;
