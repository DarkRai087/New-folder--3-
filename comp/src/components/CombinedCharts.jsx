import React, { useState, useEffect } from 'react';

const CombinedCharts = () => {
  // Expenses data
  const total = 1800;
  const categories = [
    { name: 'Workers', amount: 900, color: '#1e3a8a' },
    { name: 'Training', amount: 600, color: '#3b82f6' },
    { name: 'Others', amount: 300, color: '#93c5fd' }
  ];

  // State for animating expense values
  const [animatedExpenses, setAnimatedExpenses] = useState({ workers: 0, training: 0, others: 0 });

  // Gender data
  const menPercentage = 65;
  const womenPercentage = 35;

  // Age Distribution data
  const ageGroups = [
    { range: '18-25', percentage: 35 },
    { range: '26-35', percentage: 48 },
    { range: '36-44', percentage: 55 },
    { range: '46-55', percentage: 42 },
    { range: '58-65', percentage: 70 }
  ];
  const maxPercentage = Math.max(...ageGroups.map(g => g.percentage));

  // Animation Effect for Expenses
  useEffect(() => {
    const targets = { workers: 900, training: 600, others: 300 };
    const animationDuration = 1000;
    const frames = 50;
    const intervalTime = animationDuration / frames;

    const interval = setInterval(() => {
      setAnimatedExpenses(prev => ({
        workers: Math.min(prev.workers + (targets.workers / frames), targets.workers),
        training: Math.min(prev.training + (targets.training / frames), targets.training),
        others: Math.min(prev.others + (targets.others / frames), targets.others)
      }));
    }, intervalTime);

    const timeout = setTimeout(() => clearInterval(interval), animationDuration);
    
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Expenses Chart */}
      <div className="bg-white rounded-md shadow-md p-6 md:row-span-2">
        <div className="flex items-center gap-2 mb-4">
          <svg className="h-6 w-6 text-red-700" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <h2 className="text-xl font-semibold text-gray-800">Expenses</h2>
        </div>
        
        <div className="my-8">
          <div className="relative mb-6" style={{ height: '150px' }}>
            {/* Semi-circle Donut Chart */}
            <div className="relative w-full h-full flex justify-center">
              <svg className="w-48 h-full" viewBox="0 0 200 100" preserveAspectRatio="xMidYMid meet">
                {/* Background arc */}
                <path
                  d="M 20,80 A 80,80 0 0,1 180,80"
                  fill="none"
                  stroke="#f3f4f6"
                  strokeWidth="20"
                  strokeLinecap="round"
                />
                {/* Workers segment - dark blue (50%) */}
                <path
                  d="M 20,80 A 80,80 0 0,1 100,10"
                  fill="none"
                  stroke="#1e3a8a"
                  strokeWidth="20"
                  strokeLinecap="round"
                />
                {/* Training segment - medium blue (33%) */}
                <path
                  d="M 100,10 A 80,80 0 0,1 165,50"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="20"
                  strokeLinecap="round"
                />
                {/* Others segment - light blue (17%) */}
                <path
                  d="M 165,50 A 80,80 0 0,1 180,80"
                  fill="none"
                  stroke="#93c5fd"
                  strokeWidth="20"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-end pointer-events-none pb-4">
              <p className="text-gray-500 text-sm font-medium">SPEND</p>
              <p className="text-2xl font-bold text-gray-800">
                ${total.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </p>
            </div>
          </div>
          
          <div className="flex justify-around items-center pt-4 border-t border-gray-100">
            {/* Workers */}
            <div className="text-center flex-1">
              <div className="flex justify-center mb-2">
                <div className="bg-gray-100 rounded-md p-2">
                  <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <span className="text-sm text-gray-600">Workers</span>
              <p className="text-xl font-bold text-gray-800">
                ${animatedExpenses.workers.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </p>
            </div>
            
            <div className="h-16 border-l border-gray-200"></div>
            
            {/* Training */}
            <div className="text-center flex-1">
              <div className="flex justify-center mb-2">
                <div className="bg-gray-100 rounded-md p-2">
                  <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
              <span className="text-sm text-gray-600">Training</span>
              <p className="text-xl font-bold text-gray-800">
                ${animatedExpenses.training.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </p>
            </div>
            
            <div className="h-16 border-l border-gray-200"></div>
            
            {/* Others */}
            <div className="text-center flex-1">
              <div className="flex justify-center mb-2">
                <div className="bg-gray-100 rounded-md p-2">
                  <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </div>
              </div>
              <span className="text-sm text-gray-600">Others</span>
              <p className="text-xl font-bold text-gray-800">
                ${animatedExpenses.others.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Gender Chart */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <div className="flex items-center gap-2 mb-6">
          <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
          </svg>
          <h3 className="text-lg font-bold text-gray-800">Gender</h3>
        </div>
        
        <div className="flex items-center justify-between">
          {/* Donut Chart for Gender */}
          <div className="relative w-32 h-32">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              {/* Men segment */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#1e3a8a"
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

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-900"></div>
                <span className="text-sm text-gray-600">Men</span>
              </div>
              <span className="text-lg font-bold text-gray-900 ml-auto">{menPercentage}%</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-300"></div>
                <span className="text-sm text-gray-600">Women</span>
              </div>
              <span className="text-lg font-bold text-gray-900 ml-auto">{womenPercentage}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Age Distribution Chart */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <div className="flex items-center gap-2 mb-6">
          <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
          </svg>
          <h3 className="text-lg font-bold text-gray-800">Age Distribution</h3>
        </div>
        
        <div className="flex items-end justify-between h-40 gap-2 pt-4">
          {ageGroups.map((group, index) => {
            const height = (group.percentage / maxPercentage) * 100;
            return (
              <div key={index} className="flex flex-col items-center flex-1">
                <div className="w-full flex flex-col justify-end" style={{ height: '140px' }}>
                  <div 
                    className="w-full bg-blue-600 rounded-t-lg transition-all"
                    style={{ height: `${height}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-400 mt-2 whitespace-nowrap">{group.range}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CombinedCharts;
