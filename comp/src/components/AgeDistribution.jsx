import React from 'react';

const AgeDistribution = () => {
  const ageGroups = [
    { range: '18-25', percentage: 35 },
    { range: '26-35', percentage: 48 },
    { range: '36-44', percentage: 55 },
    { range: '46-55', percentage: 42 },
    { range: '58-65', percentage: 70 }
  ];

  const maxPercentage = Math.max(...ageGroups.map(g => g.percentage));

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center space-x-2 mb-6">
        <span className="text-blue-600">👥</span>
        <h3 className="text-lg font-semibold text-gray-900">Age Distribution</h3>
      </div>
      
      <div className="flex items-end justify-between h-40 space-x-2">
        {ageGroups.map((group, index) => {
          const height = (group.percentage / maxPercentage) * 100;
          return (
            <div key={index} className="flex flex-col items-center flex-1">
              <div className="w-full bg-gray-100 rounded-t flex flex-col justify-end" style={{ height: '100%' }}>
                <div 
                  className="w-full bg-blue-600 rounded-t transition-all"
                  style={{ height: `${height}%` }}
                ></div>
              </div>
              <div className="text-xs text-gray-600 mt-2">{group.range}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AgeDistribution;
