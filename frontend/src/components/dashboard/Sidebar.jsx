import React from "react";

function Sidebar({ activeTab, setActiveTab }) {
  // Config array for your sidebar items - Now completely unlocked
  const navigationItems = [
    { name: "Dashboard", icon: "dashboard", locked: false },
    { name: "Participants", icon: "groups", locked: false },
    { name: "Teams", icon: "diversity_3", locked: false },
    { name: "Judges", icon: "gavel", locked: false },
    { name: "Evaluations", icon: "analytics", locked: false },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-[280px] z-50 bg-[#1B4332] text-white flex flex-col py-6 gap-4 hidden md:flex">
      
      {/* Brand Header */}
      <div className="px-8 mb-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
            <span className="material-symbols-outlined text-[#c1ecd4]">
              terminal
            </span>
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight">
              Wise@TI
            </h1>
            <p className="text-[10px] uppercase tracking-widest text-[#c1ecd4] font-bold">
              Hackathon Engine
            </p>
          </div>
        </div>
      </div>

      {/* Dynamic Navigation System */}
      <nav className="flex-1 px-4 space-y-2">
        {navigationItems.map((item) => {
          const isActive = activeTab === item.name;

          // Render a disabled view state if locked
          if (item.locked) {
            return (
              <div 
                key={item.name} 
                className="flex items-center justify-between px-4 py-3 text-white/40 rounded-lg w-full cursor-not-allowed select-none"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined opacity-50">
                    {item.icon}
                  </span>
                  <span className="text-sm font-medium">
                    {item.name}
                  </span>
                </div>
                <span className="material-symbols-outlined text-sm opacity-40">
                  lock
                </span>
              </div>
            );
          }

          // Active/Inactive Interactive Buttons
          return (
            <button
              key={item.name}
              type="button"
              onClick={() => setActiveTab(item.name)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg w-full transition-all duration-150 text-left ${
                isActive
                  ? "bg-white/10 border-l-4 border-[#c1ecd4] text-[#c1ecd4] font-semibold"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              <span className="material-symbols-outlined">
                {item.icon}
              </span>
              <span className="text-sm font-medium">
                {item.name}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Sidebar Footer Widgets */}
      <div className="px-4 mt-auto">
        <div className="bg-white/5 rounded-xl p-4 mb-4 flex items-center gap-3 border border-white/10">
          <span className="material-symbols-outlined text-[#c1ecd4]">
            timer
          </span>
          <div>
            <p className="text-[10px] font-bold text-white/50 uppercase">
              Event Type
            </p>
            <p className="text-xs font-bold text-white">
              48-Hour Continuous
            </p>
          </div>
        </div>

        <button className="w-full py-4 bg-[#c1ecd4] text-[#1B4332] font-bold rounded-xl hover:bg-white transition-all flex items-center justify-center gap-2 shadow-sm active:scale-[0.99]">
          <span className="material-symbols-outlined">
            rocket_launch
          </span>
          Launch Hackathon
        </button>
      </div>

    </aside>
  );
}

export default Sidebar;