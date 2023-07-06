import React from "react";
import "./RiskPage.css";
import risk from "../../assets/risk.svg";
function RiskPage() {
  return (
    <div className="risk__page">
      <img src={risk} alt="" />
      <h2>Risk Assessment</h2>
      <p>
        Before going into the platform, kindly answer some questions so we know
        more about you. Would you like to take time and give answers. There are
        5 questions regarding your knowledge for investment.
      </p>
      <div className="btns">
        <button className="skip">Skip test</button>
        <button className="start">Start test</button>
      </div>
    </div>
  );
}

export default RiskPage;
