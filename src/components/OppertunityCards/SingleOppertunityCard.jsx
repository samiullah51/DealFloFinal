import React from "react";
import "./OppertunityCards.css";
function SingleOppertunityCard({ image }) {
  return (
    <div className="single__oppertunity__card">
      <div className="opper__header">
        <img src={image} alt="" />
        <div>
          <p>TM Technology Inc</p>
          <span>Series C funding</span>
        </div>
      </div>
      {/* line */}
      <div className="line"></div>
      {/* opper body */}
      <div className="opper__body">
        <div>
          <span>Industry</span>
          <p>Technology</p>
        </div>
        <div>
          <span>Funding Target</span>
          <p>$5,000,000</p>
        </div>
      </div>
      {/* footer */}
      <div className="opper__body lower">
        <div>
          <span>Minimum investment</span>
          <p style={{ fontSize: "18px" }}>$10,000</p>
        </div>
        <button>Invest</button>
      </div>
    </div>
  );
}

export default SingleOppertunityCard;
