import React from 'react';

const FinanceChart = () => {
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP'];
  const incomeData = [12, 17, 10, 16, 17, 16, 14, 16, 20];
  const expensesData = [8, 8, 8, 12, 10, 9, 8, 9, 10];
  
  const maxValue = 20;
  const totalIncome = 86000;
  const totalExpenses = 24000;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="text-lg font-bold text-gray-800">Finance</h2>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 bg-blue-600 rounded-sm"></span>
            <span className="text-gray-600">Income</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 bg-blue-300 rounded-sm"></span>
            <span className="text-gray-600">Expenses</span>
          </div>
        </div>
      </div>

      {/* Top border line */}
      <div className="border-t border-gray-200 mb-6"></div>

      {/* Summary Section */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-stretch gap-12 pb-6">
        {/* Income */}
        <div className="flex items-center gap-4 flex-1 justify-center">
          <div className="rounded-full border-2 border-gray-200 p-3">
            <svg className="h-6 w-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <div>
            <p className="text-gray-400 text-sm font-medium">INCOME</p>
            <p className="text-2xl font-bold text-gray-800">
              ${totalIncome.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px bg-gray-200"></div>

        {/* Expenses */}
        <div className="flex items-center gap-4 flex-1 justify-center">
          <div className="rounded-full border-2 border-gray-200 p-3">
            <svg className="h-6 w-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
            </svg>
          </div>
          <div>
            <p className="text-gray-400 text-sm font-medium">EXPENSES</p>
            <p className="text-2xl font-bold text-gray-800">
              ${totalExpenses.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </p>
          </div>
        </div>
      </div>

      {/* Middle border line */}
      <div className="border-t border-gray-200 mb-6"></div>

      {/* Chart */}
      <div className="h-64 relative">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 font-medium pr-2">
          <div>20K</div>
          <div>15K</div>
          <div>10K</div>
          <div>5K</div>
          <div>0</div>
        </div>

        <div className="h-full flex items-end justify-between gap-3 ml-8">
          {months.map((month, index) => {
            const incomeHeight = (incomeData[index] / maxValue) * 100;
            const expensesHeight = (expensesData[index] / maxValue) * 100;

            return (
              <div key={month} className="flex flex-col items-center flex-1 h-full justify-end">
                <div className="w-full mb-2 flex flex-col" style={{ height: '200px', justifyContent: 'flex-end' }}>
                  <div
                    className="w-full bg-blue-600 rounded-t-lg transition-all"
                    style={{ height: `${incomeHeight}%` }}
                  ></div>
                  <div
                    className="w-full bg-blue-300 transition-all"
                    style={{ height: `${expensesHeight}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-600 font-medium">{month}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FinanceChart;
