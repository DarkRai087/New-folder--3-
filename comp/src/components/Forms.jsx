import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const Shield = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 2L4 5v6c0 5 3.5 9.7 8 11 4.5-1.3 8-6 8-11V5l-8-3Z" stroke="#EF4444" strokeWidth="1.5" fill="none"/>
  </svg>
);

const Dot = ({ color }) => <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }} />;

const data = [
  { name: 'Inc', value: 80 },
  { name: 'Medi', value: 92 },
  { name: 'Shift', value: 60 },
  { name: 'Leav', value: 83 },
  { name: 'form1', value: 60 },
  { name: 'form1', value: 92 },
  { name: 'form1', value: 80 },
  { name: 'form1', value: 84 },
  { name: 'form1', value: 80 },
  { name: 'form1', value: 88 },
  { name: 'form1', value: 95 },
  { name: 'form1', value: 72 },
];

const barColors = ['#DBEAFE','#BFDBFE','#93C5FD','#60A5FA','#3B82F6','#1E40AF','#111827','#E5E7EB','#C7D2FE','#A78BFA','#6366F1','#4338CA'];

const Forms = () => {
  const items = [
    { name: 'Incident Form', count: 120, color: '#C7D2FE', selected: false },
    { name: 'Medication Form', count: 120, color: '#60A5FA', selected: true },
    { name: 'Shift Report Form', count: 120, color: '#2563EB', selected: false },
    { name: 'Medication Form', count: 120, color: '#60A5FA', selected: false },
    { name: 'Shift Report Form', count: 120, color: '#2563EB', selected: false },
  ];

  return (
    <div className="bg-white rounded-2xl shadow border border-gray-200 p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-red-50 ring-1 ring-red-100">
          <Shield className="w-5 h-5" />
        </div>
        <h2 className="text-xl font-semibold text-indigo-700">Forms</h2>
      </div>

      <div className="text-gray-800 font-medium mb-4">124 Forms</div>

      <div className="w-full h-[300px] mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, bottom: 20, left: 0 }}>
            <CartesianGrid stroke="#F3F4F6" vertical={false} />
            <XAxis dataKey="name" tick={{ fill: '#6B7280' }} />
            <YAxis tick={{ fill: '#6B7280' }} />
            <Tooltip cursor={{ fill: 'rgba(0,0,0,0.03)' }} />
            {data.map((_, i) => (
              <Bar key={i} dataKey="value" fill={barColors[i % barColors.length]} radius={[4,4,0,0]} />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* List */}
      <div className="divide-y divide-gray-100">
        {items.map((it, idx) => (
          <div key={idx} className={`flex items-center justify-between py-4 ${it.selected ? 'bg-gray-100 rounded-lg px-3 -mx-3' : ''}`}>
            <div className="flex items-center gap-3">
              <Dot color={it.color} />
              <span className="text-gray-800">{it.name}</span>
            </div>
            <div className="text-gray-600">{it.count} Filled</div>
            <button className="text-sky-700 font-medium">Show More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forms;
