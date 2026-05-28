import React, { useState } from 'react';

export default function JudgesTab() {
  const [isFocused, setIsFocused] = useState(false);

  const judges = [
    {
      name: "Dr. Julianne Doe",
      role: "Senior Judge",
      roleColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300",
      title: "Lead AI Researcher at TechNexus",
      tags: ["Machine Learning", "FinTech", "Ethics"],
      teamsCount: 8,
      progress: 75,
      strokeOffset: 31.4, // 125.6 * (1 - 0.75)
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA21avcex6aL7XdOcT4S3YukSse_oVSBhKVdVKvO7qsaWORrlgIZZinGG8dJlNuGnzj69ruKhIkUhf5Un7TDE_F4lloH5zilCo5WOJNYgJ1bRB_O1uYshP7Cioh17NVACL8unB7d_V5xkGEsGqEsfzL7uZGptZ4sGV6n7tm1UpcYYjM_Xks1c0mdhL9v2rj-Y6o-1srhpbswJuAM25gYGgLa6vzXtHQ5wMy17Iwf3Rvq_NpbKrWdMPIsqDWvdnm-0LP5lsLcWIngp8"
    },
    {
      name: "Marcus Aurelius",
      role: "Mentor",
      roleColor: "bg-stone-100 text-stone-800 dark:bg-stone-800 dark:text-stone-300",
      title: "Founder of EcoStream Ventures",
      tags: ["Sustainability", "UX Design"],
      teamsCount: 5,
      progress: 20,
      strokeOffset: 100.48, // 125.6 * (1 - 0.20)
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNrcIgAPLUTpmNIrk1D9gYO1qO2_SuuKQ426I_oiYNTcD1J6-ervLvblF5LSY370ZAHINT3zM84s-kw0F3LsWfQyf55-82UsiNKbSc9EWH29uCo8Ml1n4IpAMUqB9rlEQTcqHKZmT_fnwHvSrqNS-oT1yNjXtbE0MSQbFCSAnohLiV7jAMATAyL26Rl_nP5AiGsnvy57VlQ4YuGbAZTveCOHklpkfCna0P12kYj-AOudJ9B0kAvUPb9Nw-3ojG6X8Zy36lTUAtMxY"
    },
    {
      name: "Sarah Smith",
      role: "Expert",
      roleColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300",
      title: "CTO at CloudBase Systems",
      tags: ["Scalability", "Cybersecurity", "AWS"],
      teamsCount: 12,
      progress: 100,
      strokeOffset: 0, // 125.6 * (1 - 1.0)
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAddDRXmdnS8KwLm0VMIl3slnktJBj0Tr-TIUjhaOVWyApwqGb-Zr2ECAUckJ0brdx2Ke9lCdw6fsfJ55cpLQL82d-KzXvT-HkQ_wkm8LTXerZIy0BonzmUeUxcDSiR0bjV0fV1q_qJqYn4gIHDLulpNmyKJgRofK_q9if6INbO49iLWGQWlNuYygt0T6OQvHAarhP2oRuk6ZhVgctXfvgIGaeOrug0GvZpaQnwqH2r_VobDsltc6csDgLWOrliGBkh0-QV8Rz0j_A"
    }
  ];

  return (
    <div className="space-y-6 max-w-[1440px] mx-auto text-stone-800 dark:text-stone-200">
      
      {/* 1. Header Toolbar Controls Component */}
      <section className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-stone-200/60 dark:border-stone-800/60 pb-4">
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-stone-400 text-[20px]">
            search
          </span>
          <input 
            type="text" 
            placeholder="Search judges..." 
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-stone-900 dark:focus:ring-white transition-all duration-300 ${
              isFocused ? 'w-80' : 'w-64'
            }`}
          />
        </div>
        <div className="flex items-center gap-2">
          <button className="material-symbols-outlined text-stone-500 hover:bg-stone-100 dark:hover:bg-stone-800 p-2 rounded-full transition-colors">
            notifications
          </button>
          <button className="material-symbols-outlined text-stone-500 hover:bg-stone-100 dark:hover:bg-stone-800 p-2 rounded-full transition-colors">
            help
          </button>
        </div>
      </section>

      {/* 2. Hero & Stat Indicators Bento Section */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="col-span-1 md:col-span-2 bg-stone-900 dark:bg-stone-950 p-6 rounded-2xl flex flex-col justify-between overflow-hidden relative group text-white">
          <div className="z-10 space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Judging Panel</h2>
            <p className="text-sm text-stone-400 max-w-sm leading-relaxed">
              Oversee evaluator assignments and track score sheet completion progress across all active hackathon tracks.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 z-10">
            <button className="bg-white hover:bg-stone-100 text-stone-900 px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all">
              <span className="material-symbols-outlined text-[18px]">person_add</span>
              Invite Judge
            </button>
            <button className="bg-stone-800 hover:bg-stone-700 text-stone-200 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all">
              Export Report
            </button>
          </div>
          <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all duration-700"></div>
        </div>

        <div className="bg-white dark:bg-stone-900 p-6 rounded-2xl border border-stone-200/60 dark:border-stone-800/80 flex flex-col justify-center space-y-2">
          <span className="text-xs font-semibold tracking-wide text-stone-500 uppercase">Active Judges</span>
          <div className="flex items-end gap-2">
            <span className="text-4xl font-bold tracking-tight text-stone-900 dark:text-white">24</span>
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-1">+2 this week</span>
          </div>
          <div className="w-full bg-stone-100 dark:bg-stone-800 h-1.5 rounded-full mt-2">
            <div className="bg-stone-900 dark:bg-white h-1.5 rounded-full w-3/4"></div>
          </div>
        </div>

        <div className="bg-white dark:bg-stone-900 p-6 rounded-2xl border border-stone-200/60 dark:border-stone-800/80 flex flex-col justify-center space-y-2">
          <span className="text-xs font-semibold tracking-wide text-stone-500 uppercase">Evaluation Progress</span>
          <div className="flex items-end gap-2">
            <span className="text-4xl font-bold tracking-tight text-stone-900 dark:text-white">68%</span>
            <span className="text-xs text-stone-400 mb-1">Avg. completion</span>
          </div>
          <div className="w-full bg-stone-100 dark:bg-stone-800 h-1.5 rounded-full mt-2">
            <div className="bg-emerald-600 dark:bg-emerald-500 h-1.5 rounded-full w-[68%]"></div>
          </div>
        </div>
      </section>

      {/* 3. Main Operational Board Grid Workspace */}
      <section className="grid grid-cols-12 gap-4">
        
        {/* Left Side: Roster Renders */}
        <div className="col-span-12 lg:col-span-8 space-y-4">
          <div className="flex justify-between items-center px-1">
            <h3 className="text-lg font-bold text-stone-900 dark:text-white">Expert Roster</h3>
            <div className="flex gap-2">
              <button className="flex items-center gap-1 text-xs font-bold text-stone-600 dark:text-stone-300 px-3 py-1.5 border border-stone-200 dark:border-stone-800 rounded-xl hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors">
                <span className="material-symbols-outlined text-[16px]">filter_list</span>
                Filter
              </button>
              <button className="flex items-center gap-1 text-xs font-bold text-stone-600 dark:text-stone-300 px-3 py-1.5 border border-stone-200 dark:border-stone-800 rounded-xl hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors">
                <span className="material-symbols-outlined text-[16px]">sort</span>
                Sort
              </button>
            </div>
          </div>

          <div className="space-y-3">
            {judges.map((judge, idx) => (
              <div 
                key={idx} 
                className="bg-white dark:bg-stone-900 p-5 rounded-2xl border border-stone-200/60 dark:border-stone-800/80 hover:shadow-md transition-all duration-300 flex flex-col md:flex-row gap-6 items-start md:items-center transform hover:-translate-y-1"
              >
                <img 
                  alt={judge.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-stone-100 dark:border-stone-800 bg-stone-100" 
                  src={judge.img}
                />
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <h4 className="text-base font-bold text-stone-900 dark:text-white">{judge.name}</h4>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase ${judge.roleColor}`}>
                      {judge.role}
                    </span>
                  </div>
                  <p className="text-sm text-stone-500 dark:text-stone-400">{judge.title}</p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {judge.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="bg-stone-100 dark:bg-stone-800/80 px-2 py-0.5 rounded text-xs font-medium text-stone-600 dark:text-stone-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-8 pr-2 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 border-stone-100 dark:border-stone-800/40 pt-3 md:pt-0">
                  <div className="text-center min-w-[50px]">
                    <span className="block text-xl font-bold text-stone-900 dark:text-white">{judge.teamsCount}</span>
                    <span className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider">Teams</span>
                  </div>
                  <div className="text-center flex flex-col items-center">
                    <div className="relative w-11 h-11 flex items-center justify-center">
                      <svg class="w-full h-full -rotate-90">
                        <circle className="text-stone-100 dark:text-stone-800" cx="22" cy="22" fill="transparent" r="18" stroke="currentColor" strokeWidth="3.5"></circle>
                        <circle className="text-stone-900 dark:text-white" cx="22" cy="22" fill="transparent" r="18" stroke="currentColor" strokeDasharray="113.1" stroke-dashoffset={113.1 * (1 - judge.progress / 100)} strokeWidth="3.5" strokeLinecap="round"></circle>
                      </svg>
                      <span className="absolute text-[10px] font-bold text-stone-800 dark:text-stone-200">{judge.progress}%</span>
                    </div>
                    <span className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider mt-1">Progress</span>
                  </div>
                  <button className="material-symbols-outlined text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 p-1.5 rounded-full hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors hidden md:block">
                    more_vert
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Invite Action & Availability Blocks */}
        <div className="col-span-12 lg:col-span-4 space-y-4">
          
          {/* Invite Section Form */}
          <section className="bg-stone-950 p-6 rounded-2xl text-white shadow-sm space-y-4">
            <div className="space-y-1">
              <h3 className="text-base font-bold text-white">Invite New Judge</h3>
              <p className="text-xs text-stone-400 leading-normal">Send a direct track invitation link to industry professional experts.</p>
            </div>
            
            <div className="space-y-3 pt-2">
              <div className="space-y-1">
                <label className="text-[10px] font-bold tracking-wider uppercase text-stone-400 block">Email Address</label>
                <input 
                  type="email" 
                  placeholder="expert@domain.com"
                  className="w-full bg-stone-900 border border-stone-800 rounded-xl py-2 px-3 text-sm text-white placeholder:text-stone-600 focus:outline-none focus:ring-2 focus:ring-stone-700 transition-all"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold tracking-wider uppercase text-stone-400 block">Expertise Track</label>
                <select className="w-full bg-stone-900 border border-stone-800 rounded-xl py-2 px-3 text-sm text-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-700 transition-all">
                  <option>AI & Data Science</option>
                  <option>FinTech Innovation</option>
                  <option>Sustainability</option>
                  <option>User Experience</option>
                </select>
              </div>
              <button className="w-full bg-white hover:bg-stone-100 text-stone-950 py-2.5 rounded-xl text-sm font-bold active:scale-[0.98] transition-all pt-2 mt-2">
                Send Invite
              </button>
            </div>
          </section>

          {/* Availability Summary Chart */}
          <section className="bg-white dark:bg-stone-900 p-6 rounded-2xl border border-stone-200/60 dark:border-stone-800/80 space-y-4">
            <h3 className="text-sm font-bold text-stone-900 dark:text-white uppercase tracking-wide">Availability Heatmap</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold text-stone-500">
                <span>Saturday (Final Pitch)</span>
                <span className="font-bold text-red-600 dark:text-red-400">High Load</span>
              </div>
              <div className="flex gap-1 h-2.5">
                <div className="flex-1 bg-stone-900 dark:bg-white rounded-full"></div>
                <div className="flex-1 bg-stone-900 dark:bg-white rounded-full"></div>
                <div className="flex-1 bg-stone-900 dark:bg-white rounded-full"></div>
                <div className="flex-1 bg-stone-900 dark:bg-white rounded-full"></div>
                <div className="flex-1 bg-stone-300 dark:bg-stone-700 rounded-full"></div>
                <div className="flex-1 bg-stone-100 dark:bg-stone-800 rounded-full"></div>
              </div>
            </div>
            
            <div className="pt-3 space-y-2.5 border-t border-stone-100 dark:border-stone-800/60 text-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-stone-900 dark:bg-white"></div>
                  <span className="text-xs font-medium text-stone-500">Assigned</span>
                </div>
                <span className="text-xs font-bold text-stone-900 dark:text-white">82%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-stone-300 dark:bg-stone-700"></div>
                  <span className="text-xs font-medium text-stone-500">Available Slots</span>
                </div>
                <span className="text-xs font-bold text-stone-900 dark:text-white">18%</span>
              </div>
            </div>
            <button className="w-full mt-4 pt-3 text-xs font-bold text-stone-900 dark:text-white border-t border-stone-100 dark:border-stone-800/60 hover:opacity-80 transition-opacity text-center block">
              Manage Shifts
            </button>
          </section>

        </div>
      </section>

      {/* Contextual Fixed FAB */}
      <button className="fixed bottom-6 right-6 w-12 h-12 bg-stone-900 dark:bg-white text-white dark:text-stone-900 rounded-full shadow-xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95 z-50">
        <span className="material-symbols-outlined text-[22px]">chat_bubble</span>
      </button>
    </div>
  );
}