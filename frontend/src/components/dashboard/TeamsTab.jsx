import React from 'react';

export default function TeamsTab() {
  const teams = [
    {
      id: "08",
      name: "EcoPulse Pro",
      score: "9.2 Score",
      icon: "bolt",
      badgeColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300",
      indicatorColor: "bg-emerald-600",
      desc: "A regenerative energy monitoring platform for smart cities using IoT sensors.",
      membersCount: "4 Members",
      tags: ["React", "Python", "IoT"],
      members: [
        { name: "Member 1", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjtqmeZFFykv8PZ4iSzCmDBLo2AtvNmsCykEFrtrtFVnWf9IY-aRxMB9jlB6TAT57pHAOUpVfmuPRf5L14Np5oHlEJfwIkR-rL6mZfzmlG2hscZjheoZMyLITNYrBE5tGrG-8eJ1epFcIwHUmRPaGp8oYrXEtt6OaX2PDRrxhgVsSSvGu53DKhFdu-OL61d5TxYBN53w-0iAfED_P3a0ImBvXap_IzAtrOsAyJHSCsyAOd6iOoLmcoUCnBGVDkp8_oAHLf0iSBIRI" },
        { name: "Member 2", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcaan2qJo5POTMUzxUnn_flfKmce1S82vsLEqjjUAbnnXhwWuosqpbHhVPIDyqtvx30fWIW4I9LbgWWJpYPQG-1FgGE1CFjWD_B492Pq8B6r07UU3OwwdmYv86Bglmn6m-mM9JmoeROJr9E3F-MXGD4faJJOhvqdto8lDRByNr5Cr9-IxYjR7NL1yWlwbNkxJzyVEr4bhp62DzJsif7jbKLiw-EqlEmtauVDNFuhJCU23edTVBpYjkhwpj9budeBW4mbr2fRItuHk" },
        { name: "Member 3", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA74MR5E5CgAbYNcYYvPvOP5qUvSToY_ir2kEAjZtW8Jwdk_DmixYUgX8WZj39dw7LrlOnYRcO35AAVKufu5a0obJ8lmgDzc4HKqUdRFrAvHaKNaHf9mdUQ8jomHH7FoJw0olP3KCbuQv7YLjqXOp3ip9rfC8BicsMbyDG6yc3n2tnh6r0hmfiBG7fMFIIe78RJY8oYdQTiYdDmHr2ilrmLSXRfO5NJVuRdKAVUsPQFxAj5LKdQoISR1gv90HmZunKg4Io4sk0zql4" }
      ],
      hasExtra: true,
      extraText: "+1",
      isAlert: false
    },
    {
      id: "24",
      name: "HealthSync AI",
      score: "8.7 Score",
      icon: "trending_up",
      badgeColor: "bg-stone-100 text-stone-800 dark:bg-stone-800 dark:text-stone-300",
      indicatorColor: "bg-stone-700 dark:bg-stone-400",
      desc: "Predictive patient diagnostics leveraging federated learning across hospital networks.",
      membersCount: "3 Members",
      tags: ["TensorFlow", "Node.js"],
      members: [
        { name: "Member 1", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvUNpPRwM2BkMb5rrpgNer3AHskW9ETG-gWITBpDaxNRB_DyR1EduxU0FNmRDZtHiRJsAsg7WXacvZHPmt61jhhaTrvHQd0PnKySvefFzyNTS4AxR_CL8Zhn4Q23ZBvUUcmt79-zuc3ES3p_2n2jX0Ehlf-P_6O_ovSCqsplPuBL1Wbrda-wpEsJjSuXao64_m9QiSlbkT8tpJ-fIdMlC8C4I4Z6BeZlXD_mpWwQdFqyccVabq2-4RiJWAmz5YHPKk09SHlJqrqeE" },
        { name: "Member 2", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBI0m2UbFNAQNE0q46ThnVTv09P8nEXe7LXq1d67FYQIIGhoLh84573RNtsZuphy-BB_tC1rCz1FLsSzWt-ggRk7GbHubPcVRjmNzTLJEVNQZ0sz5K4MrD5Yrk-mGT2HB9DP6g6YoTeHDvWURi7AI54B-UsfgqgbVIqiEByOoefS2Lla11vyqkgsEard6r6W3ZBoHXdXtgguCb0eKuAAX7eEOOvWBzjPsQ9x8xHLRZaEtqTAUbwe8M4JY9G2yVP0-fL_aHzAXsZczA" },
        { name: "Member 3", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBiLtXIM3CXVcBZCcp10pSr9vtrXwnUxLHoZLVqfiK51pCPmUzxL9cB8kLygFbaukkBDmbqsbC5CSGBKcCNVi_GS9p-h6cD-noxBzGQVouwWPoI6rr8WvlyOi9XolG1-lJEsHWD-3MoQvUJdPgDRFL70p3tnU1gdXv2qbVGZO1pxIqgvdBhURFbHu90LFTLU4lxQbP2_bPhrlaaWsIlBnJ5r-JdI_ojNzbxHN9yFZHtfuU2q_7JDAuyg0eXVN83-X2j8mbhFDG0DUE" }
      ],
      hasExtra: false,
      isAlert: false
    },
    {
      id: "31",
      name: "SkySafe Drones",
      score: "4.2 Score",
      icon: "warning",
      badgeColor: "bg-red-100 text-red-800 dark:bg-red-950/40 dark:text-red-300",
      indicatorColor: "bg-red-500",
      desc: "Autonomous drone swarm for rapid post-disaster infrastructure assessment and mapping.",
      membersCount: "Missing Backend Dev",
      tags: ["C++", "ROS2"],
      members: [
        { name: "Member 1", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCE6UPqnzhuw5BDn6mk-alEEN3G41-16AAA9CAlfd3WcKJ7Wzl5D16qwgpoV3Ao4SSq441zLYhluY3Bv6EBdwD7t2THWbUDbx9TN2TAclSAIHxFEL9WiwbNvk4WTPKPErJFdCwuDFpYhtBh6wuX-cyGghts0soHHVj3nTsw-6bun-4qjXIYfN36WIxCSs8Ck8wioKtM75fwnGfYnRgybCTdapKTYgcywi-Nxa8_uX72YpqBy4MkTe1nOgQsr9nsjLMxOWwf1p8BFl8" },
        { name: "Member 2", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBy1lGCj0aLMPg1WddJv2k3q6BnTjXP8nhsUG2OQoN1tx0ELW9EDrO6-8_Em8tFhEuxkxzBq4vC0plWIdPgNBNAnyev_UlyLhHCls-Jr4NKcsHcuktG93C0jL0mU9NiTuuiPC4Rc3WFjA-c0l-doonupVRTjDjwUGJwi0bBVlySqulabgCzHM9k_y9dwnwPPhZTJnQoKWoE8mNNHfYD3kXpZzmTLrWGhoduqBvNDsk-012JLlF2_ZkfmQx1xo6B337axx3Gcj54bO8" }
      ],
      hasExtra: false,
      isAlert: true
    },
    {
      id: "12",
      name: "CarbonTrack",
      score: "9.8 Score",
      icon: "verified",
      badgeColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300",
      indicatorColor: "bg-emerald-600",
      desc: "Real-time supply chain transparency using blockchain for verified carbon offsets.",
      membersCount: "5 Members",
      tags: ["Solidity", "Go"],
      members: [
        { name: "Member 1", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAh-CKQw-4Sz6fqlcIfTdz1AsYz_N56YAXFYoKyf_1X4Yzl2vVKF2F3_Gdb614DxLAnHXPeHhmRqkmSAs_z-xWrocTi5hP5pMqENAtkyLRJBJcVbiZW2eEPcCL_nb7jwG4elqgR5MWXgtW4mWsz5A9dBvwmfXGVrgl_9hX88h2LKH5qG3n_Esl9iqDkCiXKMVIYd7mk4ztyAHdBssC9IjkVcW4pn5btQEZoBGo8WbRD1zh6WQ9dYvjICszihP0ODlMpGGyZYDDZ3NY" },
        { name: "Member 2", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBA8qyHKCVvgmU0IwE88wSzoz43zKQ2sRM3A_fE0J9YqO5ty4WquUzbqAJuTVZfR8TY1WzipG2N5Lw0d9ywWPix8DnlzdGhHbJ0x7eLWQKU0vzlndOcnwYzmEuV8kN94ujckpEqum75Z_qZiv10jOG-yajgPqbVJdWVUvTWTCbN7kRlvWB73iNmdpkhR-3xnZP3gFtvTrNS8s69O3zz1R7qdKy2BtZsZ5NoUOxnE92laxVqQxdbnC5a7hC52CPuFpltzbjYSyy5wA0" },
        { name: "Member 3", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCy4y7QmR_lzTEFgWbp5FdPZGpOabjt-CcwZ22xYDf-bzclWXy6ZZim0IyJlNJnSUsjReo1riZUxIcFXaH8uoH8eAE3XFl4WpTaqi39sYtd087SytG5hH5xgXsMjjbT6ddt8Y4Jib8FMou-JGJ1bYBNzkNv9ohxtkJTANoa3EDZpNgph2UCDQehgxQC6u9nxui3JxHE6D_uiDx_pyqBgC05GJKCAaQSPDrZ0uEt4xO5tYDs5X9f-ABsj-rfnCIJS2jsw5tPFhvlEhk" }
      ],
      hasExtra: false,
      isAlert: false
    },
    {
      id: "05",
      name: "UrbanYield",
      score: "8.1 Score",
      icon: "auto_fix_high",
      badgeColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300",
      indicatorColor: "bg-emerald-600",
      desc: "Modular vertical farming kits with automated nutrient balancing through computer vision.",
      membersCount: "2 Members",
      tags: ["SwiftUI", "PyTorch"],
      members: [
        { name: "Member 1", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzrIUk-_9d2YkO48X8Vd9vwCayJNVGpsJwqn-5cMBSVD1tkGlhUFx72y4lCIZdxpKz4KOC619zvfbUO8vNGRLQj0l0lY9Rsz_dcnLBDo0l1y2WiN-phaGukCV7mt5iDrVnXOsT1NWDRGCWBq334mvUJhAmeVpVMocWLfEiYK8TOp05dsTW9xhzF6ocI0QFXRM1iQl1zRKB8X9DGST12lQMK69eCPtFnwMeOeKLLXK1Kj6tMRpTPITaPWlF6Nq4mqu22jkCBhv2_lQ" },
        { name: "Member 2", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSLhvngephvRAcUBl0cO_NEkDIN5j3eat-6OZn2kUBsVHhmvqVACjO2n8eg2qUggtTgLw2dexg9KwJ-_RDV1e2QlRjrJZdznssdu2XsoAXDQE0GEbnZYlDJTAcPQOMk8rdIdvlngYn0c3k3NIkLRHyRj5dxf3TaO-AnZdkw3vzZGvEGU-UUbacIGzaPGunmAYg5t3lC-z6-8wPPRsxo0-tmAdBTVoDaeVviDDpCNtbdeMrLCrkt6Ia8W68E6xNRw0JRudSnK_AlQI" }
      ],
      hasExtra: false,
      isAlert: false
    }
  ];

  return (
    <div className="space-y-6 max-w-[1440px] mx-auto text-stone-800 dark:text-stone-200">
      
      {/* Page Header Section */}
      <section className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div className="space-y-1">
          <nav className="flex items-center gap-1 text-xs font-semibold tracking-wider text-stone-500 uppercase">
            <span>HACKATHON 2024</span>
            <span className="material-symbols-outlined text-[14px] leading-none">chevron_right</span>
            <span>TEAMS</span>
          </nav>
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-white">Teams Management</h2>
          <p className="text-sm text-stone-500 dark:text-stone-400">Optimize and oversee 42 active teams in the 2024 Innovate Summit.</p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button className="h-10 px-4 flex items-center gap-2 bg-stone-200 hover:bg-stone-300/80 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 rounded-xl text-sm font-semibold transition-colors">
            <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
            Run AI Balancer
          </button>
          <button className="h-10 px-4 flex items-center gap-2 bg-stone-900 hover:bg-stone-800 dark:bg-white dark:hover:bg-stone-100 text-white dark:text-stone-900 rounded-xl text-sm font-semibold shadow-sm transition-all">
            <span className="material-symbols-outlined text-[18px]">add</span>
            Create Team
          </button>
        </div>
      </section>

      {/* Bento Grid Stats Card Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Teams", val: "42", meta: "100% capacity", icon: "group_work", iconBg: "bg-stone-200 text-stone-800" },
          { label: "Avg. Balance Score", val: "8.4/10", meta: "Highly Optimized", icon: "insights", iconBg: "bg-stone-200 text-stone-800" },
          { label: "System Health", val: "92%", meta: "3 teams need manual audit", icon: "shield_with_heart", iconBg: "bg-stone-200 text-stone-800" }
        ].map((card, i) => (
          <div 
            key={i} 
            className={`bg-white dark:bg-stone-900 p-5 rounded-2xl border border-stone-200/60 dark:border-stone-800/80 flex flex-col justify-between min-h-[120px] ${
              i === 2 ? 'sm:col-span-2' : 'sm:col-span-1'
            }`}
          >
            <div className="flex justify-between items-start">
              <div className={`w-8 h-8 rounded-lg ${card.iconBg} flex items-center justify-center`}>
                <span className="material-symbols-outlined text-[18px]">{card.icon}</span>
              </div>
              <span className="text-xs text-stone-500 font-medium">{card.meta}</span>
            </div>
            <div className="mt-2">
              <p className="text-xs font-semibold tracking-wide text-stone-500 uppercase">{card.label}</p>
              <h4 className="text-2xl font-bold text-stone-900 dark:text-white mt-0.5">{card.val}</h4>
            </div>
          </div>
        ))}
      </section>

      {/* Dynamic Grid Layout for Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {teams.map((team, idx) => (
          <div 
            key={idx} 
            className={`bg-white dark:bg-stone-900 rounded-2xl overflow-hidden flex flex-col justify-between border transition-all duration-300 hover:shadow-lg hover:shadow-stone-200/40 dark:hover:shadow-none ${
              team.isAlert 
                ? 'border-red-200 dark:border-red-950' 
                : 'border-stone-200/60 dark:border-stone-800/80'
            }`}
          >
            {/* Top Indicator Strip */}
            <div className={`h-1.5 w-full ${team.indicatorColor}`}></div>
            
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div>
                {/* Card Title Header */}
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <span className="text-[10px] font-bold tracking-wider text-stone-400 dark:text-stone-500 uppercase">TEAM {team.id}</span>
                    <h3 className="text-lg font-bold text-stone-900 dark:text-white leading-snug">{team.name}</h3>
                  </div>
                  <div className={`px-2 py-0.5 rounded-full text-[11px] font-bold tracking-wide flex items-center gap-1 shrink-0 ${team.badgeColor}`}>
                    <span className="material-symbols-outlined text-[14px]">{team.icon}</span>
                    {team.score}
                  </div>
                </div>

                {/* Team Purpose Description */}
                <p className="text-sm text-stone-500 dark:text-stone-400 mt-2 line-clamp-2 leading-relaxed">
                  {team.desc}
                </p>
              </div>

              {/* Members Row Context Box */}
              <div className={`flex flex-col gap-2 rounded-xl ${team.isAlert ? 'p-3 bg-red-50/50 dark:bg-red-950/10' : ''}`}>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2 overflow-hidden">
                    {team.members.map((member, mIdx) => (
                      <img 
                        key={mIdx}
                        src={member.src} 
                        alt={member.name}
                        className="w-8 h-8 rounded-full border-2 border-white dark:border-stone-900 object-cover bg-stone-100"
                      />
                    ))}
                    {team.hasExtra && (
                      <div className="w-8 h-8 rounded-full bg-stone-100 dark:bg-stone-800 border-2 border-white dark:border-stone-900 flex items-center justify-center text-[11px] font-bold text-stone-600 dark:text-stone-400">
                        {team.extraText}
                      </div>
                    )}
                  </div>
                  <span className={`text-xs font-semibold ${team.isAlert ? 'text-red-600 dark:text-red-400' : 'text-stone-500 dark:text-stone-400'}`}>
                    {team.membersCount}
                  </span>
                </div>
              </div>

              {/* Stack Framework Meta Tags */}
              <div className="flex flex-wrap gap-1.5">
                {team.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="bg-stone-100 dark:bg-stone-800 px-2 py-0.5 rounded text-xs font-medium text-stone-600 dark:text-stone-300">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Row Management Callout Actions */}
              <div className="flex items-center gap-2 pt-2 border-t border-stone-100 dark:border-stone-800/60">
                <button className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all active:scale-[0.98] ${
                  team.isAlert 
                    ? 'bg-stone-900 dark:bg-white text-white dark:text-stone-900 hover:opacity-90' 
                    : 'bg-stone-100 dark:bg-stone-800 hover:bg-stone-200/70 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200'
                }`}>
                  {team.isAlert ? 'Fix Gaps' : 'Reassign'}
                </button>
                <button className="p-2 text-stone-400 hover:text-red-600 dark:hover:text-red-400 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors">
                  <span className="material-symbols-outlined text-[18px]">delete</span>
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Dynamic Frame Addition Dashed Action Trigger Box */}
        <div className="bg-transparent rounded-2xl border-2 border-dashed border-stone-300/80 dark:border-stone-700 flex flex-col items-center justify-center p-6 text-center group hover:bg-white dark:hover:bg-stone-900 hover:border-stone-400 dark:hover:border-stone-500 transition-all cursor-pointer min-h-[310px]">
          <div className="w-12 h-12 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-[24px]">add_circle</span>
          </div>
          <h3 className="text-sm font-bold text-stone-900 dark:text-white">Create Custom Team Frame</h3>
          <p className="text-xs text-stone-400 dark:text-stone-500 max-w-[200px] mt-1 leading-normal">Manually structure a clean sandbox canvas cluster for unassigned members.</p>
        </div>
      </section>
    </div>
  );
}