import React, { useEffect, useRef } from "react";
import Chart from "chart.js";

const LineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Sample data for the chart
    const data = {
      labels: [
        "JAN",
        "",
        "",
        "APR",
        "",
        "",
        "JUL",
        "",
        "",
        "OCT",
        "",
        "",
        "JAN",
      ],
      datasets: [
        {
          label: "Sales",
          data: [
            350, 450, 300, 400, 350, 450, 300, 400, 550, 500, 550, 500, 900,
          ],
          fill: true,
          backgroundColor: "rgba(102, 153, 204, 0.1)",
          borderColor: "#6699CC",
          tension: 0.5,
          pointRadius: 0,
          pointHoverRadius: 0,
        },
      ],
    };

    // Configuration options
    const options = {
      responsive: true,
      scales: {
        x: {
          grid: {
            display: false, // Remove the x-axis gridlines
          },

          beginAtZero: true,
        },
      },
      legend: { position: "none" },

      plugins: {
        tooltip: {
          enabled: false,
        },
        legend: {
          display: false, // Remove the legend
        },
      },
    };

    new Chart(ctx, {
      type: "line",
      data: data,
      options: options,
    });
  }, []);

  return (
<<<<<<< HEAD
    <div style={{ width: "100%", height: "200px" }}>
      <canvas ref={chartRef}></canvas>
=======
    <div>
      <canvas ref={chartRef} width="450" height="280px"></canvas>
>>>>>>> 8cae38f7efc1378a82e84feae3e0199a777dfe0a
    </div>
  );
};

export default LineChart;
