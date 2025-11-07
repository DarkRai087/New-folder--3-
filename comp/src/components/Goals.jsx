import React from 'react';

const Shield = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 2L4 5v6c0 5 3.5 9.7 8 11 4.5-1.3 8-6 8-11V5l-8-3Z" stroke="#EF4444" strokeWidth="1.5" fill="none"/>
  </svg>
);

const Dot = ({ color = '#9CA3AF' }) => (
  <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }} />
);

const StatusPill = ({ status }) => {
  const map = {
    'In Progress': { bg: 'bg-amber-50', text: 'text-amber-700', dot: '#F59E0B' },
    'Completed': { bg: 'bg-emerald-50', text: 'text-emerald-700', dot: '#10B981' },
    'Not Started': { bg: 'bg-gray-100', text: 'text-gray-700', dot: '#D1D5DB' },
  };
  const m = map[status] || map['Not Started'];
  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm ${m.bg} ${m.text}`}>
      <Dot color={m.dot} />
      {status}
    </span>
  );
};

const ProgressMini = ({ percent = 0, color = '#E5E7EB' }) => (
  <div className="w-56 max-w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
    <div className="h-full" style={{ width: `${percent}%`, backgroundColor: color }} />
  </div>
);

const Goals = () => {
  // Summary counts
  const summary = { pending: 2, active: 9, completed: 1 };
  const total = summary.pending + summary.active + summary.completed;

  const rows = [
    { name: 'Independent Living', clients: 20, percent: 43, status: 'In Progress' },
    { name: 'Community Access', clients: 30, percent: 100, status: 'In Progress' },
    { name: 'Health', clients: 1, percent: 0, status: 'Completed' },
    { name: 'Social Participation', clients: 32, percent: 0, status: 'Not Started' },
    { name: 'Education', clients: 23, percent: 0, status: 'In Progress' },
    { name: 'Employment', clients: 43, percent: 100, status: 'In Progress' },
  ];

  const pct = (c) => (c / total) * 100;

  return (
    <div className="bg-white rounded-2xl shadow border border-gray-200 p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-red-50 ring-1 ring-red-100">
          <Shield className="w-5 h-5" />
        </div>
        <h2 className="text-xl font-semibold text-indigo-700">Goals</h2>
      </div>

      {/* Totals and stacked bar */}
      <div className="mb-4">
        <div className="text-gray-800 font-medium mb-2">12 Goals</div>
        <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden flex">
          <div className="h-full bg-gray-300" style={{ width: `${pct(summary.pending)}%` }} />
          <div className="h-full bg-amber-500" style={{ width: `${pct(summary.active)}%` }} />
          <div className="h-full bg-emerald-500" style={{ width: `${pct(summary.completed)}%` }} />
        </div>
        <div className="flex items-center gap-6 text-sm text-gray-600 mt-3">
          <div className="flex items-center gap-2"><Dot color="#E5E7EB" /> Pending</div>
          <div className="flex items-center gap-2"><Dot color="#F59E0B" /> Active</div>
          <div className="flex items-center gap-2"><Dot color="#10B981" /> Completed</div>
        </div>
      </div>

      {/* Rows */}
      <div className="divide-y divide-gray-100">
        {rows.map((r, i) => (
          <div key={i} className="grid grid-cols-12 items-center py-4">
            <div className="col-span-5 text-gray-800">{r.name}</div>
            <div className="col-span-2 text-gray-700">{r.clients} {r.clients === 1 ? 'Client' : 'Clients'}</div>
            <div className="col-span-3 flex items-center gap-3">
              <ProgressMini percent={r.percent} color={r.percent === 100 ? '#10B981' : r.percent === 0 ? '#E5E7EB' : '#F59E0B'} />
              <span className="text-xs text-gray-600 w-10">{r.percent}%</span>
            </div>
            <div className="col-span-2 flex justify-end">
              <StatusPill status={r.status} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Goals;
