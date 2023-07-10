import React from "react";
import "./InvestmentManagePage.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import ManageCards from "../../components/ManageCards/ManageCards";
import ManageGrowthCards from "../../components/ManageGrowthCards/ManageGrowthCards";
function InvestmentManagePage() {
  return (
    <div className="investment__manage">
      {/* sidebar */}
      <Sidebar />
      <div className="contents">
        <Navbar />
        {/* contents */}
        <ManageCards />
        {/* manage growth cards */}
        <ManageGrowthCards />
      </div>
    </div>
  );
}

export default InvestmentManagePage;
