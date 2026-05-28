import React from 'react';

export default function TimelineTracker({ countdown }) {
  const pad = (num) => num.toString().padStart(2, '0');

  return (
    <div className="bg-[#dcf9fc] rounded-xl p-8 border border-[#c1c8c2]/20 shadow-sm">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="text-2xl font-bold text-[#012d1d] mb-1">Hackathon Timeline</h2>
          <p className="text-base text-[#414844]">Stay on track for the final presentation.</p>
        </div>
        <div className="text-right">
          <div className="text-4xl text-[#012d1d] font-bold tabular-nums">
            {pad(countdown.hours)}:{pad(countdown.minutes)}:{pad(countdown.seconds)}
          </div>
          <p className="text-xs text-[#414844] font-bold uppercase tracking-tighter mt-1">Hours Remaining</p>
        </div>
      </div>
      <div className="relative">
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-[#c1c8c2] -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-0 w-2/3 h-[2px] bg-[#012d1d] -translate-y-1/2"></div>
        
        <div className="relative flex justify-between">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[#012d1d] text-white flex items-center justify-center mb-4 z-10 ring-8 ring-[#dcf9fc]">
              <span className="material-symbols-outlined">check</span>
            </div>
            <span className="text-sm font-semibold text-[#012d1d]">Ideation</span>
            <span className="text-xs text-[#414844] mt-1">Fri 09:00</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[#012d1d] text-white flex items-center justify-center mb-4 z-10 ring-8 ring-[#dcf9fc]">
              <span className="material-symbols-outlined">check</span>
            </div>
            <span className="text-sm font-semibold text-[#012d1d]">Development Start</span>
            <span className="text-xs text-[#414844] mt-1">Fri 12:00</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#012d1d] text-white flex items-center justify-center mb-4 z-10 ring-8 ring-[#dcf9fc] scale-110 shadow-lg ring-offset-2 ring-[#012d1d]/20">
              <span className="material-symbols-outlined animate-spin" style={{ animationDuration: '3s' }}>sync</span>
            </div>
            <span className="text-sm font-bold text-[#012d1d]">Hacking Phase</span>
            <span className="text-xs text-[#012d1d] font-semibold mt-1">In Progress</span>
          </div>
          <div className="flex flex-col items-center opacity-50">
            <div className="w-10 h-10 rounded-full bg-[#cbe8eb] text-[#031f22] flex items-center justify-center mb-4 z-10 ring-8 ring-[#dcf9fc]">
              <span className="material-symbols-outlined">assignment</span>
            </div>
            <span className="text-sm font-medium text-[#031f22]">Round 1 Eval</span>
            <span className="text-xs text-[#414844] mt-1">Sat 16:00</span>
          </div>
          <div className="flex flex-col items-center opacity-50">
            <div className="w-10 h-10 rounded-full bg-[#cbe8eb] text-[#031f22] flex items-center justify-center mb-4 z-10 ring-8 ring-[#dcf9fc]">
              <span className="material-symbols-outlined">celebration</span>
            </div>
            <span className="text-sm font-medium text-[#031f22]">Final Demo</span>
            <span className="text-xs text-[#414844] mt-1">Sun 10:00</span>
          </div>
        </div>
      </div>
    </div>
  );
}