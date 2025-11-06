import React from 'react';

const ExpensesChart = () => {
  const total = 1800;
  const categories = [
    { name: 'Workers', amount: 900, color: '#1e3a8a' },
    { name: 'Training', amount: 600, color: '#3b82f6' },
    { name: 'Others', amount: 90, color: '#93c5fd' }
  ];

  const getPercentage = (amount) => ((amount / total) * 100).toFixed(0);

  return (
    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
      <div className="flex items-center space-x-2 mb-8">
        <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
        </svg>
        <h3 className="text-base font-semibold text-gray-900">Expenses</h3>
      </div>
      
      <div className="flex items-center justify-center mb-12">
        {/* Semi-circle Donut Chart */}
        <div className="relative w-64 h-32">
          <svg className="w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="xMidYMid meet">
            {/* Background arc */}
            <path
              d="M 20,80 A 80,80 0 0,1 180,80"
              fill="none"
              stroke="#f3f4f6"
              strokeWidth="20"
              strokeLinecap="round"
            />
            {/* Workers segment - dark blue */}
            <path
              d="M 20,80 A 80,80 0 0,1 100,10"
              fill="none"
              stroke="#1e3a8a"
              strokeWidth="20"
              strokeLinecap="round"
            />
            {/* Training segment - medium blue */}
            <path
              d="M 100,10 A 80,80 0 0,1 165,50"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="20"
              strokeLinecap="round"
            />
            {/* Others segment - light blue */}
            <path
              d="M 165,50 A 80,80 0 0,1 180,80"
              fill="none"
              stroke="#93c5fd"
              strokeWidth="20"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-2">
            <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">SPEND</div>
            <div className="text-2xl font-bold text-gray-900">$1,800.00</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
        {categories.map((category, index) => (
          <div key={index} className="text-center">
            <div className="mb-2">
              <svg className="w-10 h-10 mx-auto" fill="none" stroke={category.color} viewBox="0 0 24 24">
                {index === 0 && (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                )}
                {index === 1 && (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                )}
                {index === 2 && (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                )}
              </svg>
            </div>
            <div className="text-sm text-gray-600 mb-1 font-medium">{category.name}</div>
            <div className="text-lg font-bold text-gray-900">${category.amount.toLocaleString()}.00</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpensesChart;
