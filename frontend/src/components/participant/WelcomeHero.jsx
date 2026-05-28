import React from 'react';

export default function WelcomeHero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Welcome Card banner */}
      <div className="lg:col-span-2 bg-[#1b4332] rounded-xl p-8 flex flex-col justify-between relative overflow-hidden group min-h-[280px] shadow-sm">
        <div className="relative z-10">
          <span className="text-sm font-semibold text-[#c1ecd4] uppercase tracking-widest mb-4 block">Current Status: Hacking</span>
          <h1 className="text-5xl font-bold text-[#eafdff] mb-4 leading-tight">Welcome back,<br />Binary Bandits!</h1>
          <p className="text-lg text-[#86af99] max-w-lg mb-8 opacity-95">Your "EcoTrack AI" project is shaping up beautifully. You've completed 65% of your core milestones.</p>
          <button className="bg-[#eafdff] text-[#012d1d] px-8 py-3 rounded-lg font-semibold hover:bg-white transition-all transform active:scale-95 flex items-center gap-3 shadow-md">
            <span className="material-symbols-outlined">upload_file</span>
            Submit Project
          </button>
        </div>
        <div className="absolute right-[-10%] bottom-[-20%] opacity-10 group-hover:scale-110 transition-transform duration-700">
          <span className="material-symbols-outlined text-[320px]" style={{ fontVariationSettings: "'wght' 200" }}>architecture</span>
        </div>
      </div>

      {/* Live Feed Component */}
      <div className="bg-[#d6f3f7] rounded-xl p-6 flex flex-col h-full border border-[#c1c8c2]/30 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-[#031f22] flex items-center gap-2">
            <span className="material-symbols-outlined text-[#012d1d]">campaign</span>
            Live Feed
          </h2>
          <span className="w-2 h-2 bg-[#ba1a1a] rounded-full animate-pulse"></span>
        </div>
        <div className="space-y-4 overflow-y-auto max-h-[180px] pr-2 custom-scrollbar">
          <div className="p-3 bg-[#eafdff] rounded-lg border-l-4 border-[#012d1d] shadow-sm">
            <p className="text-sm font-medium text-[#031f22] mb-1">Pizza arrived in the main hall!</p>
            <span className="text-xs text-[#414844]">2 mins ago</span>
          </div>
          <div className="p-3 bg-[#eafdff] rounded-lg border-l-4 border-[#c1ebdf] shadow-sm">
            <p className="text-sm font-medium text-[#031f22] mb-1">Mentor 'Sarah Chen' is now available for UI/UX review.</p>
            <span className="text-xs text-[#414844]">15 mins ago</span>
          </div>
          <div className="p-3 bg-[#eafdff] rounded-lg border-l-4 border-[#717973] shadow-sm">
            <p className="text-sm font-medium text-[#031f22] mb-1">Reminder: Round 1 Evaluation starts at 4:00 PM.</p>
            <span className="text-xs text-[#414844]">1 hour ago</span>
          </div>
        </div>
        <button className="mt-auto pt-4 text-[#012d1d] text-sm font-bold hover:underline text-left">View all announcements →</button>
      </div>
    </div>
  );
}