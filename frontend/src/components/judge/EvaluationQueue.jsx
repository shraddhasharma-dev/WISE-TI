import React from 'react';

export default function EvaluationQueue() {
  const teams = [
    { id: '#2049', name: 'Binary Bandits', scope: 'AI-Powered Security Tool', icon: 'terminal', iconBg: 'bg-[#bee8dc]', iconColor: 'text-[#436a60]', progress: true },
    { id: '#2103', name: 'Synth Scholars', scope: 'Personalized Learning', icon: 'school', iconBg: 'bg-[#d1edf1]', iconColor: 'text-[#012d1d]', progress: false },
    { id: '#1982', name: 'Aura Network', scope: 'Decentralized Storage', icon: 'cloud_queue', iconBg: 'bg-[#d1edf1]', iconColor: 'text-[#012d1d]', progress: false },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-[#cbe8eb]">
      <div className="p-8 border-b border-[#d6f3f7] flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-bold text-[#012d1d]">Evaluation Queue</h3>
          <p className="text-base text-[#414844] mt-1">Primary scoring dashboard for your assigned teams</p>
        </div>
        <div className="relative">
          <input 
            className="pl-10 pr-4 py-2 border border-[#c1c8c2] rounded-lg text-sm bg-[#eafdff] focus:ring-[#012d1d] focus:border-[#012d1d] outline-none" 
            placeholder="Search teams..." 
            type="text"
          />
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#414844] text-[20px]">search</span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#d6f3f7]/30">
              <th className="px-8 py-4 text-xs font-bold text-[#414844] uppercase tracking-wider">Team Name</th>
              <th className="px-8 py-4 text-xs font-bold text-[#414844] uppercase tracking-wider">Project Scope</th>
              <th className="px-8 py-4 text-xs font-bold text-[#414844] uppercase tracking-wider">Status</th>
              <th className="px-8 py-4 text-xs font-bold text-[#414844] uppercase tracking-wider text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#d6f3f7]">
            {teams.map((team) => (
              <tr key={team.id} className="hover:bg-[#d6f3f7]/20 transition-colors">
                <td className="px-8 py-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 ${team.iconBg} rounded-lg flex items-center justify-center`}>
                      <span className={`material-symbols-outlined ${team.iconColor}`}>{team.icon}</span>
                    </div>
                    <div>
                      <span className="block text-lg font-bold text-[#012d1d]">{team.name}</span>
                      <span className="text-xs text-[#414844]">Team ID: {team.id}</span>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6 text-base">{team.scope}</td>
                <td className="px-8 py-6">
                  {team.progress ? (
                    <span className="px-3 py-1 rounded-full bg-[#bee8dc] text-[#436a60] text-xs font-bold flex items-center w-fit gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#436a60] animate-pulse"></span>
                      In Progress
                    </span>
                  ) : (
                    <span className="px-3 py-1 rounded-full bg-[#cbe8eb] text-[#414844] text-xs font-bold flex items-center w-fit gap-1">
                      Pending
                    </span>
                  )}
                </td>
                <td className="px-8 py-6 text-right">
                  {team.progress ? (
                    <button className="px-6 py-2 bg-[#012d1d] text-white rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm">
                      Resume Scoring
                    </button>
                  ) : (
                    <button className="px-6 py-2 border border-[#012d1d] text-[#012d1d] rounded-lg text-sm font-semibold hover:bg-[#012d1d]/5 transition-colors">
                      Start Scoring
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="p-6 bg-[#d6f3f7]/10 flex justify-between items-center border-t border-[#d6f3f7]/40">
        <span className="text-xs font-semibold text-[#414844]">Showing 3 of 10 assigned teams</span>
        <button className="text-[#012d1d] text-sm font-bold hover:underline">View All Teams</button>
      </div>
    </div>
  );
}