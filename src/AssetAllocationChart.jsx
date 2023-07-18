import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";
// import Grid from "@material-ui/core/Grid";
const data = [
  ["Geographic Distribution", "Percentage"],
  ["Asia", 30],
  ["Lat Am", 30],
  ["Other", 40], // CSS-style declaration
];
const options = {
  // title: "Geographical Distribution",
  pieHole: 0.55,
  is3D: false,
  colors: ["#3B82F6", "#22C55E", "#F97316"],
  legend: { position: "none" },
};
function AssetAllocationChart() {
  return (
    <div className="App" style={{ marginTop: "-100px" }}>
      <Chart
        chartType="PieChart"
        width="250px"
        height="300px"
        data={data}
        options={options}
      />
    </div>
  );
}

export default AssetAllocationChart;
