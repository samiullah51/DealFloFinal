import React from "react";
import "./RecentTransactions.css";
import SingleTransaction from "./SingleTransaction";
function RecentTransactions() {
  return (
    <div className="recent__transactions">
      {/* single transaction */}
      <SingleTransaction />
      <SingleTransaction />
      <SingleTransaction />
      <SingleTransaction />
    </div>
  );
}

export default RecentTransactions;
