import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const Compliances = ({ open = 10, review = 3, resolved = 12 }) => {
  const total = open + review + resolved;
  
  const data = [
    { name: 'Open', value: open, color: '#DC2626' },
    { name: 'Review', value: review, color: '#F59E0B' },
    { name: 'Resolved', value: resolved, color: '#10B981' },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center gap-3 mb-4">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L4 5V11C4 16 7.5 20.7 12 22C16.5 20.7 20 16 20 11V5L12 2Z" stroke="#EF4444" strokeWidth="1.5" fill="none" />
        </svg>
        <h3 className="text-indigo-700 font-semibold text-lg">Compliances</h3>
      </div>
      {/* Top divider to match card in screenshot */}
      <div className="border-t border-gray-200 -mx-6 mb-4" />

      <div className="relative" style={{ height: 180 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="85%"
              startAngle={180}
              endAngle={0}
              innerRadius={60}
              outerRadius={90}
              paddingAngle={0}
              dataKey="value"
              stroke="#FFFFFF"
              strokeWidth={2}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        
        {/* Center text overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ paddingTop: '80px' }}>
          <div className="text-gray-600 text-sm font-medium">Incidents</div>
          <div className="text-3xl font-bold text-gray-900">{total}</div>
        </div>
      </div>

      {/* Bottom stats with vertical dividers and centered dots */}
      <div className="mt-4 pt-4 border-t border-gray-200 -mx-6 px-6 grid grid-cols-3 text-center divide-x divide-gray-200">
        <div className="flex flex-col items-center py-2">
          <span className="w-3 h-3 bg-red-600 rounded-full mb-2" />
          <span className="text-sm text-gray-600">Open</span>
          <div className="text-2xl font-bold text-gray-900 mt-1">{open}</div>
        </div>
        <div className="flex flex-col items-center py-2">
          <span className="w-3 h-3 bg-orange-500 rounded-full mb-2" />
          <span className="text-sm text-gray-600">Review</span>
          <div className="text-2xl font-bold text-gray-900 mt-1">{review}</div>
        </div>
        <div className="flex flex-col items-center py-2">
          <span className="w-3 h-3 bg-green-500 rounded-full mb-2" />
          <span className="text-sm text-gray-600">Resolved</span>
          <div className="text-2xl font-bold text-gray-900 mt-1">{resolved}</div>
        </div>
      </div>
    </div>
  );
};

export default Compliances;
