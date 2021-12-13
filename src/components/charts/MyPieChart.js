import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import styled from "styled-components";

const data = [
  { name: "Income", value: 200 },
  { name: "Savings", value: 300 },
  { name: "Spending", value: 500 },
];

const COLORS = ["#06d6a0", "#EA638C", "#ffcb1b"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function MyPieChart(props) {
  return (
    <div style={{ width: 300, height: "auto", minHeight: 300, display: "flex", justifyContent: "center", }}>
      <ResponsiveContainer debounce={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <Legend>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            rowGap: "1rem",
          }}
        >
          <li
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <ColorIndicator
              style={{ backgroundColor: "#06d6a0" }}
            ></ColorIndicator>
            Income
          </li>
          <li
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <ColorIndicator
              style={{ backgroundColor: "#EA638C" }}
            ></ColorIndicator>
            Savings
          </li>
          <li
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <ColorIndicator
              style={{ backgroundColor: "#ffcb1b" }}
            ></ColorIndicator>
            Spending
          </li>
        </ul>
      </Legend>
    </div>
  );
}

const Legend = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #333;
`;

const ColorIndicator = styled.span`
  display: flex;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
`;
