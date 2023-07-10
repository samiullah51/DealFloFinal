import React from "react";
import "./InvestedFundsDetails.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import BackButton from "../../components/BackButton/BackButton";
import FundDetailsHeader from "../../components/FundDetailsHeader/FundDetailsHeader";
import Sector from "../../components/Sector/Sector";
import pdficon from "../../assets/pdficon.svg";
import wordicon from "../../assets/wordicon.svg";
import GrowthRateChart from "../../components/GrowthRateChart/GrowthRateChart";
function InvestedFundsDetails() {
  return (
    <div className="invested__funds__details__page">
      <Sidebar />

      {/* contents */}
      <div className="contents">
        <Navbar />

        {/* funds details header */}
        <FundDetailsHeader type="funds" />

        <div
          style={{
            width: "93%",
            margin: "auto",
            backgroundColor: "#fff",
            marginTop: "-40px",
          }}
        >
          <p className="fund__desc">
            A high-growth equity fund focused on technology startups. Our
            high-growth equity fund is dedicated to supporting technology
            startups on their path to success. With a focus on cutting-edge
            industries and transformative ideas, we empower entrepreneurs and
            fuel groundbreaking advancements. Join us in shaping the future and
            unlock the potential for exceptional returns. Invest in ABC Growth
            Fund today and be part of the next generation of innovation.
          </p>

          {/* users */}
          <div className="users">
            <p>john.smith@example.com</p>
            <p>john.smith@example.com</p>
            <p>john.smith@example.com</p>
            <p>john.smith@example.com</p>
          </div>

          {/* sectors */}
          <div className="sectors">
            <Sector status="Asset Classes" title="Fixed Income" />
            <Sector status="Sector" title="Finance" />
            <Sector status="Geographical focus" title="Global" />
            <Sector
              status="Investment criteria"
              title="Market Capitalization"
            />
            <Sector status="Share classes" title="Class A, Class B" />
            <Sector status="Distribution Policies" title="Reinvest dividends" />
          </div>

          {/*  */}
          <div
            className="pdf__word"
            style={{ display: "flex", margin: "10px 0", padding: "20px" }}
          >
            <div className="pdf__single__itme" style={{ marginRight: "60px" }}>
              <img src={pdficon} alt="" />
              <div>
                <p>Capitalization table</p>
                <span>240kb</span>
              </div>
            </div>
            <div className="pdf__single__itme">
              <img src={wordicon} alt="" />
              <div>
                <p>Company Pitch Deck</p>
                <span>926kb</span>
              </div>
            </div>
          </div>

          {/* Growth Rate chart */}
          <GrowthRateChart />
        </div>
      </div>
    </div>
  );
}

export default InvestedFundsDetails;
