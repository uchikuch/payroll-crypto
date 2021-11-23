import React from "react";
import { BarChart, Bar, Tooltip } from "recharts";

const data = [
  { name: "Geeksforgeeks", students: 400 },
  { name: "Technical scripter", students: 700 },
  { name: "Geek-i-knack", students: 200 },
  { name: "Geek-o-mania", students: 1000 },
];

export default function BarChartArea() {
  return (
    <div>
      <BarChart width={100} height={90} data={data}>
        <Bar dataKey="students" fill="#70C8E1" />
        <Tooltip content={<CustomTooltip />} />
      </BarChart>
    </div>
  );
}

function CustomTooltip({ active, payload, label }) {
  if (active) {
    return (
      <div className="bg-black text-white shadow-md rounded-md p-4">
        <p>${payload[0].value.toFixed(2)}</p>
      </div>
    );
  }
  return null;
}
