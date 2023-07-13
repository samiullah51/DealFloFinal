import React from "react";
import "./Stiper.css";
function Stiper({ type }) {
  return type === "first" ? (
    <div className="stiper">
      <div className="main__circle" style={{ marginRight: "-40px" }}>
        <div
          className="circle"
          style={{ backgroundColor: "#6699CC", zIndex: "1" }}
        >
          1
        </div>
        <p>User Details</p>
      </div>
      <div className="progress">
        <div className="progress__percent" style={{ width: "50%" }}></div>
      </div>
      <div className="main__circle" style={{ marginLeft: "-40px" }}>
        <div
          className="circle"
          style={{ backgroundColor: "#D9D9D9", color: "#000" }}
        >
          2
        </div>
        <p>Business Info</p>
      </div>
    </div>
  ) : (
    <div className="stiper">
      <div className="main__circle" style={{ marginRight: "-40px" }}>
        <div
          className="circle"
          style={{ backgroundColor: "#6699CC", zIndex: "1" }}
        >
          1
        </div>
        <p>User Details</p>
      </div>
      <div className="progress">
        <div className="progress__percent" style={{ width: "100%" }}></div>
      </div>
      <div className="main__circle" style={{ marginLeft: "-40px" }}>
        <div
          className="circle"
          style={{ backgroundColor: "#6699CC", zIndex: "1" }}
        >
          2
        </div>
        <p>Business Info</p>
      </div>
    </div>
  );
}

export default Stiper;
