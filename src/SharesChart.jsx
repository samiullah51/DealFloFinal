import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";
// import Grid from "@material-ui/core/Grid";
const data = [
  ["Geographic Distribution", "Percentage"],
  ["Asia", 50],
  ["Lat Am", 20],
  ["Other", 30], // CSS-style declaration
  ["Other", 50], // CSS-style declaration
];
const options = {
  // title: "Geographical Distribution",
  pieHole: 0.55,
  is3D: false,
  colors: ["#3B82F6", "#22C55E", "#F97316", "#FFBB3F"],
  legend: { position: "none" },
};
function SharesChart() {
  return (
    <div className="App">
      <Chart
        chartType="PieChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
}

export default SharesChart;
