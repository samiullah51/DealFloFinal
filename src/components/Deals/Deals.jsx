import React from "react";
import "./Deals.css";
import SingleDeal from "./SingleDeal";
function Deals() {
  return (
    <div className="deals">
      {/* single deal */}
      <SingleDeal />
      <SingleDeal />
      <SingleDeal />
      <SingleDeal />
    </div>
  );
}

export default Deals;
