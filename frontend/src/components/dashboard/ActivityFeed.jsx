const activities = [
  {
    title: "New Registration",
    desc: "Sarah Chen (MIT) finalized their participant profile.",
    time: "2 min ago",
  },
  {
    title: "Technical Sync",
    desc: 'Team "Echo Labs" synchronized repository.',
    time: "14 min ago",
  },
  {
    title: "Judge Assignment",
    desc: 'Dr. Turing assigned to "Quantum Coders".',
    time: "28 min ago",
  },
];

function ActivityFeed() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-[#1B4332]/10 p-6 h-[500px] overflow-y-auto">

      <h3 className="text-xs font-bold uppercase tracking-widest mb-8 flex items-center justify-between">

        Global Pulse

        <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>

      </h3>

      <div className="space-y-6">

        {activities.map((item, index) => (
          <div key={index} className="flex gap-4">

            <div className="w-4 h-4 rounded-full border-2 border-[#1B4332] mt-1"></div>

            <div>

              <p className="text-xs font-bold">
                {item.title}
              </p>

              <p className="text-[11px] text-gray-500 mt-1">
                {item.desc}
              </p>

              <span className="text-[9px] font-bold text-gray-400 uppercase block mt-2">
                {item.time}
              </span>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default ActivityFeed;