import React from "react";
import "./InvestmentOpperDetails.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import BackButton from "../../components/BackButton/BackButton";
import image from "../../assets/opper1.svg";
import pdficon from "../../assets/pdficon.svg";
import wordicon from "../../assets/wordicon.svg";
import Founders from "../../components/Founders/Founders";
import RoundTable from "../../components/RoundTable/RoundTable";
import Latests from "../../components/Latests/Latests";
import LineChart2 from "../../LineChart2";
import DoubleLineChart from "../../DoubleLineChart";
import ResLineChart2 from "../../ResLineChart2";
import ResDoubleLineChart from "../../ResDoubleLineChart";
function InvestmentOpperDetails() {
  return (
    <div className="invest__opper__details">
      <Sidebar activeStatus="yes" />
      <div className="contents">
        <Navbar />

        <div className="contents__body">
          <BackButton />
          {/* opper__details__header */}
          <div className="opper__details__header">
            <img src={image} alt="" />
            <div>
              <p className="title">TM Technology Inc</p>
              <p className="status">Series C funding</p>
            </div>
            {/* button */}
            <button>Invest</button>
          </div>
          {/* contents */}
          <p
            className="res__desc"
            style={{ color: "#808080", fontSize: "16px", textAlign: "justify" }}
          >
            TM Technology Inc. is a fast-growing technology startup specializing
            in AI-powered solutions for e-commerce. They have a disruptive
            product and a strong market presence.
          </p>
          {/* div */}
          <div className="status__box">
            <div>
              <p className="status">Industry</p>
              <p className="title">Technology</p>
            </div>
            <div>
              <p className="status">Funding Target</p>
              <p className="title">$5,000,000</p>
            </div>
            <div>
              <p className="status">Minimum investment</p>
              <p className="title">Minimum investment</p>
            </div>
          </div>
          {/*  */}
          <div
            className="pdf__word"
            style={{ display: "flex", margin: "10px 0" }}
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

          {/* founders */}
          <h2 style={{ fontWeight: "600", fontSize: "20px" }}>
            Founders Profile
          </h2>

          <Founders />
          {/* funding status chart */}
          <div className="chart__fund hide">
            <p className="chart__title">Funding statistics</p>
            <div className="chart__stats">
              <LineChart2 />
            </div>
          </div>
          <div className="res__chart__fund">
            <p className="chart__title">Funding statistics</p>
            <div className="chart__stats">
              <ResLineChart2 />
            </div>
          </div>
          {/* Round Table */}
          <p className="table__title">TM Technology Inc Valuation Rounds</p>
          <RoundTable />
          {/* Deal cost Chart */}

          {/* funding status chart */}
          <div className="chart__fund hide">
            <p className="chart__title" style={{ marginTop: "40px" }}>
              Deal Cost
            </p>
            <div className="chart__stats">
              <DoubleLineChart />
            </div>
          </div>
          <div className="res__chart__fund">
            <p className="chart__title" style={{ marginTop: "40px" }}>
              Deal Cost
            </p>
            <div className="chart__stats">
              <ResDoubleLineChart />
            </div>
          </div>

          {/* latest */}
          <p className="table__title">Latest Updates and News</p>
          <Latests />
        </div>
      </div>
    </div>
  );
}

export default InvestmentOpperDetails;
