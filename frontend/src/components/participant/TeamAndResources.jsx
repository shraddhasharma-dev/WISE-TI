import React from 'react';

export default function TeamAndResources() {
  const members = [
    { name: 'Marcus Thorne (You)', role: 'Full-stack Developer', online: true, initials: 'MT', ring: 'ring-[#c1ecd4]' },
    { name: 'Elena Rodriguez', role: 'Data Scientist', online: false, initials: 'ER', ring: 'ring-[#c1ebdf]' },
    { name: 'Samir Gupta', role: 'UI/UX Designer', online: true, initials: 'SG', ring: 'ring-[#c1ecd4]' },
  ];

  const resources = [
    { title: 'API Documentation', icon: 'menu_book', desc: 'Core endpoint schemas' },
    { title: 'Asset Package', icon: 'cloud_download', desc: 'Logos, design UI kits' },
    { title: 'CLI Toolchain', icon: 'terminal', desc: 'Testing & push scripts' },
    { title: 'Developer Support', icon: 'forum', desc: 'Direct access to TAs' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Team Structure List */}
      <div className="bg-[#cbe8eb] rounded-xl p-8 flex flex-col hover:shadow-xl hover:shadow-[#012d1d]/5 transition-all duration-300 shadow-sm">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl font-bold text-[#012d1d]">Team: Binary Bandits</h2>
            <p className="text-sm text-[#414844] mt-0.5">3 Active Members</p>
          </div>
          <button className="bg-[#012d1d] text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-[#012d1d]/90 transition-colors shadow-sm">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
            Find a Mentor
          </button>
        </div>

        <div className="space-y-6 flex-1 flex flex-col justify-center">
          {members.map((m, idx) => (
            <div key={idx} className="flex items-center gap-4 bg-[#eafdff]/50 p-3 rounded-lg border border-[#c1c8c2]/20">
              {/* Fallback Initials Avatar to prevent broken external URLs */}
              <div className={`w-12 h-12 rounded-full bg-[#012d1d] text-white font-bold text-sm flex items-center justify-center ring-2 ${m.ring}`}>
                {m.initials}
              </div>
              <div>
                <p className="text-sm font-bold text-[#031f22]">{m.name}</p>
                <p className="text-xs text-[#414844]">{m.role}</p>
              </div>
              <div className="ml-auto flex items-center gap-1.5 bg-[#eafdff] px-2 py-1 rounded-full border border-[#c1c8c2]/30">
                <span className={`w-2 h-2 rounded-full ${m.online ? 'bg-[#1b4332]' : 'bg-[#ba1a1a]'}`}></span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#031f22]">
                  {m.online ? 'Online' : 'Offline'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Resources Utilities Collection Grid */}
      <div className="bg-[#012d1d] rounded-xl p-8 flex flex-col text-white relative overflow-hidden shadow-sm justify-between">
        <div className="mb-6">
          <h2 className="text-xl font-bold flex items-center gap-3">
            <span className="material-symbols-outlined text-[#bee8dc]">construction</span>
            Essential Resources
          </h2>
          <p className="text-xs text-white/60 mt-1">Quick links to development tools and toolkits</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
          {resources.map((res, idx) => (
            <a 
              key={idx} 
              className="p-4 bg-white/5 rounded-lg hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200 flex items-start gap-3 group" 
              href="#"
            >
              <span className="material-symbols-outlined text-[#bee8dc] bg-white/5 p-2 rounded-lg group-hover:scale-105 transition-transform">
                {res.icon}
              </span>
              <div>
                <span className="text-sm font-semibold block group-hover:text-[#bee8dc] transition-colors">{res.title}</span>
                <span className="text-xs text-white/60 mt-0.5 block line-clamp-1">{res.desc}</span>
              </div>
            </a>
          ))}
        </div>

        {/* Decorative background watermark graphic */}
        <div className="absolute -bottom-8 -right-8 pointer-events-none opacity-5">
          <span className="material-symbols-outlined text-[180px]" style={{ fontVariationSettings: "'wght' 100" }}>
            token
          </span>
        </div>
      </div>
    </div>
  );
}