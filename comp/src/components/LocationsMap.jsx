import React from 'react';

const LocationsMap = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center space-x-2 mb-4">
        <span className="text-green-600">📍</span>
        <h3 
          className="font-metropolis font-bold align-middle" 
          style={{ 
            fontSize: '20px', 
            lineHeight: '100%', 
            letterSpacing: '0%',
            background: 'linear-gradient(90deg, #25266B 0%, #2A3492 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          Locations
        </h3>
      </div>
      <div className="relative bg-gray-200 rounded-lg overflow-hidden" style={{ height: '600px' }}>
        {/* Australia Map SVG */}
        <svg className="w-full h-full" viewBox="0 0 600 500" preserveAspectRatio="xMidYMid meet">
          {/* Western Australia */}
          <path
            d="M50,100 L50,350 L200,350 L200,300 L250,300 L250,100 Z"
            fill="#cbd5e1"
            stroke="#94a3b8"
            strokeWidth="1"
          />
          {/* Northern Territory */}
          <path
            d="M250,50 L250,300 L350,300 L350,50 Z"
            fill="#93c5fd"
            stroke="#60a5fa"
            strokeWidth="1"
          />
          {/* South Australia */}
          <path
            d="M200,300 L200,450 L350,450 L350,300 Z"
            fill="#7dd3fc"
            stroke="#38bdf8"
            strokeWidth="1"
          />
          {/* Queensland */}
          <path
            d="M350,50 L500,50 L520,100 L500,200 L480,250 L450,280 L420,300 L350,300 Z"
            fill="#3b82f6"
            stroke="#2563eb"
            strokeWidth="1"
          />
          {/* New South Wales */}
          <path
            d="M350,300 L420,300 L400,380 L380,420 L350,450 Z"
            fill="#60a5fa"
            stroke="#3b82f6"
            strokeWidth="1"
          />
          {/* Victoria */}
          <path
            d="M350,420 L380,420 L400,450 L350,450 Z"
            fill="#93c5fd"
            stroke="#60a5fa"
            strokeWidth="1"
          />
          {/* Tasmania */}
          <path
            d="M380,470 L420,470 L420,490 L380,490 Z"
            fill="#1e293b"
            stroke="#0f172a"
            strokeWidth="1"
          />
          
          {/* Location markers */}
          <circle cx="150" cy="350" r="3" fill="#ef4444" opacity="0.6" />
          <circle cx="180" cy="320" r="3" fill="#ef4444" opacity="0.6" />
          <circle cx="200" cy="280" r="3" fill="#ef4444" opacity="0.6" />
          <circle cx="280" cy="200" r="3" fill="#ef4444" opacity="0.6" />
          <circle cx="320" cy="250" r="3" fill="#ef4444" opacity="0.6" />
          <circle cx="380" cy="280" r="3" fill="#ef4444" opacity="0.6" />
          <circle cx="430" cy="240" r="3" fill="#ef4444" opacity="0.6" />
          <circle cx="460" cy="180" r="3" fill="#ef4444" opacity="0.6" />
          <circle cx="480" cy="250" r="3" fill="#ef4444" opacity="0.6" />
          
          {/* Brisbane tooltip */}
          <g transform="translate(390, 280)">
            <rect x="0" y="-40" width="140" height="50" rx="4" fill="#1e293b" />
            <text x="10" y="-20" fill="white" fontSize="12" fontWeight="bold">Brisbane City, Queensland</text>
            <g transform="translate(10, -12)">
              <circle cx="5" cy="0" r="8" fill="#cbd5e1" />
              <circle cx="20" cy="0" r="8" fill="#cbd5e1" />
              <circle cx="35" cy="0" r="8" fill="#cbd5e1" />
            </g>
            <text x="55" y="-6" fill="white" fontSize="10">+234</text>
            <text x="90" y="-6" fill="white" fontSize="10">$22k</text>
          </g>
        </svg>
        
        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-white rounded p-3 shadow-lg">
          <div className="text-xs font-semibold text-gray-700 mb-2">ENGAGEMENT BY STATE</div>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="w-6 h-3 bg-blue-500"
                style={{ opacity: i * 0.125 }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationsMap;
