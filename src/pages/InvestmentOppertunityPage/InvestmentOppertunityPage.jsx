import React from "react";
import "./InvestmentOppertunityPage.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import OppertunityHeader from "../../components/OppertunityHeader/OppertunityHeader";
import OppertunityCards from "../../components/OppertunityCards/OppertunityCards";
function InvestmentOppertunityPage() {
  return (
    <div className="investment__oppertunity__page">
      <Sidebar />
      <div className="contents">
        <Navbar />
        {/* Oppertunity header */}
        <OppertunityHeader />
        {/* oppertunity cards */}
        <OppertunityCards />
      </div>
    </div>
  );
}

export default InvestmentOppertunityPage;
