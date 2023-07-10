import React from "react";
import "./ShareholdersTable.css";
import first from "../../assets/table/first.png";
import second from "../../assets/table/second.png";
import third from "../../assets/table/third.png";
import fourth from "../../assets/table/fourth.png";
function RoundTable() {
  return (
    <div className="share__holder__table">
      <div className="table__header">
        <p
          style={{
            borderRadius: "15px 0 0 0",
            backgroundColor: "#E9EBF8",
            fontWeight: "500",
            height: "145px",
          }}
        >
          Rounds
        </p>
        <p
          style={{
            backgroundColor: "#E9EBF8",
            fontWeight: "500",
            height: "145px",
          }}
        >
          Amount
        </p>
        <p
          style={{
            borderRadius: "0 0 0 0",
            backgroundColor: "#E9EBF8",
            fontWeight: "500",
            height: "145px",
          }}
        >
          Valuation
        </p>
        <p
          style={{
            borderRadius: "0 0 0 0",
            backgroundColor: "#E9EBF8",
            fontWeight: "500",
            height: "145px",
          }}
        >
          Date
        </p>
        <p
          style={{
            borderRadius: "0 15px 0 0",
            backgroundColor: "#E9EBF8",
            fontWeight: "500",
            height: "145px",
          }}
        >
          Investors
        </p>
      </div>
      {/* other rows */}
      <div className="table__header">
        <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            marginLeft: "60px",
          }}
        >
          Round A
        </p>
        <p>$100,000</p>
        <p>$5,000,000 </p>
        <p>22 May, 2018</p>
        <p style={{ height: "145px", textAlign: "center" }}>
          {" "}
          James Smith William Brown Olivia Davis
        </p>
      </div>
      <div className="table__header">
        <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            marginLeft: "60px",
          }}
        >
          Round B
        </p>
        <p>$250,000</p>
        <p>$10,000,000 </p>
        <p>10 Dec, 2020</p>
        <p style={{ height: "145px", textAlign: "center" }}>
          {" "}
          Sophia Hall James Smith Ava Taylor
        </p>
      </div>
      <div className="table__header">
        <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            marginLeft: "60px",
          }}
        >
          Round C
        </p>
        <p>$500,000</p>
        <p>$100,000,000 </p>
        <p>14 Jan, 2021</p>
        <p style={{ height: "145px", textAlign: "center" }}>
          {" "}
          Sophia Hall Samuel Clark Olivia Davis
        </p>
      </div>
      <div className="table__header">
        <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            marginLeft: "60px",
          }}
        >
          Round C-1
        </p>
        <p>$500,000</p>
        <p>$500,000,000 C</p>
        <p>29 Apr, 2023</p>
        <p style={{ height: "145px", textAlign: "center" }}>
          {" "}
          Ava Taylor Benjamin Wilson Olivia Davis
        </p>
      </div>
    </div>
  );
}

export default RoundTable;
