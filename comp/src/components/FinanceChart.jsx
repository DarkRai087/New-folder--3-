import React from 'react';

const FinanceChart = () => {
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP'];
  
  const incomeData = [12, 17, 10, 15, 16, 14, 13, 15, 19];
  const expensesData = [8, 13, 8, 12, 14, 11, 10, 13, 15];
  
  const maxValue = 20;

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <span className="text-blue-600">💵</span>
          <h3 className="text-lg font-semibold text-gray-900">Finance</h3>
        </div>
        <div className="flex items-center space-x-4 text-xs">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-600 rounded"></div>
            <span className="text-gray-600">Income</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-300 rounded"></div>
            <span className="text-gray-600">Expenses</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-6">
        <div>
          <div className="flex items-center space-x-2 mb-1">
            <span className="text-blue-600">📈</span>
            <span className="text-xs text-gray-500">INCOME</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">$86,000.00</div>
        </div>
        <div>
          <div className="flex items-center space-x-2 mb-1">
            <span className="text-red-500">📉</span>
            <span className="text-xs text-gray-500">EXPENSES</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">$24,000.00</div>
        </div>
      </div>

      <div className="relative h-64">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-gray-500">
          <span>20K</span>
          <span>15K</span>
          <span>10K</span>
          <span>0</span>
        </div>

        {/* Chart area */}
        <div className="ml-8 h-full flex items-end justify-between space-x-1">
          {months.map((month, index) => {
            const incomeHeight = (incomeData[index] / maxValue) * 100;
            const expensesHeight = (expensesData[index] / maxValue) * 100;
            
            return (
              <div key={month} className="flex flex-col items-center flex-1 h-full justify-end">
                <div className="w-full flex space-x-0.5 mb-2">
                  <div className="flex-1 flex flex-col justify-end" style={{ height: '200px' }}>
                    <div 
                      className="w-full bg-blue-600 rounded-t"
                      style={{ height: `${incomeHeight}%` }}
                    ></div>
                  </div>
                  <div className="flex-1 flex flex-col justify-end" style={{ height: '200px' }}>
                    <div 
                      className="w-full bg-blue-300 rounded-t"
                      style={{ height: `${expensesHeight}%` }}
                    ></div>
                  </div>
                </div>
                <div className="text-xs text-gray-600">{month}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FinanceChart;
