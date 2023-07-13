import React from "react";
import "./RecentTransactions.css";
import mslogo from "../../../assets/mslogo.svg";
function SingleTransaction() {
  return (
    <div className="single__transaction">
      {/* transaction header */}
      <div className="transaction__header">
        {/* header left */}
        <div className="transaction__header__left">
          <img src={mslogo} alt="" />
          <div className="transaction__info">
            <p className="transaction__info__title">ABC Tech Inc.</p>
            <p className="transaction__info__date">May 1, 2023</p>
          </div>
        </div>
        {/* header right */}
        <p className="invetment__type">
          Investment Type: <span>Startup</span>{" "}
        </p>
      </div>
      {/* transaction footer */}
      <div className="transaction__footer">
        <div className="transaction__footer__left">
          <p className="amount__invested">Amount Invested</p>
          <p className="amount__price">$250,000</p>
        </div>
        <button>View details</button>
      </div>
    </div>
  );
}

export default SingleTransaction;
