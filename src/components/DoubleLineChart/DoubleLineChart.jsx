import React, { FunctionComponent } from "react";
import {
  CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis
} from "recharts";

 
const data = [
  {
    uv: 4000,
    pv: 2400,
    amt: 400
  },
  {
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

const CustomizedLabel: FunctionComponent<any> = (props: any) => {
  const { x, y, stroke, value } = props;

  return (
    <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
      {value}
    </text>
  );
};

const CustomizedAxisTick: FunctionComponent<any> = (props: any) => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="end"
        fill="#666"
        transform="rotate(-35)"
      >
        {payload.value}
      </text>
    </g>
  );
};

export default function DoubleLineChart() {
  return (
    <LineChart
      width={280}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        bottom: 10,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="pv" stroke="#8884d8"></Line>
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  );
} 
