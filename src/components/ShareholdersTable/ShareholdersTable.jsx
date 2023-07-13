import React from "react";
import "./ShareholdersTable.css";
import first from "../../assets/table/first.png";
import second from "../../assets/table/second.png";
import third from "../../assets/table/third.png";
import fourth from "../../assets/table/fourth.png";
function ShareholdersTable() {
  return (
    <>
      <div className="share__holder__table">
        <div className="table__header">
          <p
            style={{
              borderRadius: "15px 0 0 0",
              backgroundColor: "#E9EBF8",
              fontWeight: "500",
            }}
          >
            Shareholder
          </p>
          <p
            style={{
              backgroundColor: "#E9EBF8",
              fontWeight: "500",
            }}
          >
            Ownership Percentage
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
            <img src={first} alt="" />
            Mark Johnson
          </p>
          <p>36.1% </p>
          <p>$100,000 </p>
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
            <img src={second} alt="" />
            Jane Doe
          </p>
          <p>56.8% </p>
          <p>$250,000 </p>
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
            <img src={third} alt="" />
            John Smith
          </p>
          <p>21.5% </p>
          <p>$500,000</p>
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
            <img src={fourth} alt="" />
            Henry Gray
          </p>
          <p>8.2% </p>
          <p>$500,000</p>
        </div>
      </div>

      {/* // res */}
      <div className="share__holder__table res">
        <div className="table__header">
          <p
            style={{
              borderRadius: "15px 0 0 0",
              backgroundColor: "#E9EBF8",
              fontWeight: "500",
              width: "200px",
            }}
          >
            Shareholder
          </p>
          <p
            style={{
              backgroundColor: "#E9EBF8",
              fontWeight: "500",
            }}
          >
            Ownership Percentage
          </p>
          <p
            style={{
              borderRadius: "0 15px 0 0",
              backgroundColor: "#E9EBF8",
              fontWeight: "500",
            }}
          >
            Investment Amount
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
            <img src={first} alt="" />
            Mark Johnson
          </p>
          <p>36.1% </p>
          <p>$100,000 </p>
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
            <img src={second} alt="" />
            Jane Doe
          </p>
          <p>56.8% </p>
          <p>$250,000 </p>
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
            <img src={third} alt="" />
            John Smith
          </p>
          <p>21.5% </p>
          <p>$500,000</p>
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
            <img src={fourth} alt="" />
            Henry Gray
          </p>
          <p>8.2% </p>
          <p>$500,000</p>
        </div>
      </div>
    </>
  );
}

export default ShareholdersTable;
