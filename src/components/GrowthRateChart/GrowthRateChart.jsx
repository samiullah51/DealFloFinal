import React from "react";
import "./GrowthRateChart.css";
import BarChart from "../../BarChart";
import ResBarChartt from "../../ResBarChart";
function GrowthRateChart() {
  return (
    <>
      <div className="growth__rate__chart">
        <h2 className="growth__title">Growth Rate</h2>
        <BarChart />
      </div>
      <div className="growth__rate__chart res">
        <h2 className="growth__title">Growth Rate</h2>
        <ResBarChartt />
      </div>
    </>
  );
}

export default GrowthRateChart;
