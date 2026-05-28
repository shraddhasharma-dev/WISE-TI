import React, { useState } from 'react';

export default function EvaluationsTab() {
  const [activeRound, setActiveRound] = useState('Round 1');
  const [finalizedRows, setFinalizedRows] = useState({});
  const [loadingRows, setLoadingRows] = useState({});

  const highVarianceTeams = [
    { name: "QuantumScribe", delta: "3.2 pts" },
    { name: "EcoTrack AI", delta: "2.8 pts" },
    { name: "VisionMesh", delta: "2.6 pts" }
  ];

  const initialTableData = [
    { id: 1, rank: "#1", initial: "S", name: "Solaris Nexus", completed: "10/10", progressW: "w-full", score: "9.45", badge: "Top 5%", badgeClass: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300", lockable: true },
    { id: 2, rank: "#2", initial: "B", name: "BioSynth", completed: "8/10", progressW: "w-[80%]", score: "8.92", badge: "Strong", badgeClass: "bg-stone-100 text-stone-800 dark:bg-stone-800 dark:text-stone-300", lockable: false },
    { id: 3, rank: "#3", initial: "N", name: "NeuroStream", completed: "10/10", progressW: "w-full", score: "8.70", badge: "Qualified", badgeClass: "bg-stone-100 text-stone-800 dark:bg-stone-800 dark:text-stone-300", lockable: true }
  ];

  const [tableData, setTableData] = useState(initialTableData);

  const handleFinalizeRow = (id) => {
    setLoadingRows(prev => ({ ...prev, [id]: true }));
    
    setTimeout(() => {
      setLoadingRows(prev => ({ ...prev, [id]: false }));
      setFinalizedRows(prev => ({ ...prev, [id]: true }));
    }, 1500);
  };

  return (
    <div className="space-y-6 max-w-[1440px] mx-auto text-stone-800 dark:text-stone-200">
      
      {/* 1. Summary Metrics Strip */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-stone-900 p-5 rounded-2xl border border-stone-200/60 dark:border-stone-800/80 transition-transform duration-300 hover:-translate-y-1">
          <p className="text-xs font-semibold tracking-wider uppercase text-stone-500">Total Rounds</p>
          <div className="flex items-end justify-between mt-2">
            <span className="text-3xl font-bold tracking-tight text-stone-900 dark:text-white">04</span>
            <span className="text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300 px-2 py-0.5 rounded">Live</span>
          </div>
        </div>

        <div className="bg-white dark:bg-stone-900 p-5 rounded-2xl border border-stone-200/60 dark:border-stone-800/80 transition-transform duration-300 hover:-translate-y-1">
          <p className="text-xs font-semibold tracking-wider uppercase text-stone-500">Pending Scores</p>
          <div className="flex items-end justify-between mt-2">
            <span className="text-3xl font-bold tracking-tight text-stone-900 dark:text-white">128</span>
            <span className="text-xs font-medium text-stone-400">of 560</span>
          </div>
        </div>

        <div className="bg-white dark:bg-stone-900 p-5 rounded-2xl border border-stone-200/60 dark:border-stone-800/80 transition-transform duration-300 hover:-translate-y-1">
          <p className="text-xs font-semibold tracking-wider uppercase text-stone-500">Global Average</p>
          <div className="flex items-end justify-between mt-2">
            <span className="text-3xl font-bold tracking-tight text-stone-900 dark:text-white">7.82</span>
            <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400">trending_up</span>
          </div>
        </div>

        <div className="bg-white dark:bg-stone-900 p-5 rounded-2xl border-2 border-stone-900 dark:border-stone-100 transition-transform duration-300 hover:-translate-y-1">
          <p className="text-xs font-semibold tracking-wider uppercase text-stone-500">Finalized Teams</p>
          <div className="flex items-end justify-between mt-2">
            <span className="text-3xl font-bold tracking-tight text-stone-900 dark:text-white">42%</span>
            <div className="w-16 h-2 bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden mb-1.5">
              <div className="w-[42%] h-full bg-stone-900 dark:bg-white"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Bento Workspaces Grid */}
      <section className="grid grid-cols-12 gap-4">
        
        {/* Visual Score Distribution Chart Block */}
        <div className="col-span-12 lg:col-span-8 bg-white dark:bg-stone-900 p-6 rounded-2xl border border-stone-200/60 dark:border-stone-800/80 flex flex-col justify-between gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-stone-900 dark:text-white">Score Distribution</h3>
              <p className="text-sm text-stone-500 dark:text-stone-400">Performance spread across all 50 active teams</p>
            </div>
            <div className="flex bg-stone-100 dark:bg-stone-800/80 p-1 rounded-xl self-start sm:self-auto">
              {['Round 1', 'Round 2'].map((round) => (
                <button
                  key={round}
                  type="button"
                  onClick={() => setActiveRound(round)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeRound === round
                      ? 'bg-white dark:bg-stone-950 text-stone-900 dark:text-white shadow-sm'
                      : 'text-stone-500 hover:text-stone-900 dark:hover:text-stone-200'
                  }`}
                >
                  {round}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Distribution Histogram */}
          <div className="h-48 flex items-end gap-1.5 sm:gap-2 px-2 pt-4">
            <div className="flex-1 bg-stone-900/10 dark:bg-white/10 hover:bg-stone-900 dark:hover:bg-white transition-all rounded-t h-[20%] group relative cursor-pointer">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-stone-950 text-white text-[10px] font-bold px-2 py-1 rounded shadow-md pointer-events-none opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity duration-200">4.0 - 12 teams</div>
            </div>
            <div className="flex-1 bg-stone-900/20 dark:bg-white/20 hover:bg-stone-900 dark:hover:bg-white transition-all rounded-t h-[40%]"></div>
            <div className="flex-1 bg-stone-900/30 dark:bg-white/30 hover:bg-stone-900 dark:hover:bg-white transition-all rounded-t h-[65%]"></div>
            <div className="flex-1 bg-stone-900/50 dark:bg-white/50 hover:bg-stone-900 dark:hover:bg-white transition-all rounded-t h-[85%]"></div>
            <div className="flex-1 bg-stone-900 dark:bg-white hover:opacity-90 transition-all rounded-t h-[100%]"></div>
            <div className="flex-1 bg-stone-900/70 dark:bg-white/70 hover:bg-stone-900 dark:hover:bg-white transition-all rounded-t h-[75%]"></div>
            <div className="flex-1 bg-stone-900/40 dark:bg-white/40 hover:bg-stone-900 dark:hover:bg-white transition-all rounded-t h-[50%]"></div>
            <div className="flex-1 bg-stone-900/20 dark:bg-white/20 hover:bg-stone-900 dark:hover:bg-white transition-all rounded-t h-[30%]"></div>
            <div className="flex-1 bg-stone-900/10 dark:bg-white/10 hover:bg-stone-900 dark:hover:bg-white transition-all rounded-t h-[15%]"></div>
          </div>
          
          <div className="flex justify-between text-xs font-semibold text-stone-400 border-t border-stone-100 dark:border-stone-800/40 pt-4">
            <span>Low (0.0)</span>
            <span>Median (7.5)</span>
            <span>Outstanding (10.0)</span>
          </div>
        </div>

        {/* High Discrepancy Warnings Panel */}
        <div className="col-span-12 lg:col-span-4 bg-white dark:bg-stone-900 p-6 rounded-2xl border border-stone-200/60 dark:border-stone-800/80 flex flex-col justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
              <span className="material-symbols-outlined text-[22px]">warning</span>
              <h3 className="text-base font-bold text-stone-900 dark:text-white">High Variance</h3>
            </div>
            <p className="text-xs text-stone-500 dark:text-stone-400 leading-normal">
              Evaluations with score deltas &gt; 2.5 pts among judges panel.
            </p>
          </div>

          <div className="space-y-2 flex-1 my-2">
            {highVarianceTeams.map((team, index) => (
              <div 
                key={index} 
                className="p-3 bg-stone-50 dark:bg-stone-800/40 rounded-xl border border-stone-100 dark:border-stone-800/40 flex items-center justify-between hover:translate-x-1 transition-transform cursor-pointer"
              >
                <div>
                  <h4 className="text-sm font-bold text-stone-900 dark:text-stone-200">{team.name}</h4>
                  <p className="text-xs text-red-600 dark:text-red-400 font-bold mt-0.5">Δ {team.delta}</p>
                </div>
                <span className="material-symbols-outlined text-stone-400 text-[18px]">chevron_right</span>
              </div>
            ))}
          </div>

          <button className="w-full py-2.5 text-xs font-bold text-stone-900 dark:text-white border border-stone-200 dark:border-stone-800 rounded-xl hover:bg-stone-50 dark:hover:bg-stone-800/60 transition-all">
            Review Discrepancies
          </button>
        </div>
      </section>

      {/* 3. Operational Grid Roster Pipeline */}
      <section className="bg-white dark:bg-stone-900 p-6 rounded-2xl border border-stone-200/60 dark:border-stone-800/80">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-lg font-bold text-stone-900 dark:text-white">Round Finalization</h3>
            <p className="text-sm text-stone-500 dark:text-stone-400">Lock score submissions and promote premium tiers to final stage phases.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <img alt="Judge 1" className="w-7 h-7 rounded-full border-2 border-white dark:border-stone-900 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZTCsVpkAUq3fLWu4RJKVcr7FWHOcyYUjB3lHsMyMNBYML-l1eY5GUHWa6ttRqNADeqtPAoJRlIGwhvALmGoBxbMztcMp1b425cjoM8aGOcOGTcou0X5i9cgcLQWpHXBYhU7HeDCkXoUP4FnroqRbBjQuM6WSWFwwyl0b46qE8TJUrdAMzE7-fu2J7GrQn0FLXyJQJh_m_iKJo3yD8gMCVkF45z4yFw02zqTG6FuQZxlOXA2XwFOM2axkz4o0xdzu88NJeW3j-s74"/>
              <img alt="Judge 2" className="w-7 h-7 rounded-full border-2 border-white dark:border-stone-900 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvsCh2eJ8ehe3X3_DP1Zioy2S5u1VNB0dW-2dgb5rkmALqDNcOFEHnQsjKiR4hrBS2bKpWPujbA0mmJ39Bi9gRrrIWbjGjAzwvzp9MP0PZC0BUE7mdoUSarZdqf12FSg7ObxGxWBH9rrmN5Z-com5Zww5JXhF1qEJLuxnKCeW2U8WFn_1W5qdPUvPKEKAs-b7pd5ak_VY-Hytt-bGGps1fSRL2ut6v4wJVZCYt5GxYtb5Rn9AOqTfbxVKAwUS54mbNN1o7-zrhivM"/>
              <div className="w-7 h-7 rounded-full border-2 border-white dark:border-stone-900 bg-stone-950 text-white flex items-center justify-center text-[10px] font-bold">+8</div>
            </div>
            <span className="text-xs font-semibold text-stone-400">10 Active Panelist Judges</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-separate border-spacing-y-2">
            <thead>
              <tr className="text-left text-xs font-bold tracking-wider uppercase text-stone-400">
                <th className="pb-2 pl-4">Rank</th>
                <th className="pb-2">Team Name</th>
                <th className="pb-2">Judges Completed</th>
                <th className="pb-2">Avg Score</th>
                <th className="pb-2">Status</th>
                <th className="pb-2 pr-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => {
                const isProcessing = loadingRows[row.id];
                const isDone = finalizedRows[row.id];

                return (
                  <tr key={row.id} className="bg-stone-50 hover:bg-stone-100/70 dark:bg-stone-800/30 dark:hover:bg-stone-800/60 transition-colors group">
                    <td className="py-3 pl-4 rounded-l-xl text-sm font-bold text-stone-900 dark:text-white">{row.rank}</td>
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded bg-stone-900 dark:bg-stone-800 flex items-center justify-center text-white text-xs font-bold">
                          {row.initial}
                        </div>
                        <span className="text-sm font-semibold">{row.name}</span>
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-20 h-1.5 bg-stone-200 dark:bg-stone-800 rounded-full overflow-hidden">
                          <div className={`h-full bg-stone-900 dark:bg-white ${row.progressW}`}></div>
                        </div>
                        <span className="text-xs font-medium text-stone-500">{row.completed}</span>
                      </div>
                    </td>
                    <td className="py-3 text-sm font-bold text-stone-900 dark:text-white">{row.score}</td>
                    <td className="py-3">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase ${row.badgeClass}`}>
                        {row.badge}
                      </span>
                    </td>
                    <td className="py-3 pr-4 rounded-r-xl text-right">
                      {!row.lockable ? (
                        <span className="text-xs font-semibold text-stone-400 cursor-not-allowed">Awaiting Judges</span>
                      ) : isDone ? (
                        <span className="text-xs font-bold text-stone-400 inline-flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px] text-emerald-600 dark:text-emerald-400">check</span> 
                          Finalized
                        </span>
                      ) : (
                        <button
                          type="button"
                          onClick={() => handleFinalizeRow(row.id)}
                          disabled={isProcessing}
                          className="text-xs font-bold text-stone-900 dark:text-white hover:underline decoration-2 underline-offset-4 disabled:opacity-50 inline-flex items-center gap-1"
                        >
                          {isProcessing && <span className="material-symbols-outlined animate-spin text-[16px]">sync</span>}
                          {isProcessing ? 'Processing...' : 'Finalize Score'}
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. Global Stage Advancement Callout Action */}
      <section className="bg-stone-950 p-6 md:p-8 rounded-2xl relative overflow-hidden text-white">
        <div className="relative z-10 max-w-2xl space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Ready to move to Final Pitch?</h2>
          <p className="text-sm text-stone-400 leading-relaxed">
            Round 1 evaluations are 92% complete. Once finalized, the platform configuration engine will automatically notify the Top 12 metrics teams and activate the Pitch Deck submission portal pipelines.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <button className="bg-white hover:bg-stone-100 text-stone-950 px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition-transform active:scale-95 shadow-md">
              <span className="material-symbols-outlined text-[18px]">check_circle</span>
              Finalize Round 1
            </button>
            <button className="bg-stone-900 hover:bg-stone-850 border border-stone-800 text-stone-300 px-5 py-2.5 rounded-xl text-sm font-bold transition-all">
              Download Full Report (CSV)
            </button>
          </div>
        </div>
        {/* Abstract subtle visual layout lighting elements */}
        <div className="absolute right-[-10%] top-[-10%] w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute right-[5%] bottom-[-20%] w-72 h-72 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
      </section>

    </div>
  );
}