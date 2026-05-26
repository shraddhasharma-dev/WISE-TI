function QuickActions() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">

      {/* Upload Card */}

      <div className="bg-white rounded-xl shadow-sm border border-[#1B4332]/10 p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:border-[#1B4332]/40 transition-all group">

        <div className="w-16 h-16 rounded-full bg-[#1B4332]/5 flex items-center justify-center text-[#1B4332] mb-6 transition-transform group-hover:scale-110">

          <span className="material-symbols-outlined text-3xl">
            upload_file
          </span>

        </div>

        <h4 className="font-bold text-black mb-2">
          Import Participants
        </h4>

        <p className="text-xs text-gray-500">
          CSV batch upload for registration management
        </p>

      </div>

      {/* AI Matchmaking */}

      <div className="bg-white rounded-xl shadow-sm border border-[#1B4332]/10 p-6">

        <div className="flex justify-between items-center mb-6">

          <h4 className="text-xs font-bold text-[#1B4332] uppercase tracking-widest flex items-center gap-2">

            <span className="material-symbols-outlined text-sm">
              psychology
            </span>

            AI Smart Matchmaking

          </h4>

          <button className="text-[10px] font-bold text-[#1B4332] hover:underline">
            RUN AUTO-DRAFT
          </button>

        </div>

        <div className="space-y-3">

          <div className="bg-[#F5F3F0] rounded-lg p-3 flex justify-between items-center border border-gray-200">

            <div>

              <p className="text-xs font-bold">
                Quantum Coders
              </p>

              <p className="text-[9px] text-gray-500 uppercase">
                Balanced Skills
              </p>

            </div>

            <span className="text-xs font-bold text-[#1B4332]">
              98% Match
            </span>

          </div>

          <div className="bg-[#F5F3F0] rounded-lg p-3 flex justify-between items-center border border-gray-200">

            <div>

              <p className="text-xs font-bold">
                Neural Knights
              </p>

              <p className="text-[9px] text-gray-500 uppercase">
                High Tech Compatibility
              </p>

            </div>

            <span className="text-xs font-bold text-[#1B4332]">
              94% Match
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}

export default QuickActions;