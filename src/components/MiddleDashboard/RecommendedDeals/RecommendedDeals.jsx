import React from "react";
import "./RecommendedDeals.css";
import SingleDeal from "./SingleDeal";
function RecommendedDeals() {
  return (
    <div className="recommended__deals">
      <h2>Recommended deals</h2>
      {/*  single deal */}
      <SingleDeal />
      <SingleDeal />
      <SingleDeal />
    </div>
  );
}

export default RecommendedDeals;
