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
];

export default function MyPieChart(props) {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
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
