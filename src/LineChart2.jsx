import React, { useEffect, useRef } from "react";
import Chart from "chart.js";

const LineChart2 = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Sample data for the chart
    const data = {
      labels: [
        "Series A",
        "",
        "",
        "",
        "",
        "series B",
        "",
        "",
        "",
        "",
        "series B-1",
        "",
        "",
        "",
        "",
        "series C",
      ],
      datasets: [
        {
          label: "Sales",
          data: [
            350, 450, 300, 400, 350, 450, 300, 400, 550, 500, 450, 300, 400,
            550, 500, 900,
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
    <div style={{ width: "90%", margin: "10px auto", height: "90%" }}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default LineChart2;
