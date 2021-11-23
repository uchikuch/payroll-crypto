import React from "react";
import { ResponsiveContainer, LineChart, Line, Tooltip } from "recharts";
import { subDays } from "date-fns";

const data = [];
for (let num = 15; num >= 0; num--) {
  data.push({
    date: subDays(new Date(), num).toISOString().substr(0, 10),
    value: 1 + Math.random(),
    value2: 1 - Math.random(),
  });
}

export default function LineChartComp({ height, width }) {
  return (
    <ResponsiveContainer width={width} height={height}>
      <LineChart data={data}>
        <Line
          type="monotone"
          dataKey="value"
          stroke="#6C5DD3"
          dot={false}
          strokeWidth={3}
        />
        <Line
          type="monotone"
          dataKey="value2"
          stroke="#70C8E1"
          dot={false}
          strokeWidth={3}
        />
        <Tooltip content={<CustomTooltip />} />
      </LineChart>
    </ResponsiveContainer>
  );
}

function CustomTooltip({ active, payload, label }) {
  if (active) {
    return (
      <div className="bg-black text-white shadow-md rounded-md p-4">
        <p className="text-crypto-pink">${payload[0].value.toFixed(2)}</p>
        <p className="text-crypto-lightblue">${payload[1].value.toFixed(2)}</p>
      </div>
    );
  }
  return null;
}
