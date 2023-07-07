import React from "react";
import "./FundDetailsHeader.css";
import BackButton from "../BackButton/BackButton";
import Dealheader from "../Deals/Dealheader";
import InvestedBox from "../Deals/InvestedBox";
import fundicon from "../../assets/fundicon.svg";
function FundDetailsHeader() {
  return (
    <div className="fund__details__header">
      <BackButton />
      {/* fund header contents */}
      <div className="fund__header__contents">
        <div className="fund__header__left">
          <img src={fundicon} alt="" />
          <div className="fund__inf">
            <div className="abc__growth">
              <p>ABC Growth Fund</p>
              <span>21 day's left</span>
            </div>
            <div
              className="status"
              style={{ fontSize: "14px", marginLeft: "10px" }}
            >
              Private Equity firm
            </div>
            <div style={{ fontSize: "14px", marginLeft: "10px" }}>
              Target Market: <span className="status">Startups</span>
            </div>
          </div>
        </div>
        <div style={{ marginRight: "-250px" }}>
          <InvestedBox />
        </div>

        {/* button */}
        <button>Join fund</button>
      </div>
    </div>
  );
}

export default FundDetailsHeader;
