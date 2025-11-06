import React from 'react';

const ExpensesChart = () => {
  const total = 1800;
  const categories = [
    { name: 'Workers', amount: 900, icon: '👷', color: 'text-blue-900' },
    { name: 'Training', amount: 600, icon: '📚', color: 'text-blue-700' },
    { name: 'Others', amount: 90, icon: '📊', color: 'text-blue-500' }
  ];

  const getPercentage = (amount) => ((amount / total) * 100).toFixed(0);

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center space-x-2 mb-6">
        <span className="text-orange-500">🔶</span>
        <h3 className="text-lg font-semibold text-gray-900">Expenses</h3>
      </div>
      
      <div className="flex items-center justify-center mb-8">
        {/* Donut Chart */}
        <div className="relative w-48 h-48">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="35"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="12"
            />
            {/* Workers segment - 50% */}
            <circle
              cx="50"
              cy="50"
              r="35"
              fill="none"
              stroke="#1e3a8a"
              strokeWidth="12"
              strokeDasharray={`${getPercentage(900) * 2.2} ${220 - getPercentage(900) * 2.2}`}
              strokeDashoffset="0"
            />
            {/* Training segment - 33% */}
            <circle
              cx="50"
              cy="50"
              r="35"
              fill="none"
              stroke="#1e40af"
              strokeWidth="12"
              strokeDasharray={`${getPercentage(600) * 2.2} ${220 - getPercentage(600) * 2.2}`}
              strokeDashoffset={`-${getPercentage(900) * 2.2}`}
            />
            {/* Others segment - remaining */}
            <circle
              cx="50"
              cy="50"
              r="35"
              fill="none"
              stroke="#60a5fa"
              strokeWidth="12"
              strokeDasharray={`${getPercentage(90) * 2.2} ${220 - getPercentage(90) * 2.2}`}
              strokeDashoffset={`-${(getPercentage(900) + getPercentage(600)) * 2.2}`}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-xs text-gray-500 font-medium">SPEND</div>
            <div className="text-xl font-bold text-gray-900">$1,800.00</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {categories.map((category, index) => (
          <div key={index} className="text-center">
            <div className={`text-2xl mb-1 ${category.color}`}>{category.icon}</div>
            <div className="text-xs text-gray-600 mb-1">{category.name}</div>
            <div className="text-sm font-semibold text-gray-900">${category.amount}.00</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpensesChart;
