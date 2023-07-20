import React from "react";
import "./MiddleDashboard.css";
import RecommendedDeals from "./RecommendedDeals/RecommendedDeals";
import LineChart from "../../LineChart";
import ResLineChart from "../../ResLineChart";
function MiddleDashboard() {
  return (
    <div className="middle__dashboard">
      <div className="middle__left" style={{ backgroundColor: "#fff" }}>
<<<<<<< HEAD
        <h2 style={{ marginTop: "-120px", marginLeft: "10px" }}>
          Investment Performance
        </h2>
=======
        <h2>Investment Performance</h2>
>>>>>>> 8cae38f7efc1378a82e84feae3e0199a777dfe0a
        <LineChart />
      </div>
      <div className="middle__left__res" style={{ backgroundColor: "#fff" }}>
        <h2>Investment Performance</h2>
<<<<<<< HEAD
        {/* <ResLineChart /> */}
        <LineChart />
      </div>

      {/* recommended Deals */}
      <RecommendedDeals />
=======
        <ResLineChart />
      </div>
      <div className="middle__right" style={{ backgroundColor: "#fff" }}>
        {/* recommended Deals */}
        <RecommendedDeals />
      </div>
>>>>>>> 8cae38f7efc1378a82e84feae3e0199a777dfe0a
    </div>
  );
}

export default MiddleDashboard;
