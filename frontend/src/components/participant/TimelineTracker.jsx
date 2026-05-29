import React from 'react';

export default function TimelineTracker({
  countdown,
  timeline
}) {
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
        
        <div className="relative flex justify-between gap-4">
  {timeline?.map((stage, index) => (
    <div
      key={index}
      className={`flex flex-col items-center flex-1 ${
        stage.status === 'pending'
          ? 'opacity-50'
          : ''
      }`}
    >
      <div
        className={`${
          stage.status === 'active'
            ? 'w-12 h-12 scale-110 shadow-lg'
            : 'w-10 h-10'
        }
        rounded-full
        flex items-center justify-center
        mb-4 z-10 ring-8 ring-[#dcf9fc]
        ${
          stage.status === 'completed' ||
          stage.status === 'active'
            ? 'bg-[#012d1d] text-white'
            : 'bg-[#cbe8eb] text-[#031f22]'
        }`}
      >
        <span
          className={`material-symbols-outlined ${
            stage.status === 'active'
              ? 'animate-spin'
              : ''
          }`}
          style={{
            animationDuration: '3s'
          }}
        >
          {stage.icon}
        </span>
      </div>

      <span
        className={`text-sm text-center ${
          stage.status === 'active'
            ? 'font-bold text-[#012d1d]'
            : 'font-medium text-[#031f22]'
        }`}
      >
        {stage.label}
      </span>

      <span className="text-xs mt-1 text-center text-[#414844]">
        {stage.status === 'active'
          ? 'In Progress'
          : stage.time}
      </span>
    </div>
  ))}
</div>
      </div>
    </div>
  );
}