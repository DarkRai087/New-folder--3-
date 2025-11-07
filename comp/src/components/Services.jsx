import React from 'react';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { subject: 'Self-Care Activites', A: 20, B: 12 },
  { subject: 'Daily Consumables', A: 16, B: 14 },
  { subject: 'Community Participation', A: 12, B: 18 },
  { subject: 'Assistive Technology', A: 8, B: 10 },
  { subject: 'Nutritional Support', A: 10, B: 8 },
  { subject: 'Health and Wellness program', A: 14, B: 9 },
  { subject: 'Home Modifications', A: 18, B: 6 },
  { subject: 'Travel Assistance', A: 11, B: 13 },
];

const Services = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center gap-3 mb-3">
        {/* icon similar color to screenshot */}
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 6.5L12 2L21 6.5L12 11L3 6.5Z" fill="#F59E0B" />
          <path d="M3 13.5L12 9L21 13.5L12 18L3 13.5Z" fill="#F59E0B" />
          <path d="M3 20.5L12 16L21 20.5L12 25L3 20.5Z" transform="translate(0,-6)" fill="#F59E0B" opacity="0.95" />
        </svg>
        <h3 className="text-indigo-700 font-semibold text-lg">Services</h3>
      </div>

      <div className="flex items-center mb-4">
        <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-3 py-1">
          <span className="inline-flex items-center mr-4">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2" />
            <span className="text-sm text-gray-600">Completed</span>
          </span>
          <span className="h-5 border-l border-gray-200 mr-4" />
          <span className="inline-flex items-center">
            <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2" />
            <span className="text-sm text-gray-600">Upcoming</span>
          </span>
        </div>
      </div>

      {/* chart container with much larger size for better readability */}
      <div className="w-full mt-4" style={{ height: 420 }}>
        <ResponsiveContainer>
          {/* much larger radar for better visibility */}
          <RadarChart data={data} outerRadius="70%" margin={{ top: 50, right: 80, bottom: 50, left: 80 }}>
            <PolarGrid gridType="polygon" stroke="#E6E6E6" />
            {/* labels with rounded pill backgrounds pushed far outside the radar */}
            <PolarAngleAxis
              dataKey="subject"
              stroke="none"
              axisLine={false}
              tick={({ payload, x, y, cx, cy }) => {
                const text = payload.value;
                const width = Math.min(170, text.length * 6.5 + 24);
                
                // Calculate angle and push label further outward
                const RADIAN = Math.PI / 180;
                const radius = 180; // Distance from center to push labels out (increased)
                const angle = Math.atan2(y - cy, x - cx);
                const offsetX = Math.cos(angle) * radius;
                const offsetY = Math.sin(angle) * radius;
                const finalX = cx + offsetX;
                const finalY = cy + offsetY;
                
                return (
                  <g transform={`translate(${finalX - width / 2}, ${finalY - 12})`}>
                    <rect x={0} y={0} rx={14} ry={14} width={width} height={24} fill="#F9FAFB" stroke="#E5E7EB" strokeWidth={1} />
                    <text x={width / 2} y={16} textAnchor="middle" fill="#6B7280" fontSize={11} fontWeight={400}>
                      {text}
                    </text>
                  </g>
                );
              }}
            />
            {/* numeric rings visible at 5, 10, 15, 20 - positioned on Self-Care Activites (top) */}
            <PolarRadiusAxis angle={90} domain={[0, 20]} tick={{ fill: '#9CA3AF', fontSize: 11 }} axisLine={false} />
            <Radar name="Completed" dataKey="A" stroke="#10B981" fill="#10B981" fillOpacity={0.12} strokeWidth={2} />
            <Radar name="Upcoming" dataKey="B" stroke="#F59E0B" fill="#F59E0B" fillOpacity={0.12} strokeWidth={2} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};export default Services;
