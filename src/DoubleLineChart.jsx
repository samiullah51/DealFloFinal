import React, { useEffect, useRef } from "react";
import Chart from "chart.js";

const DoubleLineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Sample data for the chart
    const data = {
      labels: [
        "JAN 2022",
        "APR 2022",
        "JUL 2022",
        "OCT 2022",
        "JAN 2023",
        "APR 2023",
      ],
      datasets: [
        {
          label: "Sales",
          data: [20, 45, 30, 80, 40, 13],
          fill: false,
          borderColor: "rgba(102, 153, 204, 1)",
          tension: 0.5,
          pointRadius: 0,
          pointHoverRadius: 0,
        },
        {
          label: "Expenses",
          data: [30, 25, 38, 55, 45, 70],
          pointRadius: 0,
          pointHoverRadius: 0,
          fill: false,
          borderColor: "rgba(0, 0, 0, 1)",
          tension: 0.5,
        },
      ],
    };

    // Configuration options
    const options = {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      legend: { position: "none" },
    };

    new Chart(ctx, {
      type: "line",
      data: data,
      options: options,
    });
  }, []);

  return (
<<<<<<< HEAD
    <div style={{ width: "90%", margin: "10px auto", height: "90%" }}>
      <canvas ref={chartRef}></canvas>
=======
    <div>
      <canvas ref={chartRef} width="900" height="240"></canvas>
>>>>>>> 8cae38f7efc1378a82e84feae3e0199a777dfe0a
    </div>
  );
};

export default DoubleLineChart;
