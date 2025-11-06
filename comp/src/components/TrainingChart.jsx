import React from 'react';

const TrainingChart = () => {
  const trainingData = [
    { name: 'Medication Assistance Training', percentage: 20, color: 'bg-red-500' },
    { name: 'Assistance with Social Participation', percentage: 20, color: 'bg-gray-800' },
    { name: 'Transport', percentage: 10, color: 'bg-gray-400' },
    { name: 'Consumables Training', percentage: 10, color: 'bg-gray-800' },
    { name: 'Assistive Technology', percentage: 12, color: 'bg-gray-400' },
    { name: 'Other', percentage: 10, color: 'bg-gray-300' }
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center space-x-2 mb-6">
        <span className="text-blue-500">🎓</span>
        <h3 className="text-lg font-semibold text-gray-900">Training</h3>
      </div>
      
      <div className="flex items-center justify-center mb-6">
        {/* Donut Chart with Total Workers */}
        <div className="relative w-40 h-40">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="35"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="15"
            />
            {/* Active segment (black) */}
            <circle
              cx="50"
              cy="50"
              r="35"
              fill="none"
              stroke="#1e293b"
              strokeWidth="15"
              strokeDasharray="165 55"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-3xl font-bold text-gray-900">150</div>
            <div className="text-xs text-gray-500">Total Workers</div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        {trainingData.map((item, index) => (
          <div key={index} className="flex items-center justify-between text-xs">
            <div className="flex items-center space-x-2 flex-1">
              <div className={`w-2 h-2 rounded-full ${item.color}`}></div>
              <span className="text-gray-700">{item.name}</span>
            </div>
            <span className="text-gray-900 font-medium">{item.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingChart;
