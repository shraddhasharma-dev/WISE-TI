import React, { useState } from 'react';

export default function ParticipantsTab() {
  const [selectedRows, setSelectedRows] = useState([false, true, true, true]);
  const [selectAll, setSelectAll] = useState(false);

  const participants = [
    { id: 0, name: "Elena Aris", email: "elena.a@stanford.edu", initial: "EA", university: "Stanford University", role: "ZZDEV", roleColor: "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300", team: "Teamed (EcoSync)", looking: false, date: "Oct 12, 2024" },
    { id: 1, name: "James Wu", email: "j.wu@mit.edu", initial: "JW", university: "Massachusetts Institute of Tech", role: "DESIGN", roleColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300", team: "Teamed (Solari)", looking: false, date: "Oct 14, 2024" },
    { id: 2, name: "Sarah Miller", email: "smiller@berkeley.edu", initial: "SM", university: "UC Berkeley", role: "PM", roleColor: "bg-stone-200 text-stone-700 dark:bg-stone-800 dark:text-stone-300", team: "Looking for Team", looking: true, date: "Oct 15, 2024" },
    { id: 3, name: "Rohan Kapoor", email: "rohan@harvard.edu", initial: "RK", university: "Harvard University", role: "DEV", roleColor: "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300", team: "Teamed (H2O.ly)", looking: false, date: "Oct 16, 2024" },
  ];

  const handleRowSelect = (index) => {
    setSelectedRows(prev => {
      const copy = [...prev];
      copy[index] = !copy[index];
      return copy;
    });
  };

  const handleSelectAll = () => {
    const newState = !selectAll;
    setSelectAll(newState);
    setSelectedRows(participants.map(() => newState));
  };

  return (
    <div className="space-y-6 max-w-[1440px] mx-auto text-stone-800 dark:text-stone-200">
      
      {/* Page Header Section */}
      <section className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div className="space-y-1">
          <nav className="flex items-center gap-1 text-xs font-semibold tracking-wider text-stone-500 uppercase">
            <span>HACKATHON 2024</span>
            <span className="material-symbols-outlined text-[14px] leading-none">chevron_right</span>
            <span>DIRECTORY</span>
          </nav>
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-white">Participants</h2>
          <p className="text-sm text-stone-500 dark:text-stone-400">Manage 842 registered hackers across 42 institutions.</p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button className="h-10 px-4 flex items-center gap-2 bg-stone-200 hover:bg-stone-300/80 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 rounded-xl text-sm font-semibold transition-colors">
            <span className="material-symbols-outlined text-[18px]">upload_file</span>
            Export CSV
          </button>
          <button className="h-10 px-4 flex items-center gap-2 bg-stone-900 hover:bg-stone-800 dark:bg-white dark:hover:bg-stone-100 text-white dark:text-stone-900 rounded-xl text-sm font-semibold shadow-sm transition-all">
            <span className="material-symbols-outlined text-[18px]">person_add</span>
            Add Participant
          </button>
        </div>
      </section>

      {/* Bento Grid Stats Card Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Registered", val: "842", meta: "+12% vs last week", icon: "person", iconBg: "bg-stone-200 text-stone-800" },
          { label: "Teamed Up", val: "775", meta: "92% confirmed", icon: "verified", iconBg: "bg-stone-200 text-stone-800" },
          { label: "Institutions", val: "42", meta: "Top: MIT", icon: "school", iconBg: "bg-stone-200 text-stone-800" },
          { label: "Days Left", val: "02", meta: "Closing in 2 days", icon: "schedule", iconBg: "bg-stone-200 text-stone-800" }
        ].map((card, i) => (
          <div key={i} className="bg-white dark:bg-stone-900 p-5 rounded-2xl border border-stone-200/60 dark:border-stone-800/80 flex flex-col justify-between min-h-[120px]">
            <div className="flex justify-between items-start">
              <div className={`w-8 h-8 rounded-lg ${card.iconBg} flex items-center justify-center`}>
                <span className="material-symbols-outlined text-[18px]">{card.icon}</span>
              </div>
              <span className="text-xs text-stone-500 font-medium">{card.meta}</span>
            </div>
            <div className="mt-2">
              <p className="text-xs font-semibold tracking-wide text-stone-500 uppercase">{card.label}</p>
              <h4 className="text-2xl font-bold text-stone-900 dark:text-white mt-0.5">{card.val}</h4>
            </div>
          </div>
        ))}
      </section>

      {/* Filter Management Context Layout */}
      <section className="bg-white dark:bg-stone-900 p-4 rounded-2xl border border-stone-200/60 dark:border-stone-800/80 space-y-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 border-b border-stone-100 dark:border-stone-800 pb-3">
          <div className="flex flex-wrap items-center gap-2">
            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 dark:bg-stone-800 border border-stone-300/40 rounded-xl text-xs font-semibold text-stone-700 dark:text-stone-300 hover:border-stone-400 transition-colors">
              <span className="material-symbols-outlined text-[16px]">filter_list</span>
              Filter By Role: All
              <span className="material-symbols-outlined text-[14px] ml-1 opacity-60">close</span>
            </button>
            <button className="flex items-center gap-1 px-3 py-1.5 bg-stone-50 dark:bg-stone-800/50 border border-stone-300/30 rounded-xl text-xs text-stone-600 dark:text-stone-400">
              University <span className="material-symbols-outlined text-[14px]">expand_more</span>
            </button>
            <button className="flex items-center gap-1 px-3 py-1.5 bg-stone-50 dark:bg-stone-800/50 border border-stone-300/30 rounded-xl text-xs text-stone-600 dark:text-stone-400">
              Status <span className="material-symbols-outlined text-[14px]">expand_more</span>
            </button>
          </div>
          <div className="flex items-center justify-between lg:justify-end gap-3 w-full lg:w-auto text-xs">
            <p className="font-medium text-stone-500">{selectedRows.filter(Boolean).length} selected</p>
            <div className="flex gap-2">
              <button className="h-8 px-3 flex items-center gap-1 border border-stone-900 dark:border-white rounded-lg font-semibold hover:bg-stone-50 dark:hover:bg-stone-800 transition-all">
                <span className="material-symbols-outlined text-[14px]">mail</span>
                Email Selected
              </button>
              <button className="h-8 px-3 flex items-center gap-1 border border-red-200 text-red-600 dark:text-red-400 rounded-lg font-semibold hover:bg-red-50 dark:hover:bg-red-950/20 transition-all">
                <span className="material-symbols-outlined text-[14px]">delete</span>
                Remove
              </button>
            </div>
          </div>
        </div>

        {/* Scaled Table Viewport */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-stone-200/60 dark:border-stone-800 text-stone-500 text-xs font-bold tracking-wider uppercase">
                <th className="p-3 w-10">
                  <input 
                    type="checkbox" 
                    checked={selectAll}
                    onChange={handleSelectAll}
                    className="w-4 h-4 rounded border-stone-300 dark:border-stone-700 bg-transparent text-stone-900 dark:text-white focus:ring-0 cursor-pointer"
                  />
                </th>
                <th className="p-3 text-[11px]">NAME</th>
                <th className="p-3 text-[11px]">UNIVERSITY</th>
                <th className="p-3 text-[11px] text-center">ROLE</th>
                <th className="p-3 text-[11px]">TEAM STATUS</th>
                <th className="p-3 text-[11px]">REGISTRATION</th>
                <th className="p-3 text-[11px] text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 dark:divide-stone-800/60">
              {participants.map((person, index) => (
                <tr 
                  key={person.id}
                  onClick={() => handleRowSelect(index)}
                  className={`transition-colors cursor-pointer text-sm ${selectedRows[index] ? 'bg-stone-100/60 dark:bg-stone-800/40' : 'hover:bg-stone-50/50 dark:hover:bg-stone-800/20'}`}
                >
                  <td className="p-3" onClick={(e) => e.stopPropagation()}>
                    <input 
                      type="checkbox" 
                      checked={selectedRows[index]}
                      onChange={() => handleRowSelect(index)}
                      className="w-4 h-4 rounded border-stone-300 dark:border-stone-700 bg-transparent text-stone-900 dark:text-white focus:ring-0 cursor-pointer"
                    />
                  </td>
                  <td className="p-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-stone-200 dark:bg-stone-800 flex items-center justify-center font-bold text-xs text-stone-800 dark:text-stone-200">
                        {person.initial}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-stone-900 dark:text-white leading-tight">{person.name}</span>
                        <span className="text-xs text-stone-400 dark:text-stone-500">{person.email}</span>
                      </div>
                    </div>
                  </td>
                  <td className="p-3 text-stone-600 dark:text-stone-300 font-medium">{person.university}</td>
                  <td className="p-3 text-center">
                    <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold tracking-wide uppercase ${person.roleColor}`}>
                      {person.role}
                    </span>
                  </td>
                  <td className="p-3">
                    <div className="flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${person.looking ? 'bg-stone-400' : 'bg-emerald-500'}`}></span>
                      <span className={`font-medium ${person.looking ? 'text-stone-500' : 'text-stone-800 dark:text-stone-200'}`}>
                        {person.team}
                      </span>
                    </div>
                  </td>
                  <td className="p-3 text-stone-500 dark:text-stone-400 text-xs">{person.date}</td>
                  <td className="p-3 text-right" onClick={(e) => e.stopPropagation()}>
                    <button className="text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-[18px]">more_vert</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table Footer Navigation Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-3 border-t border-stone-100 dark:border-stone-800 text-xs text-stone-500">
          <p>Showing <span className="font-bold text-stone-700 dark:text-stone-300">1-4</span> of <span className="font-bold text-stone-700 dark:text-stone-300">842</span> results</p>
          <div className="flex items-center gap-1">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-stone-200 dark:border-stone-800 hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors">
              <span className="material-symbols-outlined text-[16px]">chevron_left</span>
            </button>
            <button className="w-8 h-8 rounded-lg bg-stone-900 dark:bg-white text-white dark:text-stone-900 font-bold">1</button>
            <button className="w-8 h-8 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 font-medium">2</button>
            <button className="w-8 h-8 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 font-medium">3</button>
            <span className="px-1 opacity-50">...</span>
            <button className="w-8 h-8 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 font-medium">85</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-stone-200 dark:border-stone-800 hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors">
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            </button>
          </div>
        </div>
      </section>

      {/* Double Column Bottom Metrics Cards */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-white dark:bg-stone-900 rounded-2xl p-5 border border-stone-200/60 dark:border-stone-800/80 flex items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-base font-bold text-stone-900 dark:text-white">Institution Diversity</h3>
            <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed max-w-md">You have a diverse mix of participants this year. Top representing regions include North America and Western Europe.</p>
            <button className="text-xs font-bold text-stone-900 dark:text-white flex items-center gap-1 hover:underline pt-1">
              View geographic report
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </button>
          </div>
          <div className="relative w-20 h-20 flex-shrink-0">
            <svg className="w-full h-full transform -rotate-90">
              <circle className="text-stone-100 dark:text-stone-800" cx="40" cy="40" fill="transparent" r="34" stroke="currentColor" strokeWidth="6"></circle>
              <circle className="text-stone-900 dark:text-white" cx="40" cy="40" fill="transparent" r="34" stroke="currentColor" strokeDasharray="213.6" strokeDashoffset="53.4" strokeWidth="6" strokeLinecap="round"></circle>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-bold text-stone-900 dark:text-white">75%</span>
            </div>
          </div>
        </div>
        
        <div className="bg-stone-900 dark:bg-stone-950 text-white rounded-2xl p-5 space-y-3 relative overflow-hidden flex flex-col justify-between">
          <div className="space-y-2 relative z-10">
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white rounded text-[10px] font-bold tracking-widest uppercase">Growth</span>
            <h3 className="text-base font-bold">Team Formation</h3>
            <p className="text-xs text-stone-400 leading-relaxed">80% of participants have already formed or joined a team. Send a nudge to the remaining 167 users.</p>
          </div>
          <button className="w-full py-2 bg-white text-stone-950 font-bold rounded-xl text-xs hover:bg-stone-100 active:scale-[0.98] transition-all relative z-10">
            Bulk Message Reminders
          </button>
        </div>
      </section>
    </div>
  );
}