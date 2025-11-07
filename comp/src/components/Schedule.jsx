import React from 'react';

// Simple inline icons so the component is self-contained
const Icon = {
  calendar: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3" y="4.5" width="18" height="16" rx="2.5" stroke="#4F46E5" strokeWidth="1.5"/>
      <path d="M8 2.75V6.25M16 2.75V6.25" stroke="#4F46E5" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M3 9H21" stroke="#E5E7EB" strokeWidth="1.5"/>
    </svg>
  ),
  chevronLeft: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}><path d="M15 19L8 12L15 5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
  chevronRight: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}><path d="M9 5L16 12L9 19" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
  clock: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}><circle cx="12" cy="12" r="9" stroke="#6B7280" strokeWidth="1.5"/><path d="M12 7v5l3 2" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
  user: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}><circle cx="12" cy="8" r="4" stroke="#6B7280" strokeWidth="1.5"/><path d="M4 20c1.5-3.5 5-5 8-5s6.5 1.5 8 5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round"/></svg>
  ),
  search: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}><circle cx="11" cy="11" r="7" stroke="#9CA3AF" strokeWidth="1.5"/><path d="M20 20L17 17" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round"/></svg>
  )
};

// Small avatar placeholder as requested
const Avatar = ({ className = '' }) => (
  <div className={`w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center ring-2 ring-white shadow ${className}`}>
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
      <circle cx="12" cy="9" r="4" fill="#F59EAA" />
      <path d="M4 21c2-4 6-6 8-6s6 2 8 6" fill="#FAD1D7" />
    </svg>
  </div>
);

const Day = ({ label, date, active }) => (
  <div className="flex flex-col items-center w-14 shrink-0">
    <div className={`text-gray-700 text-sm mb-1 h-5 ${active ? 'opacity-0' : ''}`}>{label}</div>
    {active ? (
      <div className="px-3 py-2 rounded-xl bg-indigo-900 text-white flex flex-col items-center w-min leading-tight">
        <div className="text-xs leading-none">{label}</div>
        <div className="text-base font-semibold leading-none">{date}</div>
      </div>
    ) : (
      <div className="text-gray-700">
        <div className="text-base text-gray-800 text-center leading-none">{date}</div>
      </div>
    )}
  </div>
);

const EventCard = ({ title, time, staff, badge = 'Broken Shift' }) => (
  <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 w-[330px]">
    <div className="text-gray-800 font-semibold leading-snug mb-3">{title}</div>
    <div className="flex items-center text-gray-600 text-sm mb-2">
      <Icon.clock className="w-4 h-4 mr-2" />
      <span>{time}</span>
    </div>
    <div className="flex items-center text-gray-700 text-sm">
      <Icon.user className="w-4 h-4 mr-2" />
      <span>{staff}</span>
    </div>
    <div className="flex items-center justify-between mt-4">
      <Avatar />
      <span className="px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-medium">{badge}</span>
    </div>
  </div>
);

const Schedule = () => {
  const days = [
    { label: 'Tue', date: '27' },
    { label: 'Wed', date: '28' },
    { label: 'Thu', date: '29' },
    { label: 'Fri', date: '30' },
    { label: 'Sat', date: '31' },
    { label: 'Sun', date: '01', active: true },
    { label: 'Mon', date: '02' },
    { label: 'Tue', date: '03' },
    { label: 'Wed', date: '04' },
    { label: 'Thu', date: '05' },
    { label: 'Fri', date: '06' },
    { label: 'Sat', date: '07' },
    { label: 'Sun', date: '08' },
    { label: 'Mon', date: '09' },
    { label: 'Tue', date: '10' },
    { label: 'Wed', date: '11' }
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow p-6">
      {/* Title */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-indigo-50 ring-1 ring-indigo-100">
          <Icon.calendar className="w-5 h-5" />
        </div>
        <h2 className="text-xl font-semibold text-indigo-700">Schedule</h2>
      </div>

      {/* Month bar */}
      <div className="flex items-center gap-3 mb-4">
        <button className="w-12 h-12 flex items-center justify-center rounded-lg border border-gray-200">
          <Icon.chevronLeft className="w-6 h-6" />
        </button>
        <div className="flex-1 h-12 rounded-lg border border-gray-200 bg-gray-50 flex items-center justify-center text-gray-800 font-medium">
          September 2024
        </div>
        <button className="w-12 h-12 flex items-center justify-center rounded-lg border border-gray-200">
          <Icon.chevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Week strip */}
      <div className="bg-gray-50 rounded-xl border border-gray-200 px-6 py-4 flex items-center justify-between mb-6 overflow-hidden">
        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-50" aria-label="prev-week">
          <Icon.chevronLeft className="w-6 h-6" />
        </button>
        <div className="flex-1 overflow-hidden">
          <div className="flex items-center justify-center gap-6 flex-nowrap">
            {days.map((d, idx) => (
              <Day key={idx} label={d.label} date={d.date} active={d.active} />
            ))}
          </div>
        </div>
        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-50" aria-label="next-week">
          <Icon.chevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative w-80 max-w-full">
          <Icon.search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
        </div>
      </div>

      {/* Cards row with side pager buttons */}
      <div className="flex items-stretch gap-6">
  <button className="w-12 h-12 shrink-0 self-center rounded-full border border-gray-200 bg-white flex items-center justify-center">
          <Icon.chevronLeft className="w-6 h-6" />
        </button>
        <div className="flex gap-6 overflow-hidden">
          <EventCard title="Assistance With Self-Care Activities" time="04:00 PM - 05:00 PM" staff="George Bush, +4 more" />
          <EventCard title="Assistance With Self-Care Activities" time="04:00 PM - 05:00 PM" staff="George Bush, +4 more" />
          <EventCard title="Assistance With Self-Care Activities" time="04:00 PM - 05:00 PM" staff="George Bush, +4 more" />
        </div>
  <button className="w-12 h-12 shrink-0 self-center rounded-full border border-gray-200 bg-white flex items-center justify-center ml-auto">
          <Icon.chevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Schedule;
