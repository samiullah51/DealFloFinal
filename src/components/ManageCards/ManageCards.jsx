import React from "react";
import "./ManageCards.css";
import SingleCard from "./SingleCard";
function ManageCards() {
  return (
    <div className="manage__cards">
      <SingleCard title="Total Deals" value={300} />
      <SingleCard title="Total Investors" value={530} />
      <SingleCard title="Total Investment" value={`$${205},${875}`} />
    </div>
  );
}

export default ManageCards;
