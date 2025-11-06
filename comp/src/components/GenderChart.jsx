import React from 'react';

const GenderChart = () => {
  const menPercentage = 65;
  const womenPercentage = 35;

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center space-x-2 mb-6">
        <span className="text-blue-600">💼</span>
        <h3 className="text-lg font-semibold text-gray-900">Gender</h3>
      </div>
      
      <div className="flex items-center justify-center mb-6">
        {/* Donut Chart for Gender */}
        <div className="relative w-32 h-32">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            {/* Men segment */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#1e40af"
              strokeWidth="20"
              strokeDasharray={`${menPercentage * 2.51} ${251 - menPercentage * 2.51}`}
            />
            {/* Women segment */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#93c5fd"
              strokeWidth="20"
              strokeDasharray={`${womenPercentage * 2.51} ${251 - womenPercentage * 2.51}`}
              strokeDashoffset={`-${menPercentage * 2.51}`}
            />
          </svg>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-blue-900"></div>
            <span className="text-sm text-gray-600">Men</span>
          </div>
          <span className="text-sm font-semibold text-gray-900">{menPercentage}%</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-blue-300"></div>
            <span className="text-sm text-gray-600">Women</span>
          </div>
          <span className="text-sm font-semibold text-gray-900">{womenPercentage}%</span>
        </div>
      </div>
    </div>
  );
};

export default GenderChart;
