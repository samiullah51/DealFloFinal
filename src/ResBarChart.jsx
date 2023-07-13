import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const ResBarChartt = () => {
  const data = [
    { name: "Q1 2022", sales: 100000 },
    { name: "Q1 2023", sales: 50353 },
    { name: "Q2 2022", sales: 150000 },
    { name: "Q4 2022", sales: 220000 },
    { name: "Q2 2023", sales: 50023 },
    { name: "Q3 2022", sales: 180000 },
    { name: "Q3 2023", sales: 50230 },
    { name: "Q4 2023", sales: 50043 },
  ];

  return (
    <BarChart
      width={320}
      height={300}
      data={data}
      style={{ marginTop: "100px" }}
    >
      {/* <CartesianGrid strokeDasharray="" /> */}
      <XAxis dataKey="name" fontSize={10} />
      <YAxis fontSize={10} />
      <Tooltip />
      {/* <Legend /> */}
      <Bar
        dataKey="sales"
        fill="rgba(102, 153, 204, 1)"
        barSize={15}
        barGap={10}
      />
    </BarChart>
  );
};

export default ResBarChartt;
