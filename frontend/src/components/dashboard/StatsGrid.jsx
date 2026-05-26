const stats = [
  {
    title: "Participants",
    value: "1,240",
    icon: "person_add",
    color: "text-[#1B4332]",
    bg: "bg-[#1B4332]/5",
    extra: "+12.5%",
  },
  {
    title: "Formed Teams",
    value: "310",
    icon: "groups",
    color: "text-[#1B4332]",
    bg: "bg-[#1B4332]/5",
    extra: "310 Cap",
  },
  {
    title: "Active Judges",
    value: "45",
    icon: "gavel",
    color: "text-[#1B4332]",
    bg: "bg-[#1B4332]/5",
    extra: "Full Capacity",
  },
  {
    title: "Pending Eval",
    value: "88",
    icon: "pending_actions",
    color: "text-red-600",
    bg: "bg-red-100",
    extra: "Priority",
  },
];

function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-sm border border-[#1B4332]/10 p-6 flex flex-col justify-between hover:shadow-md transition-all"
        >

          <div>

            <div className="flex justify-between items-start mb-4">

              <span
                className={`p-2 rounded-lg ${item.bg} ${item.color} material-symbols-outlined`}
              >
                {item.icon}
              </span>

              <span className="text-[10px] font-bold uppercase">
                {item.extra}
              </span>

            </div>

            <p className="text-xs font-bold text-gray-500 uppercase mb-1">
              {item.title}
            </p>

            <h3 className={`text-4xl font-bold tracking-tight ${item.color}`}>
              {item.value}
            </h3>

          </div>

          <div className="mt-4 h-1.5 bg-gray-100 rounded-full overflow-hidden">

            <div className="h-full bg-[#1B4332] w-3/4"></div>

          </div>

        </div>
      ))}

    </div>
  );
}

export default StatsGrid;