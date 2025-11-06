import React from 'react';

const Header = () => {
  return (
    <header className="bg-white px-6 py-6 rounded-xl shadow-sm border border-gray-100 mb-2">
      <div className="flex flex-col space-y-4">
        {/* Profile Section */}
        <div className="flex items-center space-x-4">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" 
            alt="Jack Wilson" 
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <div className="flex items-center space-x-2 mb-1">
              <h1 className="text-3xl font-bold text-gray-900">Jack Wilson</h1>
              <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded font-medium">
                54 Hug › 16 Hug
              </span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-2xl font-medium">Brisbane City, Queensland</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center space-x-8 border-b border-gray-200 -mx-6 px-6 -mb-6 pb-4">
          <button className="flex items-center space-x-2 pb-4 border-b-4 border-indigo-700 -mb-px text-gray-900">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
            </svg>
            <span className="text-lg font-semibold">Dashboard</span>
          </button>
          <button className="flex items-center space-x-2 pb-4 border-b-4 border-transparent -mb-px text-gray-500 hover:text-gray-700">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
            </svg>
            <span className="text-lg font-semibold">Finance</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
