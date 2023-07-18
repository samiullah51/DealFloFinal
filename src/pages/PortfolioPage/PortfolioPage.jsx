import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import "./PortfolioPage.css";
import ProfileCards from "../../components/ProfileCards/ProfileCards";
import ProfileGrowthCards from "../../components/ProfileGrowthCards/ProfileGrowthCards";
function PortfolioPage() {
  return (
    <div className="portfolio__page">
      <Sidebar status="ActivePortfolio" activePortStatus="yes" />

      <div className="contents">
        <Navbar />
        {/* profile Cards */}
        <ProfileCards />
        {/* profile growth cards */}
        <ProfileGrowthCards />
      </div>
    </div>
  );
}

export default PortfolioPage;
