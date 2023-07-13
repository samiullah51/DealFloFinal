import React from "react";
import "./ManageGrowthCards.css";
import SingleManageGrowthCard from "./SingleManageGrowthCard";
function ManageGrowthCards() {
  return (
    <div className="manage__growth__cards">
      <SingleManageGrowthCard />
      <SingleManageGrowthCard />
      <SingleManageGrowthCard />
      <SingleManageGrowthCard />
    </div>
  );
}

export default ManageGrowthCards;
