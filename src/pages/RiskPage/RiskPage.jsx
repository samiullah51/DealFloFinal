import React from "react";
import "./RiskPage.css";
import risk from "../../assets/risk.svg";
import { Link } from "react-router-dom";
function RiskPage() {
  return (
    <div className="risk__page">
      <img src={risk} alt="" />
      <h2 style={{ width: "100%", textAlign: "center" }}>Risk Assessment</h2>
      <p>
        Before going into the platform, kindly answer some questions so we know
        more about you. Would you like to take time and give answers. There are
        5 questions regarding your knowledge for investment.
      </p>
      <div className="btns" style={{ marginBottom: "40px" }}>
        <Link to="/dashboard" className="skip">
          Skip test
        </Link>
        <Link to="/riskassessment" className="start">
          Start test
        </Link>
      </div>
      <div style={{ marginTop: "30px" }}></div>
    </div>
  );
}

export default RiskPage;
