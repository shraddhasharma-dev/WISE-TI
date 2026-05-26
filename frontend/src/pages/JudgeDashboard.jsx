import React from "react";

function JudgeDashboard() {
  return (
    <div className="bg-[#F5F3F0] min-h-screen flex overflow-hidden">

      {/* SIDEBAR */}

      <aside className="fixed left-0 top-0 h-screen flex flex-col py-8 bg-[#012d1d] text-white w-64 shadow-xl z-50">

        <div className="px-7 pt-8 pb-10">

  <div className="flex items-center gap-3 mb-2">

    <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center overflow-hidden">

      <img
        alt="Wise@TI Logo"
        className="w-8 h-8 object-contain"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3l1LjI9mJJ-U8WLRaJnnJlRWkjMElQDudJRogTi2P5qAbIp6AVuiB9AMdPy-CD-OiJZMIfTZoesXivT7owxDn891X_0dKt3bDmESCjHJxLRGp9P6BhyMknXyj7FsNTo19WzufiexkKqttH3szbimIgN7hPTc8BmjGb0yQwKnJ9tRca91oDl0ZFki2o5_Qk-aYQS4OsD8DX9zCeCUIh_QSRwHWIgHELJPQR4wYZF54_BpK06WkpdMXjDk-P8Yk_8OJQduEZQY9vSM"
      />

    </div>

    <div>

      <h1 className="text-[28px] font-bold leading-none text-white">
        Wise@TI
      </h1>

      <p className="text-sm text-white/60 mt-1">
        Hackathon Central
      </p>

    </div>

  </div>

</div>

        <nav className="flex-1 space-y-2">

          <a
            href="#"
            className="flex items-center gap-4 bg-[#bee8dc] text-[#21432c] rounded-lg px-4 py-3 mx-2 mr-4 translate-x-1 transition-all duration-200"
          >
            <span className="material-symbols-outlined">
              dashboard
            </span>

            <span className="text-sm font-medium">
              Dashboard
            </span>
          </a>

          <a
            href="#"
            className="flex items-center gap-4 text-white/80 hover:text-white hover:bg-white/5 transition-all duration-200 px-4 py-3 mx-2 mr-4 rounded-lg"
          >
            <span className="material-symbols-outlined">
              groups
            </span>

            <span className="text-sm font-medium">
              Teams
            </span>
          </a>

          <a
            href="#"
            className="flex items-center gap-4 text-white/80 hover:text-white hover:bg-white/5 transition-all duration-200 px-4 py-3 mx-2 mr-4 rounded-lg"
          >
            <span className="material-symbols-outlined">
              calendar_today
            </span>

            <span className="text-sm font-medium">
              Schedule
            </span>
          </a>

          <a
            href="#"
            className="flex items-center gap-4 text-white/80 hover:text-white hover:bg-white/5 transition-all duration-200 px-4 py-3 mx-2 mr-4 rounded-lg"
          >
            <span className="material-symbols-outlined">
              psychology
            </span>

            <span className="text-sm font-medium">
              Mentors
            </span>
          </a>

          <a
            href="#"
            className="flex items-center gap-4 text-white/80 hover:text-white hover:bg-white/5 transition-all duration-200 px-4 py-3 mx-2 mr-4 rounded-lg"
          >
            <span className="material-symbols-outlined">
              gavel
            </span>

            <span className="text-sm font-medium">
              Judges
            </span>
          </a>

        </nav>

        {/* BOTTOM */}

        <div className="mt-auto pt-8 border-t border-white/10">

          <a
            href="#"
            className="flex items-center gap-4 text-white/80 hover:text-white hover:bg-white/5 transition-all duration-200 px-4 py-3 mx-2 mr-4 rounded-lg"
          >
            <span className="material-symbols-outlined">
              help
            </span>

            <span className="text-sm font-medium">
              Support
            </span>
          </a>

          <button
            className="w-full flex items-center gap-4 text-white/80 hover:text-white hover:bg-red-500/20 transition-all duration-200 px-4 py-3 mx-2 mr-4 rounded-lg"
          >
            <span className="material-symbols-outlined">
              logout
            </span>

            <span className="text-sm font-medium">
              Sign Out
            </span>
          </button>

        </div>

      </aside>

      {/* MAIN CONTENT */}

      <main className="flex-1 ml-64 min-h-screen px-[64px] py-10 flex flex-col gap-10 overflow-y-auto bg-[#F5F3F0]">

  {/* HEADER */}

  <header className="flex justify-between items-end">

    <div>

      <h2 className="text-[32px] font-bold text-[#012d1d]">
        Welcome, Judge
      </h2>

      <p className="text-[15px] text-[#414844] mt-2">
        Wise@TI Hackathon — Final Evaluation Stage
      </p>

    </div>

    <div className="flex items-center gap-4">

      <button className="flex items-center gap-2 px-6 h-12 border border-[#717973] rounded-lg text-[#031f22] hover:bg-[#d6f3f7] transition-all duration-200">

        <span className="material-symbols-outlined">
          notifications
        </span>

        <span className="text-sm font-medium">
          Activity
        </span>

      </button>

      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#012d1d]">

        <img
          alt="Judge"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF9K9Qu4sh-3ipYdxvMVCgVO3hQIL6es_cf_wbjORGPiWrraqfxiybXsupkQEemIy3Q57_iErBjAqdwNHr2qzg36uAYPPakvLIIBr0OAx4hpNy5GLC15YB1P4iVea-FfIzRcFrwMqgLKehR5yZDnwESvtfCDSbcEWT9JBylGxacY8d11ZuRv2BZQNAwH5C2gWkLVW-XHw42014wiTQI7Q2rbrDNTur_4y-l5Y3p8SjkQfrnmUKKduoCw1GakBtZEIhUeH-oP0PEXU"
        />

      </div>

    </div>

  </header>
      {/* BENTO GRID */}

  <div className="grid grid-cols-12 gap-6">

    {/* LEFT COLUMN */}

    <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">

      {/* PROGRESS CARD */}

      <div className="bg-[#d6f3f7] p-8 rounded-xl flex flex-col gap-4">

        <h3 className="text-[20px] font-semibold text-[#012d1d] flex items-center gap-2">

          <span className="material-symbols-outlined text-[#012d1d]">
            analytics
          </span>

          Your Progress

        </h3>

        <div className="mt-4">

          <div className="flex justify-between items-end mb-2">

            <span className="text-[56px] font-bold text-[#012d1d] leading-none">
              4/10
            </span>

            <span className="text-sm text-[#414844] pb-2">
              Teams Scored
            </span>

          </div>

          <div className="w-full h-2 bg-black/10 rounded-full overflow-hidden">

            <div className="w-2/5 h-full bg-[#3f6653]"></div>

          </div>

        </div>

        <p className="text-xs text-[#414844] italic">
          Next team waiting: Binary Bandits
        </p>

      </div>

      {/* DEADLINE CARD */}

      <div className="bg-[#012d1d] text-white p-8 rounded-xl relative overflow-hidden">

        <div className="relative z-10">

          <h3 className="text-sm opacity-80 uppercase tracking-[3px]">
            Round 1 Deadline
          </h3>

          <div className="mt-6 flex gap-4">

            <div className="text-center">

              <span className="block text-[32px] font-bold">
                02
              </span>

              <span className="text-xs opacity-60">
                HRS
              </span>

            </div>

            <span className="text-[32px] opacity-30">
              :
            </span>

            <div className="text-center">

              <span className="block text-[32px] font-bold">
                48
              </span>

              <span className="text-xs opacity-60">
                MIN
              </span>

            </div>

            <span className="text-[32px] opacity-30">
              :
            </span>

            <div className="text-center">

              <span className="block text-[32px] font-bold">
                12
              </span>

              <span className="text-xs opacity-60">
                SEC
              </span>

            </div>

          </div>

        </div>

        <div className="absolute -right-4 -bottom-4 opacity-10">

          <span className="material-symbols-outlined text-[120px]">
            schedule
          </span>

        </div>

      </div>

      {/* RESOURCES */}

      <div className="bg-[#d1edf1] p-8 rounded-xl">

        <h3 className="text-[20px] font-semibold text-[#012d1d] mb-6">
          Resources
        </h3>

        <div className="space-y-4">

          <a
            href="#"
            className="flex items-center justify-between p-4 bg-white rounded-lg group hover:shadow-lg transition-all duration-300"
          >

            <div className="flex items-center gap-3">

              <span className="material-symbols-outlined text-[#3f665c]">
                description
              </span>

              <span className="text-sm font-medium text-[#012d1d]">
                Judging Rubric
              </span>

            </div>

            <span className="material-symbols-outlined text-[#717973] group-hover:translate-x-1 transition-all duration-200">
              arrow_forward
            </span>

          </a>

          <a
            href="#"
            className="flex items-center justify-between p-4 bg-white rounded-lg group hover:shadow-lg transition-all duration-300"
          >

            <div className="flex items-center gap-3">

              <span className="material-symbols-outlined text-[#3f665c]">
                support_agent
              </span>

              <span className="text-sm font-medium text-[#012d1d]">
                Mentor Support
              </span>

            </div>

            <span className="material-symbols-outlined text-[#717973] group-hover:translate-x-1 transition-all duration-200">
              arrow_forward
            </span>

          </a>

        </div>

      </div>

    </div>

    {/* RIGHT COLUMN */}

    <div className="col-span-12 lg:col-span-8">

  <div className="bg-white rounded-2xl shadow-sm overflow-hidden h-full flex flex-col border border-[#cbe8eb]">

    {/* TABLE HEADER */}

    <div className="p-8 border-b border-[#d6f3f7]">

      <h3 className="text-[24px] font-semibold text-[#012d1d]">
        Evaluation Queue
      </h3>

      <p className="text-[15px] text-[#414844]">
        Review and score assigned team submissions
      </p>

    </div>

    {/* TABLE */}

    <div className="flex-1 overflow-x-auto">

      <table className="w-full text-left border-collapse">

        <thead>

          <tr className="bg-[#d6f3f7]/30">

            <th className="px-8 py-4 text-sm font-medium text-[#414844] uppercase tracking-wider">
              Team Name
            </th>

            <th className="px-8 py-4 text-sm font-medium text-[#414844] uppercase tracking-wider">
              Round
            </th>

            <th className="px-8 py-4 text-sm font-medium text-[#414844] uppercase tracking-wider">
              Status
            </th>

            <th className="px-8 py-4 text-sm font-medium text-[#414844] uppercase tracking-wider text-right">
              Action
            </th>

          </tr>

        </thead>

        <tbody className="divide-y divide-[#d6f3f7]">

          {/* ROW 1 */}

          <tr className="hover:bg-[#d6f3f7]/20 hover:translate-x-1 transition-all duration-200">

            <td className="px-8 py-6">

              <div className="flex items-center gap-4">

                <div className="w-10 h-10 bg-[#bee8dc] rounded-lg flex items-center justify-center">

                  <span className="material-symbols-outlined text-[#21432c]">
                    terminal
                  </span>

                </div>

                <div>

                  <span className="block text-[20px] font-semibold text-[#012d1d]">
                    Binary Bandits
                  </span>

                  <span className="text-xs text-[#414844]">
                    AI-Powered Security Tool
                  </span>

                </div>

              </div>

            </td>

            <td className="px-8 py-6">

              <span className="text-sm font-medium">
                Round 1
              </span>

            </td>

            <td className="px-8 py-6">

              <span className="px-3 py-1 rounded-full bg-[#bee8dc] text-[#21432c] text-xs font-semibold flex items-center w-fit gap-1">

                <span className="w-1.5 h-1.5 rounded-full bg-[#21432c] animate-pulse"></span>

                In Progress

              </span>

            </td>

            <td className="px-8 py-6 text-right">

              <button className="px-6 h-10 bg-[#012d1d] text-white rounded-lg text-sm font-medium hover:opacity-90 transition-all duration-200">

                Resume Scoring

              </button>

            </td>

          </tr>

          {/* ROW 2 */}

          <tr className="hover:bg-[#d6f3f7]/20 hover:translate-x-1 transition-all duration-200">

            <td className="px-8 py-6">

              <div className="flex items-center gap-4">

                <div className="w-10 h-10 bg-[#d6f3f7] rounded-lg flex items-center justify-center">

                  <span className="material-symbols-outlined text-[#012d1d]">
                    school
                  </span>

                </div>

                <div>

                  <span className="block text-[20px] font-semibold text-[#012d1d]">
                    Synth Scholars
                  </span>

                  <span className="text-xs text-[#414844]">
                    Personalized Learning Platform
                  </span>

                </div>

              </div>

            </td>

            <td className="px-8 py-6">

              <span className="text-sm font-medium">
                Round 1
              </span>

            </td>

            <td className="px-8 py-6">

              <span className="px-3 py-1 rounded-full bg-[#cbe8eb] text-[#414844] text-xs font-semibold w-fit flex items-center">
                Pending
              </span>

            </td>

            <td className="px-8 py-6 text-right">

              <button className="px-6 h-10 border border-[#012d1d] text-[#012d1d] rounded-lg text-sm font-medium hover:bg-[#012d1d]/5 transition-all duration-200">

                Start Scoring

              </button>

            </td>

          </tr>

          {/* ROW 3 */}

          <tr className="hover:bg-[#d6f3f7]/20 hover:translate-x-1 transition-all duration-200">

            <td className="px-8 py-6">

              <div className="flex items-center gap-4">

                <div className="w-10 h-10 bg-[#d6f3f7] rounded-lg flex items-center justify-center">

                  <span className="material-symbols-outlined text-[#012d1d]">
                    cloud_queue
                  </span>

                </div>

                <div>

                  <span className="block text-[20px] font-semibold text-[#012d1d]">
                    Aura Network
                  </span>

                  <span className="text-xs text-[#414844]">
                    Decentralized Storage
                  </span>

                </div>

              </div>

            </td>

            <td className="px-8 py-6">

              <span className="text-sm font-medium">
                Round 1
              </span>

            </td>

            <td className="px-8 py-6">

              <span className="px-3 py-1 rounded-full bg-[#cbe8eb] text-[#414844] text-xs font-semibold w-fit flex items-center">
                Pending
              </span>

            </td>

            <td className="px-8 py-6 text-right">

              <button className="px-6 h-10 border border-[#012d1d] text-[#012d1d] rounded-lg text-sm font-medium hover:bg-[#012d1d]/5 transition-all duration-200">

                Start Scoring

              </button>

            </td>

          </tr>

        </tbody>

      </table>

    </div>
        {/* TABLE FOOTER */}

    <div className="p-6 bg-[#d6f3f7]/10 flex justify-between items-center border-t border-[#d6f3f7]">

      <span className="text-xs text-[#414844]">
        Showing 4 of 10 assigned teams
      </span>

      <div className="flex gap-2">

        <button className="p-2 border border-[#717973] rounded-md opacity-40 cursor-not-allowed">

          <span className="material-symbols-outlined">
            chevron_left
          </span>

        </button>

        <button className="p-2 border border-[#717973] rounded-md hover:bg-[#d6f3f7] transition-all duration-200">

          <span className="material-symbols-outlined">
            chevron_right
          </span>

        </button>

      </div>

    </div>

  </div>

</div>

  </div>

  {/* SYSTEM STATUS FOOTER */}

  <footer className="mt-auto pt-4 flex justify-between items-center text-xs text-[#414844]">

    <div className="flex items-center gap-6">

      <div className="flex items-center gap-2">

        <span className="w-2 h-2 rounded-full bg-green-500"></span>

        <span>
          System Online
        </span>

      </div>

      <div className="flex items-center gap-2">

        <span className="material-symbols-outlined text-[16px]">
          history
        </span>

        <span>
          Last synced: Just now
        </span>

      </div>

    </div>

    <div className="flex gap-8">

      <a
        href="#"
        className="hover:text-[#012d1d] transition-all duration-200"
      >
        Privacy Policy
      </a>

      <a
        href="#"
        className="hover:text-[#012d1d] transition-all duration-200"
      >
        Judge Agreement
      </a>

      <span>
        Wise@TI v2.4.0
      </span>

    </div>

  </footer>

</main>
    </div>
  );
}

export default JudgeDashboard;