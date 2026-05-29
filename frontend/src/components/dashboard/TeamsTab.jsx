import React from 'react';
import {
  teamsApi,
  useApi,
} from "../../api";

export default function TeamsTab() {

  // API integration
  const {
    data,
    loading,
    error,
    refetch,
  } = useApi(teamsApi.getAll);

  // Dynamic backend teams
  const teams = (data?.teams || []).map((team) => ({
    id: String(team.id).padStart(2, "0"),

    name: team.name,

    score:
      team.members?.length < 3
        ? "Needs Review"
        : "Balanced",

    icon:
      team.members?.length < 3
        ? "warning"
        : "verified",

    badgeColor:
      team.members?.length < 3
        ? "bg-red-100 text-red-800 dark:bg-red-950/40 dark:text-red-300"
        : "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300",

    indicatorColor:
      team.members?.length < 3
        ? "bg-red-500"
        : "bg-emerald-600",

    desc:
      team.rationale ||
      "AI-generated team collaboration summary unavailable.",

    membersCount:
      team.members?.length < 3
        ? `Missing ${3 - team.members.length} Member`
        : `${team.members.length} Members`,

    tags:
      [...new Set(
        (team.members || []).map((m) => m.skill)
      )].slice(0, 3),

    members:
      (team.members || []).slice(0, 3).map((m) => ({
        name: m.name,
        initials: m.name
          ?.split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase(),
      })),

    hasExtra: team.members?.length > 3,

    extraText:
      team.members?.length > 3
        ? `+${team.members.length - 3}`
        : "",

    isAlert: team.members?.length < 3,
  }));

  if (loading) {
    return (
      <div className="p-8 text-lg font-semibold">
        Loading teams...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 text-red-500 font-semibold">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-[1440px] mx-auto text-stone-800 dark:text-stone-200">

      {/* Page Header Section */}
      <section className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">

        <div className="space-y-1">

          <nav className="flex items-center gap-1 text-xs font-semibold tracking-wider text-stone-500 uppercase">
            <span>HACKATHON 2024</span>

            <span className="material-symbols-outlined text-[14px] leading-none">
              chevron_right
            </span>

            <span>TEAMS</span>
          </nav>

          <h2 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-white">
            Teams Management
          </h2>

          <p className="text-sm text-stone-500 dark:text-stone-400">
            Optimize and oversee {teams.length} active teams.
          </p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">

          <button
            onClick={refetch}
            className="h-10 px-4 flex items-center gap-2 bg-stone-200 hover:bg-stone-300/80 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 rounded-xl text-sm font-semibold transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">
              refresh
            </span>

            Refresh
          </button>

          <button
            className="h-10 px-4 flex items-center gap-2 bg-stone-900 hover:bg-stone-800 dark:bg-white dark:hover:bg-stone-100 text-white dark:text-stone-900 rounded-xl text-sm font-semibold shadow-sm transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">
              add
            </span>

            Create Team
          </button>

        </div>
      </section>

      {/* Bento Grid Stats Card Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

        {[
          {
            label: "Total Teams",
            val: teams.length,
            meta: "Live team count",
            icon: "group_work",
            iconBg: "bg-stone-200 text-stone-800"
          },

          {
            label: "Avg. Balance Score",
            val:
              teams.length > 0
                ? `${(
                    teams.reduce(
                      (acc, t) => acc + (t.isAlert ? 6 : 9),
                      0
                    ) / teams.length
                  ).toFixed(1)}/10`
                : "0/10",

            meta: "AI estimated",
            icon: "insights",
            iconBg: "bg-stone-200 text-stone-800"
          },

          {
            label: "System Health",

            val: `${
              teams.length
                ? Math.round(
                    (
                      (teams.length -
                        teams.filter((t) => t.isAlert).length) /
                      teams.length
                    ) * 100
                  )
                : 0
            }%`,

            meta: `${
              teams.filter((t) => t.isAlert).length
            } teams need manual audit`,

            icon: "shield_with_heart",

            iconBg: "bg-stone-200 text-stone-800"
          },

          {
            label: "Unassigned Slots",

            val: teams.reduce((acc, t) => {
              if (t.isAlert) {
                return acc + 1;
              }
              return acc;
            }, 0),

            meta: "Teams needing members",

            icon: "person_add",

            iconBg: "bg-stone-200 text-stone-800"
          }

        ].map((card, i) => (

          <div
            key={i}
            className="bg-white dark:bg-stone-900 p-5 rounded-2xl border border-stone-200/60 dark:border-stone-800/80 flex flex-col justify-between min-h-[120px]"
          >

            <div className="flex justify-between items-start">

              <div className={`w-8 h-8 rounded-lg ${card.iconBg} flex items-center justify-center`}>

                <span className="material-symbols-outlined text-[18px]">
                  {card.icon}
                </span>

              </div>

              <span className="text-xs text-stone-500 font-medium text-right max-w-[120px]">
                {card.meta}
              </span>

            </div>

            <div className="mt-2">

              <p className="text-xs font-semibold tracking-wide text-stone-500 uppercase">
                {card.label}
              </p>

              <h4 className="text-2xl font-bold text-stone-900 dark:text-white mt-0.5">
                {card.val}
              </h4>

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

                    <span className="text-[10px] font-bold tracking-wider text-stone-400 dark:text-stone-500 uppercase">
                      TEAM {team.id}
                    </span>

                    <h3 className="text-lg font-bold text-stone-900 dark:text-white leading-snug">
                      {team.name}
                    </h3>

                  </div>

                  <div className={`px-2 py-0.5 rounded-full text-[11px] font-bold tracking-wide flex items-center gap-1 shrink-0 ${team.badgeColor}`}>

                    <span className="material-symbols-outlined text-[14px]">
                      {team.icon}
                    </span>

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

                      <div
                        key={mIdx}
                        className="w-8 h-8 rounded-full border-2 border-white dark:border-stone-900 bg-stone-200 dark:bg-stone-800 flex items-center justify-center text-[11px] font-bold text-stone-700 dark:text-stone-300"
                      >
                        {member.initials}
                      </div>

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

                  <span
                    key={tIdx}
                    className="bg-stone-100 dark:bg-stone-800 px-2 py-0.5 rounded text-xs font-medium text-stone-600 dark:text-stone-300"
                  >
                    {tag}
                  </span>

                ))}

              </div>

              {/* Row Management Callout Actions */}
              <div className="flex items-center gap-2 pt-2 border-t border-stone-100 dark:border-stone-800/60">

                <button
                  className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all active:scale-[0.98] ${
                    team.isAlert
                      ? 'bg-stone-900 dark:bg-white text-white dark:text-stone-900 hover:opacity-90'
                      : 'bg-stone-100 dark:bg-stone-800 hover:bg-stone-200/70 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200'
                  }`}
                >
                  {team.isAlert ? 'Fix Gaps' : 'Manage'}
                </button>

                <button
                  className="p-2 text-stone-400 hover:text-red-600 dark:hover:text-red-400 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    delete
                  </span>
                </button>

              </div>
            </div>
          </div>
        ))}

        {/* Dynamic Frame Addition Dashed Action Trigger Box */}
        <div className="bg-transparent rounded-2xl border-2 border-dashed border-stone-300/80 dark:border-stone-700 flex flex-col items-center justify-center p-6 text-center group hover:bg-white dark:hover:bg-stone-900 hover:border-stone-400 dark:hover:border-stone-500 transition-all cursor-pointer min-h-[310px]">

          <div className="w-12 h-12 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">

            <span className="material-symbols-outlined text-[24px]">
              add_circle
            </span>

          </div>

          <h3 className="text-sm font-bold text-stone-900 dark:text-white">
            Create Custom Team Frame
          </h3>

          <p className="text-xs text-stone-400 dark:text-stone-500 max-w-[200px] mt-1 leading-normal">
            Manually structure a clean sandbox canvas cluster for unassigned members.
          </p>

        </div>
      </section>
    </div>
  );
}