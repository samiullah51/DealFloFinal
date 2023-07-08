import React from "react";
import "./LowerDashboard.css";
import RecentTransactions from "./RecentTransactions/RecentTransactions";
function LowerDashboard() {
  return (
    <div className="lower__dashboard">
      <h2>Recent Transactions</h2>
      {/*Recent Transactions */}
      <RecentTransactions />
      {/* <div style={{ marginTop: "100px", height: "40px" }}></div> */}
    </div>
  );
}

export default LowerDashboard;
