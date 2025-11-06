import React from 'react';

const MetricCard = ({ title, value, change, changeType, icon, color, chartColor }) => {
  const isPositive = changeType === 'positive';
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
      <div className="flex justify-between items-start mb-2">
        <button className="bg-gray-100 rounded-full p-2 hover:bg-gray-200 transition-colors">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            {icon}
          </svg>
        </button>
        <div className="w-2/3 h-12">
          <svg className="w-full h-full" viewBox="0 0 200 80" preserveAspectRatio="none">
            <path
              d="M0,40 Q25,25 50,35 T100,40 T150,30 T200,40"
              fill="none"
              stroke={chartColor}
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
      
      <div className="space-y-3">
        <h3 className="text-base text-gray-700 font-medium">{title}</h3>
        <div className="flex items-center space-x-2">
          <div className="font-metropolis text-lg font-medium leading-6 tracking-tight-custom align-middle text-gray-900">{value}</div>
          <span className={`text-xs font-semibold px-2 py-0.5 rounded-md ${isPositive ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'}`}>
            {change}
          </span>
        </div>
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
      chartColor: '#10b981',
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
    },
    {
      title: 'Total Expenses',
      value: '$6,240.28',
      change: '-2%',
      changeType: 'negative',
      chartColor: '#ef4444',
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M17 7L7 17M7 17H17M7 17V7" />
    },
    {
      title: 'Profit / Loss',
      value: '$6,240.28',
      change: '-2%',
      changeType: 'negative',
      chartColor: '#f59e0b',
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M17 7L7 17M7 17H17M7 17V7" />
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
