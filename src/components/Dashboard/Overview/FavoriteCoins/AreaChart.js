import React from "react";
import { ResponsiveContainer, AreaChart, Area, Tooltip } from "recharts";
import { subDays } from "date-fns";

const data = [];
for (let num = 15; num >= 0; num--) {
  data.push({
    date: subDays(new Date(), num).toISOString().substr(0, 10),
    value: 1 + Math.random(),
  });
}

export default function ChartArea() {
  return (
    <ResponsiveContainer width="100%" height={90}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6C5DD3" stopOpacity={0.4} />
            <stop offset="75%" stopColor="#6C5DD3" stopOpacity={0.05} />
          </linearGradient>
        </defs>

        <Area
          dataKey="value"
          stroke="#6C5DD3"
          fill="url(#color)"
          strokeWidth={3}
        />
        <Tooltip content={<CustomTooltip />} />
      </AreaChart>
    </ResponsiveContainer>
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
