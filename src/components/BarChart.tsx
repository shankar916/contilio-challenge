import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

interface BarChartProps {
  attributes: { name: string; value: number }[];
}

const BarChartComponent: React.FC<BarChartProps> = ({ attributes }) => {
  return (
    <BarChart width={400} height={300} data={attributes}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
  );
};

export default BarChartComponent;
