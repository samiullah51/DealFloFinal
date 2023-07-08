import React from "react";
import "./FundStiper.css";
function FundStiper({ stipe }) {
  return stipe === "first" ? (
    <div className="fund__stiper">
      <div className="circle__box">
        <div
          className="circle"
          style={{ backgroundColor: "#6699CC", color: "#fff" }}
        >
          1<span>Fund Details</span>
        </div>
      </div>
      <div className="line"></div>
      <div className="circle__box">
        <div
          className="circle"
          style={{ backgroundColor: "#D9D9D9", color: "#000" }}
        >
          2<span>Investment Strategy</span>
        </div>
      </div>
      <div className="line"></div>
      <div className="circle__box">
        <div
          className="circle"
          style={{ backgroundColor: "#D9D9D9", color: "#000" }}
        >
          3<span>Fund Structure</span>
        </div>
      </div>
    </div>
  ) : stipe === "second" ? (
    <div className="fund__stiper">
      <div className="circle__box">
        <div
          className="circle"
          style={{ backgroundColor: "#6699CC", color: "#fff" }}
        >
          1<span>Fund Details</span>
        </div>
      </div>
      <div className="line" style={{ backgroundColor: "#6699CC" }}></div>
      <div className="circle__box">
        <div
          className="circle"
          style={{ backgroundColor: "#6699CC", color: "#fff" }}
        >
          2<span>Investment Strategy</span>
        </div>
      </div>
      <div className="line"></div>
      <div className="circle__box">
        <div
          className="circle"
          style={{ backgroundColor: "#D9D9D9", color: "#000" }}
        >
          3<span>Fund Structure</span>
        </div>
      </div>
    </div>
  ) : (
    <div className="fund__stiper">
      <div className="circle__box">
        <div
          className="circle"
          style={{ backgroundColor: "#6699CC", color: "#fff" }}
        >
          1<span>Fund Details</span>
        </div>
      </div>
      <div className="line" style={{ backgroundColor: "#6699CC" }}></div>
      <div className="circle__box">
        <div
          className="circle"
          style={{ backgroundColor: "#6699CC", color: "#fff" }}
        >
          2<span>Investment Strategy</span>
        </div>
      </div>
      <div className="line" style={{ backgroundColor: "#6699CC" }}></div>
      <div className="circle__box">
        <div
          className="circle"
          style={{ backgroundColor: "#6699CC", color: "#fff" }}
        >
          3<span>Fund Structure</span>
        </div>
      </div>
    </div>
  );
}

export default FundStiper;
