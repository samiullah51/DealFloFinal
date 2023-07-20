import React, { useEffect, useRef } from "react";
import Chart from "chart.js";

const LineChart3 = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Sample data for the chart
    const data = {
      labels: [
        "JAN 2022",
        "",
        "",
        "APR 2022",
        "",
        "",
        "JUL 2022",
        "",
        "",
        "OCT 2022",
        "",
        "",
        "JAN 2023",
        "",
        "",
        "APR 2023",
      ],
      datasets: [
        {
          label: "Sales",
          data: [
            0, 10000, 20000, 5000, 16000, 12000, 23000, 20000, 5000, 16000,
            12000, 23000, 20000, 20000, 5000, 16000,
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
          enabled: true,
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
    <div style={{ width: "fill", margin: "10px auto", height: "90%" }}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default LineChart3;
