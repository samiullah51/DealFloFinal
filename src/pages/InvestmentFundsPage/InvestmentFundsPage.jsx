import React from "react";
import "./InvestmentFundsPage.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import InvestmentDeals from "../../components/InvestmentDeals/InvestmentDeals";
import Deals from "../../components/Deals/Deals";

function InvestmentFundsPage() {
  return (
    <div className="investment__funds__page">
      {/* sidebar */}
      <Sidebar status="walletActive" />
      {/* contents goes here */}
      <div className="contents">
        {/* Navbar */}
        <Navbar />
        {/* investment deals */}
        <InvestmentDeals />
        {/* all deals */}
        <Deals />
      </div>
    </div>
  );
}

export default InvestmentFundsPage;
