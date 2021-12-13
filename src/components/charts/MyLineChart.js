import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const data = [
  { name: "Jan", Average: 400, Actual: 2400 },
  { name: "Feb", Average: 200, Actual: 600 },
  { name: "Mar", Average: 200, Actual: 600 },
  { name: "Apr", Average: 200, Actual: 200 },
  { name: "May", Average: 800, Actual: 600 },
  { name: "Jun", Average: 200, Actual: 600 },
  { name: "Jul", Average: 200, Actual: 200 },
  { name: "Aug", Average: 300, Actual: 600 },
  { name: "Sep", Average: 200, Actual: 600 },
  { name: "Oct", Average: 200, Actual: 600 },
  { name: "Nov", Average: 200, Actual: 400 },
  { name: "Dec", Average: 200, Actual: 600 },
];

export default function MyLineChart(props) {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer debounce={300}>
        <LineChart data={data}>
          <Line type="monotone" dataKey="Average" stroke={props.avgStroke} />
          <Line type="monotone" dataKey="Actual" stroke={props.actualStroke} />
          <CartesianGrid stroke="#aaa" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
