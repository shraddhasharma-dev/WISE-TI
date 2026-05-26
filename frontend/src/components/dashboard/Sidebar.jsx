function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-[280px] z-50 bg-[#1B4332] text-white flex flex-col py-6 gap-4 hidden md:flex">
      
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

      <nav className="flex-1 px-4 space-y-2">

        <button className="flex items-center gap-3 px-4 py-3 bg-white/10 border-l-4 border-[#c1ecd4] text-[#c1ecd4] rounded-lg w-full">
          <span className="material-symbols-outlined">
            dashboard
          </span>

          <span className="text-sm font-medium">
            Dashboard
          </span>
        </button>

        <button className="flex items-center gap-3 px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg w-full">
          <span className="material-symbols-outlined">
            groups
          </span>

          <span className="text-sm font-medium">
            Participants
          </span>
        </button>

        <button className="flex items-center gap-3 px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg w-full">
          <span className="material-symbols-outlined">
            diversity_3
          </span>

          <span className="text-sm font-medium">
            Teams
          </span>
        </button>

        <button className="flex items-center justify-between px-4 py-3 text-white/40 rounded-lg w-full">
          
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined opacity-50">
              gavel
            </span>

            <span className="text-sm font-medium">
              Judges
            </span>
          </div>

          <span className="material-symbols-outlined text-sm opacity-40">
            lock
          </span>

        </button>

        <button className="flex items-center justify-between px-4 py-3 text-white/40 rounded-lg w-full">
          
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined opacity-50">
              analytics
            </span>

            <span className="text-sm font-medium">
              Evaluations
            </span>
          </div>

          <span className="material-symbols-outlined text-sm opacity-40">
            lock
          </span>

        </button>

      </nav>

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

        <button className="w-full py-4 bg-[#c1ecd4] text-[#1B4332] font-bold rounded-xl hover:bg-white transition-all flex items-center justify-center gap-2">
          
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