import React from 'react';

const TrainingChart = () => {
  const trainingData = [
    { name: 'Medication Assistance Training', percentage: 25, color: '#000000' },
    { name: 'Assistance with Social', percentage: 20, color: '#1e3a8a' },
    { name: 'Transport', percentage: 18, color: '#3b82f6' },
    { name: 'Consumables Training', percentage: 15, color: '#60a5fa' },
    { name: 'Assistive Technology', percentage: 12, color: '#93c5fd' },
    { name: 'Other', percentage: 10, color: '#dbeafe' }
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <div className="flex items-center gap-2 mb-6">
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
        <h3 className="text-lg font-bold text-gray-800">Training</h3>
      </div>
      
      <div className="flex items-center justify-between mb-8">
        {/* Donut Chart with Total Workers */}
        <div className="relative w-44 h-44">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            {/* Black segment - 25% */}
            <circle
              cx="50"
              cy="50"
              r="35"
              fill="none"
              stroke="#000000"
              strokeWidth="16"
              strokeDasharray="55 165"
              strokeDashoffset="0"
            />
            {/* Dark blue segment - 20% */}
            <circle
              cx="50"
              cy="50"
              r="35"
              fill="none"
              stroke="#1e3a8a"
              strokeWidth="16"
              strokeDasharray="44 176"
              strokeDashoffset="-55"
            />
            {/* Medium blue segment - 18% */}
            <circle
              cx="50"
              cy="50"
              r="35"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="16"
              strokeDasharray="40 180"
              strokeDashoffset="-99"
            />
            {/* Light medium blue segment - 15% */}
            <circle
              cx="50"
              cy="50"
              r="35"
              fill="none"
              stroke="#60a5fa"
              strokeWidth="16"
              strokeDasharray="33 187"
              strokeDashoffset="-139"
            />
            {/* Light blue segment - 12% */}
            <circle
              cx="50"
              cy="50"
              r="35"
              fill="none"
              stroke="#93c5fd"
              strokeWidth="16"
              strokeDasharray="26 194"
              strokeDashoffset="-172"
            />
            {/* Very light blue segment - 10% */}
            <circle
              cx="50"
              cy="50"
              r="35"
              fill="none"
              stroke="#dbeafe"
              strokeWidth="16"
              strokeDasharray="22 198"
              strokeDashoffset="-198"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-4xl font-bold text-gray-900">150</div>
            <div className="text-sm text-gray-500 font-medium">Total Workers</div>
          </div>
        </div>

        {/* Legend - Right side in 2 columns */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-3 flex-1 ml-6">
          {trainingData.map((item, index) => (
            <div key={index} className="flex items-start justify-between">
              <div className="flex items-start gap-2 flex-1">
                <div 
                  className="w-3 h-3 rounded-sm mt-0.5 flex-shrink-0" 
                  style={{ backgroundColor: item.color }}
                ></div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-700 leading-tight">{item.name}</span>
                  <span className="text-base font-bold text-gray-900">{item.percentage}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default TrainingChart;
