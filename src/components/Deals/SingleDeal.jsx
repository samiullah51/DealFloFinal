import React from "react";
import "./Deals.css";
import pdficon from "../../assets/pdficon.svg";
import wordicon from "../../assets/wordicon.svg";
import dealicon2 from "../../assets/dealicon2.svg";
import Dealheader from "./Dealheader";
import InvestedBox from "./InvestedBox";
import { Link } from "react-router-dom";
function SingleDeal() {
  return (
    <div className="single__investment__deal">
      {/* single deal header */}
      <Dealheader />
      {/* footer */}
      <div className="single__investment__deal__footer">
        <p>john.smith@example.com</p>
        <p>john.smith@example.com</p>
      </div>
      <div className="line"></div>
      {/* bottom deal */}
      <div className="deal__bottom">
        <div className="pdf__word">
          <div className="pdf__single__itme">
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
        {/* bottom footer */}
        <div className="bottom__footer">
          <InvestedBox amount="$10,000" title="Minimum Investment" />
          <Link to="/investfunddetails">Join Fund</Link>
        </div>
      </div>
    </div>
  );
}

export default SingleDeal;
