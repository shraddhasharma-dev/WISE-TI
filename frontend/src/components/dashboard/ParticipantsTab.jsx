import React, { useState, useEffect } from 'react';
import {
  participantsApi,
  useApi,
} from "../../api";

export default function ParticipantsTab() {

  // API integration
  const {
    data,
    loading,
    error,
    refetch,
  } = useApi(participantsApi.getAll);

  // Dynamic backend participants
  const participants = (data?.participants || []).map((p, index) => ({
    id: p.id,
    name: p.name,
    email: p.email,
    initial: p.name
      ?.split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase(),
    university: p.institution || "Unknown Institution",
    role: p.skill || "GENERAL",
    roleColor:
      "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300",
    team: p.team_status,
looking: p.looking,
    date: "Recently Added",
  }));
  const [selectedRows, setSelectedRows] = useState([]);

const [selectAll, setSelectAll] = useState(false);

useEffect(() => {
  setSelectedRows(participants.map(() => false));
}, [participants.length]);

  const handleRowSelect = (index) => {
    setSelectedRows((prev) => {
      const copy = [...prev];
      copy[index] = !copy[index];
      return copy;
    });
  };

  const handleSelectAll = () => {
    const newState = !selectAll;
    setSelectAll(newState);
    setSelectedRows(participants.map(() => newState));
  };

  if (loading) {
    return (
      <div className="p-8 text-lg font-semibold">
        Loading participants...
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
            <span>DIRECTORY</span>
          </nav>

          <h2 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-white">
            Participants
          </h2>

          <p className="text-sm text-stone-500 dark:text-stone-400">
            Manage registered hackers across institutions.
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
  onClick={async () => {
    const name = prompt("Participant name:");
    if (!name) return;

    const email = prompt("Participant email:");
    if (!email) return;

    const skill = prompt("Participant skill:");
    if (!skill) return;

    const institution = prompt("Institution:");
    if (!institution) return;

    try {
      await participantsApi.add({
        name,
        email,
        skill,
        institution,
      });

      await refetch();

      alert("Participant added successfully!");

    } catch (err) {
      console.error(err);
      alert("Failed to add participant");
    }
  }}
  className="h-10 px-4 flex items-center gap-2 bg-stone-900 hover:bg-stone-800 dark:bg-white dark:hover:bg-stone-100 text-white dark:text-stone-900 rounded-xl text-sm font-semibold shadow-sm transition-all"
>
  <span className="material-symbols-outlined text-[18px]">
    person_add
  </span>

  Add Participant
</button>
        </div>
      </section>

      {/* Bento Grid Stats Card Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            label: "Total Registered",
            val: participants.length,
            meta: "Live database count",
            icon: "person",
            iconBg: "bg-stone-200 text-stone-800"
          },
          
            {
  label: "Teamed Up",
  val: participants.filter((p) => !p.looking).length,
  meta: "Participants already assigned",
  icon: "verified",
  iconBg: "bg-stone-200 text-stone-800"
},
          
          {
            label: "Institutions",
            val: new Set(participants.map(p => p.university)).size,
            meta: "Connected institutions",
            icon: "school",
            iconBg: "bg-stone-200 text-stone-800"
          },
          {
            label: "Days Left",
            val: "02",
            meta: "Closing in 2 days",
            icon: "schedule",
            iconBg: "bg-stone-200 text-stone-800"
          }
        ].map((card, i) => (
          <div
            key={i}
            className="bg-white dark:bg-stone-900 p-5 rounded-2xl border border-stone-200/60 dark:border-stone-800/80 flex flex-col justify-between min-h-[120px]"
          >
            <div className="flex justify-between items-start min-h-[48px] gap-3">
              <div className={`w-8 h-8 rounded-lg ${card.iconBg} flex items-center justify-center`}>
                <span className="material-symbols-outlined text-[18px]">
                  {card.icon}
                </span>
              </div>
              <div className="text-xs text-stone-500 font-medium text-right leading-tight w-[120px]">
  {card.meta}
</div>
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

      {/* Filter Management Context Layout */}
      <section className="bg-white dark:bg-stone-900 p-4 rounded-2xl border border-stone-200/60 dark:border-stone-800/80 space-y-4">

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 border-b border-stone-100 dark:border-stone-800 pb-3">

          <div className="flex flex-wrap items-center gap-2">

            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 dark:bg-stone-800 border border-stone-300/40 rounded-xl text-xs font-semibold text-stone-700 dark:text-stone-300 hover:border-stone-400 transition-colors">
              <span className="material-symbols-outlined text-[16px]">
                filter_list
              </span>
              Filter By Role: All
            </button>

          </div>

          <div className="flex items-center justify-between lg:justify-end gap-3 w-full lg:w-auto text-xs">

            <p className="font-medium text-stone-500">
              {selectedRows.filter(Boolean).length} selected
            </p>

          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">

          <table className="w-full text-left border-collapse min-w-[800px]">

            <thead>
              <tr className="border-b border-stone-200/60 dark:border-stone-800 text-stone-500 text-xs font-bold tracking-wider uppercase">

                <th className="p-3 w-10">
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAll}
                    className="w-4 h-4"
                  />
                </th>

                <th className="p-3 text-[11px]">NAME</th>
                <th className="p-3 text-[11px]">UNIVERSITY</th>
                <th className="p-3 text-[11px] text-center">ROLE</th>
                <th className="p-3 text-[11px]">TEAM STATUS</th>
                <th className="p-3 text-[11px]">REGISTRATION</th>
                <th className="p-3 text-[11px] text-right">ACTIONS</th>

              </tr>
            </thead>

            <tbody className="divide-y divide-stone-100 dark:divide-stone-800/60">

              {participants.map((person, index) => (

                <tr
                  key={person.id}
                  className={`transition-colors text-sm ${
                    selectedRows[index]
                      ? 'bg-stone-100/60 dark:bg-stone-800/40'
                      : 'hover:bg-stone-50/50 dark:hover:bg-stone-800/20'
                  }`}
                >

                  <td className="p-3">
                    <input
                      type="checkbox"
                      checked={selectedRows[index]}
                      onChange={() => handleRowSelect(index)}
                      className="w-4 h-4"
                    />
                  </td>

                  <td className="p-3">
                    <div className="flex items-center gap-3">

                      <div className="w-8 h-8 rounded-full bg-stone-200 dark:bg-stone-800 flex items-center justify-center font-bold text-xs text-stone-800 dark:text-stone-200">
                        {person.initial}
                      </div>

                      <div className="flex flex-col">

                        <span className="font-bold text-stone-900 dark:text-white leading-tight">
                          {person.name}
                        </span>

                        <span className="text-xs text-stone-400 dark:text-stone-500">
                          {person.email}
                        </span>

                      </div>
                    </div>
                  </td>

                  <td className="p-3 text-stone-600 dark:text-stone-300 font-medium">
                    {person.university}
                  </td>

                  <td className="p-3 text-center">
                    <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold tracking-wide uppercase ${person.roleColor}`}>
                      {person.role}
                    </span>
                  </td>

                  <td className="p-3">
                    <div className="flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${person.looking ? 'bg-stone-400' : 'bg-emerald-500'}`}></span>

                      <span className={`font-medium ${person.looking ? 'text-stone-500' : 'text-stone-800 dark:text-stone-200'}`}>
                        {person.team}
                      </span>
                    </div>
                  </td>

                  <td className="p-3 text-stone-500 dark:text-stone-400 text-xs">
                    {person.date}
                  </td>

                  <td className="p-3 text-right">

                    <button
                      onClick={async () => {
                        await participantsApi.delete(person.id);
                        refetch();
                      }}
                      className="text-red-500 hover:text-red-700 transition-colors"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        delete
                      </span>
                    </button>

                  </td>

                </tr>
              ))}

            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}