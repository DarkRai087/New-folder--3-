import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'JAN', value: 10000 },
  { name: 'FEB', value: 12232 },
  { name: 'MAR', value: 11000 },
  { name: 'APR', value: 9000 },
  { name: 'MAY', value: 13000 },
  { name: 'JUN', value: 12000 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-800 text-white p-2 rounded">
        <p>{`$${payload[0].value.toLocaleString()}`}</p>
      </div>
    );
  }
  return null;
};

const Budget = () => {
  return (
  <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-gray-500 text-sm">Budget</h2>
          <p className="text-xl font-bold">
            $15,323.00 <span className="text-gray-500">Used</span> / $25,000.00
            <span className="ml-2 text-sm font-medium text-green-500 bg-green-100 px-2 py-1 rounded-full">+5%</span>
          </p>
        </div>
      </div>
      <div style={{ width: '100%', height: 120 }}>
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 0, right: 20, left: -20, bottom: 5 }}>
            {/* show vertical grid lines at each month tick, keep horizontals off */}
            <CartesianGrid horizontal={false} vertical={true} strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis hide={true} domain={['dataMin - 1000', 'dataMax + 1000']} />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'transparent' }} />
            <Line type="monotone" dataKey="value" stroke="#25266B" strokeWidth={3} dot={false} activeDot={{ r: 6, fill: '#4f46e5' }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Budget;
