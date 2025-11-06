import React from 'react';

const MetricCard = ({ title, value, change, changeType, icon, color }) => {
  const isPositive = changeType === 'positive';
  
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-start justify-between mb-4">
        <div className="p-2 bg-gray-50 rounded-lg">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {icon}
          </svg>
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-sm text-gray-600 font-medium">{title}</h3>
        <div className="flex items-baseline space-x-3">
          <div className="text-2xl font-bold text-gray-900">{value}</div>
          <span className={`text-xs font-semibold px-2 py-1 rounded-md ${isPositive ? 'text-green-700 bg-green-50' : 'text-red-700 bg-red-50'}`}>
            {change}
          </span>
        </div>
      </div>
      <div className="mt-4">
        <svg className="w-full h-16" viewBox="0 0 200 60" preserveAspectRatio="none">
          <path
            d="M0,30 Q25,20 50,25 T100,30 T150,25 T200,30"
            fill="none"
            stroke={isPositive ? '#10b981' : '#ef4444'}
            strokeWidth="2.5"
            opacity="0.6"
          />
        </svg>
      </div>
    </div>
  );
};

const TopMetrics = () => {
  const metrics = [
    {
      title: 'Total Revenue',
      value: '$6,240.28',
      change: '+2%',
      changeType: 'positive',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    },
    {
      title: 'Total Expenses',
      value: '$6,240.28',
      change: '-2%',
      changeType: 'negative',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
    },
    {
      title: 'Profit / Loss',
      value: '$6,240.28',
      change: '-2%',
      changeType: 'negative',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>
  );
};

export default TopMetrics;
