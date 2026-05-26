function WorkflowTracker() {
  return (
    <section className="bg-white rounded-xl shadow-sm border border-[#1B4332]/10 p-10">

      <div className="flex justify-between items-center mb-10">

        <h2 className="text-xl font-bold text-black flex items-center gap-3">

          <span className="material-symbols-outlined text-[#1B4332]">
            analytics
          </span>

          Multi-Phase Evaluation Pipeline

        </h2>

        <span className="bg-[#1B4332]/5 text-[#1B4332] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-[#1B4332]/20">
          Phase 3: Deep Review
        </span>

      </div>

      <div className="relative flex justify-between px-4">

        <div className="absolute top-6 left-10 right-10 h-[2px] bg-gray-200 -z-10"></div>

        <div className="absolute top-6 left-10 w-[45%] h-[2px] bg-[#1B4332] -z-10"></div>

        {/* Registration */}

        <div className="flex flex-col items-center gap-3">

          <div className="w-12 h-12 rounded-full bg-[#1B4332]/5 border-2 border-[#1B4332] text-[#1B4332] flex items-center justify-center">

            <span className="material-symbols-outlined">
              how_to_reg
            </span>

          </div>

          <span className="text-[10px] font-bold uppercase text-center">
            Registration
            <br />
            <span className="text-green-600">
              Complete
            </span>
          </span>

        </div>

        {/* Team Formation */}

        <div className="flex flex-col items-center gap-3">

          <div className="w-12 h-12 rounded-full bg-[#1B4332]/5 border-2 border-[#1B4332] text-[#1B4332] flex items-center justify-center">

            <span className="material-symbols-outlined">
              diversity_3
            </span>

          </div>

          <span className="text-[10px] font-bold uppercase text-center">
            Team
            <br />
            Formation
          </span>

        </div>

        {/* Round 1 */}

        <div className="flex flex-col items-center gap-3 scale-110">

          <div className="w-12 h-12 rounded-full bg-[#1B4332] text-white flex items-center justify-center shadow-lg">

            <span className="material-symbols-outlined">
              filter_1
            </span>

          </div>

          <span className="text-[10px] font-bold text-[#1B4332] uppercase text-center">
            Round 1
            <br />
            Evaluation
          </span>

        </div>

        {/* Round 2 */}

        <div className="flex flex-col items-center gap-3 opacity-60">

          <div className="w-12 h-12 rounded-full bg-white border border-gray-200 text-gray-500 flex items-center justify-center">

            <span className="material-symbols-outlined">
              filter_2
            </span>

          </div>

          <span className="text-[10px] font-bold text-gray-500 uppercase text-center">
            Round 2
            <br />
            Evaluation
          </span>

        </div>

        {/* Finals */}

        <div className="flex flex-col items-center gap-3 opacity-40">

          <div className="w-12 h-12 rounded-full bg-white border border-gray-200 text-gray-500 flex items-center justify-center">

            <span className="material-symbols-outlined">
              workspace_premium
            </span>

          </div>

          <span className="text-[10px] font-bold text-gray-500 uppercase text-center">
            Final
            <br />
            Evaluation
          </span>

        </div>

        {/* Grand Finale */}

        <div className="flex flex-col items-center gap-3 opacity-30">

          <div className="w-12 h-12 rounded-full bg-white border border-gray-200 text-gray-500 flex items-center justify-center">

            <span className="material-symbols-outlined">
              stars
            </span>

          </div>

          <span className="text-[10px] font-bold text-gray-500 uppercase text-center">
            Grand
            <br />
            Finale
          </span>

        </div>

      </div>

    </section>
  );
}

export default WorkflowTracker;