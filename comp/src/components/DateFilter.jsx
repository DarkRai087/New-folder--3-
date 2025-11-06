import React from 'react';

const DateFilter = () => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-700 shadow-sm">
        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="font-medium">01 Sep 2025 - 30 Sep 2025</span>
        <svg className="w-4 h-4 text-gray-500 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <button className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 shadow-sm">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
        <span className="font-medium">Filter</span>
      </button>
    </div>
  );
};

export default DateFilter;
