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
<<<<<<< HEAD
        width="250px"
=======
        width="90%"
>>>>>>> 8cae38f7efc1378a82e84feae3e0199a777dfe0a
        height="300px"
        data={data}
        options={options}
      />
    </div>
  );
}

export default AssetAllocationChart;
