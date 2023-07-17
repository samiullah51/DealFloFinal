import React from "react";
import "./InvestManagementDetails.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import FundDetailsHeader from "../../components/FundDetailsHeader/FundDetailsHeader";
import ShareholdersTable from "../../components/ShareholdersTable/ShareholdersTable";
import InvestmentRountTable from "../../components/InvestmentRountTable/InvestmentRountTable";
import SharesChart from "../../SharesChart";
import DoubleLineChart from "../../DoubleLineChart";
import TripleLineChart from "../../TripleLineChart";
import ResTripleLineChart from "../../ResTripleLineChart";
function InvestManagementDetails() {
  return (
    <div className="investment__management__details">
      <Sidebar activeManageStatus="yes" />

      <div className="contents">
        <Navbar />

        <FundDetailsHeader type="manage" />

        {/* desc */}
        <p
          className="fund__desc"
          style={{
            width: "93%",
            margin: "auto",
            marginTop: "-60px",
            backgroundColor: "#fff",
            zIndex: "1",
            textAlign: "justify",
          }}
        >
          A high-growth equity fund focused on technology startups. Our
          high-growth equity fund is dedicated to supporting technology startups
          on their path to success. With a focus on cutting-edge industries and
          transformative ideas, we empower entrepreneurs and fuel groundbreaking
          advancements. Join us in shaping the future and unlock the potential
          for exceptional returns. Invest in ABC Growth Fund today and be part
          of the next generation of innovation.
        </p>

        {/* chart will go here... */}
        <div
          className="chart"
          style={{
            width: "93%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#fff",
            margin: "auto",
          }}
        >
          <SharesChart />
        </div>

        <div
          className="bg__contents"
          style={{
            width: "93%",
            margin: "auto",
            backgroundColor: "#fff",
            marginTop: "-20px",
            zIndex: "1",
          }}
        >
          {/* share holder table */}
          <ShareholdersTable />
          {/* investment Rount Table */}
          <InvestmentRountTable title="Company investment rounds" />
          {/* activities fund chart goes here */}
          {/* chart will go here... */}
          <div className="chart" style={{ marginBottom: "100px" }}>
            <h2>Activities Within the Fund</h2>
            <TripleLineChart />
          </div>
          <div className="res__tri" style={{ marginBottom: "100px" }}>
            <h2>Activities Within the Fund</h2>
            <ResTripleLineChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvestManagementDetails;
