import React from "react";
import "./ShareholdersTable.css";
import first from "../../assets/table/first.png";
import second from "../../assets/table/second.png";
import third from "../../assets/table/third.png";
import fourth from "../../assets/table/fourth.png";
function InvestmentRountTable({ title }) {
  return (
    <div className="share__holder__table">
      {title && <p className="table__title">{title}</p>}
      <div className="table__header">
        <p
          style={{
            borderRadius: "15px 0 0 0",
            backgroundColor: "#E9EBF8",
            fontWeight: "500",
          }}
        >
          Company
        </p>
        <p
          style={{
            backgroundColor: "#E9EBF8",
            fontWeight: "500",
          }}
        >
          Funding rounds
        </p>
        <p
          style={{
            borderRadius: "0 15 0 0",
            backgroundColor: "#E9EBF8",
            fontWeight: "500",
          }}
        >
          Investment Amount
        </p>
        <p
          style={{
            borderRadius: "0 15 0 0",
            backgroundColor: "#E9EBF8",
            fontWeight: "500",
            borderRadius: "0px 15px 0 0",
          }}
        >
          Date
        </p>
      </div>
      {/* other rows */}
      <div className="table__header">
        <p>ABC Tech Inc</p>
        <p>Series A</p>
        <p>$100,000 </p>
        <p>22 May, 2018 </p>
      </div>
      <div className="table__header">
        <p>ABC Tech Inc</p>
        <p>Series B</p>
        <p>$250,000 </p>
        <p>10 Dec, 2020 </p>
      </div>
      <div className="table__header">
        <p>ABC Tech Inc</p>
        <p>Series B-1</p>
        <p>$500,000 </p>
        <p>14 Jan, 2021 </p>
      </div>
      <div className="table__header">
        <p>ABC Tech Inc</p>
        <p>Series C</p>
        <p>$500,000 </p>
        <p>29 Apr, 2023 </p>
      </div>
    </div>
  );
}

export default InvestmentRountTable;
