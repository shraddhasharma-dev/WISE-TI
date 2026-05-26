const teams = [
  {
    rank: 1,
    name: "Binary Bandits",
    project: "AI-Driven Waste Management",
    score: "98.4",
    status: "Qualifies",
  },
  {
    rank: 2,
    name: "Synth Scholars",
    project: "Decentralized Voting Engine",
    score: "96.1",
    status: "Reviewed",
  },
  {
    rank: 3,
    name: "Code Catalysts",
    project: "Smart Health Diagnostics",
    score: "94.7",
    status: "Pending",
  },
];

function LeaderboardTable() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-[#1B4332]/10 overflow-hidden">

      {/* Header */}

      <div className="p-6 flex justify-between items-center border-b border-gray-200">

        <h2 className="font-bold text-black">
          Live Competition Standings
        </h2>

        <div className="flex gap-3">

          <button className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-xs font-bold text-gray-600 hover:bg-gray-50 transition-all">
            Export
          </button>

          <button className="bg-[#1B4332] text-white px-4 py-2 rounded-lg text-xs font-bold hover:opacity-90 transition-all">
            Refresh
          </button>

        </div>

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="w-full text-left">

          <thead className="bg-[#F5F3F0] text-[10px] font-bold uppercase text-gray-500 tracking-widest">

            <tr>
              <th className="px-6 py-4">Rank</th>
              <th className="px-6 py-4">Team</th>
              <th className="px-6 py-4">Project</th>
              <th className="px-6 py-4">Phase 1 Score</th>
              <th className="px-6 py-4">Status</th>
            </tr>

          </thead>

          <tbody className="divide-y divide-gray-100">

            {teams.map((team) => (
              <tr
                key={team.rank}
                className="hover:bg-[#1B4332]/5 transition-all"
              >

                <td className="px-6 py-4">

                  <div className="w-8 h-8 rounded-full bg-[#1B4332]/5 flex items-center justify-center text-[#1B4332] font-bold text-xs border border-[#1B4332]/20">
                    {team.rank}
                  </div>

                </td>

                <td className="px-6 py-4 font-bold text-sm">
                  {team.name}
                </td>

                <td className="px-6 py-4 text-xs text-gray-500">
                  {team.project}
                </td>

                <td className="px-6 py-4 font-bold text-[#1B4332]">
                  {team.score}
                </td>

                <td className="px-6 py-4">

                  <span
                    className={`
                      text-[10px]
                      font-bold
                      uppercase
                      ${
                        team.status === "Qualifies"
                          ? "text-green-600"
                          : team.status === "Pending"
                          ? "text-orange-500"
                          : "text-gray-500"
                      }
                    `}
                  >
                    {team.status}
                  </span>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default LeaderboardTable;