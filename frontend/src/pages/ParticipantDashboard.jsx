import { useEffect, useState } from "react";

function ParticipantDashboard() {

  const [time, setTime] = useState({
    hours: 28,
    minutes: 44,
    seconds: 12,
  });

  useEffect(() => {

    const timer = setInterval(() => {

      setTime((prev) => {

        let { hours, minutes, seconds } = prev;

        seconds--;

        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }

        if (minutes < 0) {
          minutes = 59;
          hours--;
        }

        return {
          hours,
          minutes,
          seconds,
        };
      });

    }, 1000);

    return () => clearInterval(timer);

  }, []);

  return (

    <div className="bg-[#F5F3F0] overflow-hidden h-screen flex">

      {/* SIDEBAR */}

<aside className="fixed left-0 top-0 h-screen w-[270px] bg-[#012d1d] text-white flex flex-col shadow-2xl z-50">

  {/* TOP LOGO */}

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

        <h1 className="text-[28px] font-bold leading-none">
          Wise@TI
        </h1>

        <p className="text-sm text-white/60 mt-1">
          Hackathon Central
        </p>

      </div>

    </div>

  </div>

  {/* NAVIGATION */}

   <nav className="flex-1 flex flex-col gap-1">

  <a
    href="#"
    className="flex items-center gap-4 bg-[#bee8dc] text-[#21432c] rounded-lg px-4 py-3 mx-2 mr-4 translate-x-1"
  >
    <span className="material-symbols-outlined">
      dashboard
    </span>

    <span className="font-medium">
      Dashboard
    </span>
  </a>

  <a
    href="#"
    className="flex items-center gap-4 text-white/80 hover:text-white hover:bg-white/5 rounded-lg px-4 py-3 mx-2 mr-4 transition-all"
  >
    <span className="material-symbols-outlined">
      groups
    </span>

    <span>
      Teams
    </span>
  </a>

  <a
    href="#"
    className="flex items-center gap-4 text-white/80 hover:text-white hover:bg-white/5 rounded-lg px-4 py-3 mx-2 mr-4 transition-all"
  >
    <span className="material-symbols-outlined">
      calendar_today
    </span>

    <span>
      Schedule
    </span>
  </a>

  <a
    href="#"
    className="flex items-center gap-4 text-white/80 hover:text-white hover:bg-white/5 rounded-lg px-4 py-3 mx-2 mr-4 transition-all"
  >
    <span className="material-symbols-outlined">
      psychology
    </span>

    <span>
      Mentors
    </span>
  </a>

  <a
    href="#"
    className="flex items-center gap-4 text-white/80 hover:text-white hover:bg-white/5 rounded-lg px-4 py-3 mx-2 mr-4 transition-all"
  >
    <span className="material-symbols-outlined">
      gavel
    </span>

    <span>
      Judges
    </span>
  </a>

</nav>

{/* BOTTOM SECTION */}

<div className="mt-auto border-t border-white/10 pt-4 flex flex-col gap-1">

  <a
    href="#"
    className="flex items-center gap-4 text-white/80 hover:text-white hover:bg-white/5 rounded-lg px-4 py-3 mx-2 mr-4 transition-all"
  >
    <span className="material-symbols-outlined">
      help
    </span>

    <span>
      Support
    </span>
  </a>

  <a
    href="#"
    className="flex items-center gap-4 text-white/80 hover:text-white hover:bg-white/5 rounded-lg px-4 py-3 mx-2 mr-4 transition-all"
  >
    <span className="material-symbols-outlined">
      logout
    </span>

    <span>
      Sign Out
    </span>
  </a>

</div>
</aside>

      

      {/* MAIN CONTENT */}

      <main className="flex-1 ml-[270px] overflow-y-auto bg-[#F5F3F0] min-h-screen">

        {/* TOPBAR */}

        {/* TOPBAR */}

<header className="sticky top-0 z-40 h-[88px] bg-[#F5F3F0]/95 backdrop-blur-md border-b border-[#c1c8c2]/30 flex items-center justify-between px-10">

  {/* SEARCH */}

  <div className="relative">

    <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-[#5f6762] text-[22px]">
      search
    </span>

    <input
      type="text"
      placeholder="Search milestones or mentors..."
      className="
        w-[380px]
        h-[52px]
        rounded-full
        bg-[#E9E5E0]
        pl-14
        pr-6
        text-[15px]
        text-[#031f22]
        outline-none
        border border-transparent
        focus:border-[#012d1d]/20
        focus:ring-4
        focus:ring-[#012d1d]/5
        transition-all
      "
    />

  </div>

  {/* RIGHT */}

  <div className="flex items-center gap-6">

    <button className="w-11 h-11 rounded-full hover:bg-[#E9E5E0] flex items-center justify-center transition-all">

      <span className="material-symbols-outlined text-[#012d1d] text-[24px]">
        notifications
      </span>

    </button>

    <button className="w-11 h-11 rounded-full hover:bg-[#E9E5E0] flex items-center justify-center transition-all">

      <span className="material-symbols-outlined text-[#012d1d] text-[24px]">
        settings
      </span>

    </button>

    {/* PROFILE */}

    <div className="flex items-center gap-3 pl-2">

      <div className="text-right">

        <p className="text-[14px] font-semibold text-[#031f22] leading-tight">
          Marcus Thorne
        </p>

        <p className="text-[12px] text-[#5f6762]">
          Team Lead
        </p>

      </div>

      <div className="w-12 h-12 rounded-full overflow-hidden border-[3px] border-[#a5d0b9] shadow-sm">

        <img
          alt="User"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiQhJl0omHLERS7GnvwJtGEkBCIy-BYzzEICDG18Op9l8c1vpCGpHtOcLz5Pd1cy8xZ4PXeb4lme6cfmjsRLohP4hJHDi2lJyjrE-vkZ08phtlpWHKC4Fx7iHdBjutefAW3SQlnq3zZBvkTRv5GD0qq6mYD2B5E1VAWvltNy4Vk2ovrK4wjyZOiiGCEmyBh8g1ZgEERqI4tcAyw52z4pXlP6KUd23mIHoBOtq9bGs6yGqOgQdWqvNG_f4nzv7XKe-ylNuaHz77QXA"
        />

      </div>

    </div>

  </div>

</header>
        <div className="px-10 py-8 space-y-7 pb-24 w-full max-w-[1700px] mx-auto">

  {/* HERO SECTION */}

  {/* HERO SECTION */}

<section className="grid grid-cols-1 xl:grid-cols-3 gap-7">

  {/* LEFT HERO CARD */}

  <div className="xl:col-span-2 relative overflow-hidden rounded-[28px] bg-[#1b4332] min-h-[340px] p-10 flex flex-col justify-between shadow-sm">

    {/* CONTENT */}

    <div className="relative z-10 max-w-[680px]">

      <span className="uppercase tracking-[0.25em] text-[#a5d0b9] text-[13px] font-semibold block mb-5">

        Current Status: Hacking

      </span>

      <h1 className="text-[64px] leading-[72px] font-bold text-white mb-6">

        Welcome back,
        <br />

        Binary Bandits!

      </h1>

      <p className="text-[18px] leading-[32px] text-[#86af99] max-w-[560px] mb-10">

        Your "EcoTrack AI" project is shaping up beautifully.
        You've completed 65% of your core milestones.

      </p>

      <button className="h-[58px] px-8 rounded-2xl bg-white text-[#012d1d] font-semibold text-[16px] flex items-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg">

        <span className="material-symbols-outlined text-[24px]">
          upload_file
        </span>

        Submit Project

      </button>

    </div>

    {/* DECORATION */}

    <div className="absolute -right-10 -bottom-24 opacity-10 pointer-events-none">

      <span
        className="material-symbols-outlined text-[420px]"
        style={{ fontVariationSettings: "'wght' 200" }}
      >
        architecture
      </span>

    </div>

  </div>

  {/* LIVE FEED */}

  <div className="rounded-[28px] bg-[#E9E5E0] border border-[#c1c8c2]/40 p-7 flex flex-col shadow-sm min-h-[340px]">

    {/* HEADER */}

    <div className="flex items-center justify-between mb-7">

      <div className="flex items-center gap-3">

        <span className="material-symbols-outlined text-[#012d1d] text-[28px]">
          campaign
        </span>

        <h2 className="text-[26px] font-bold text-[#031f22]">
          Live Feed
        </h2>

      </div>

      <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></span>

    </div>

    {/* FEED */}

    <div className="flex-1 space-y-4 overflow-y-auto pr-2">

      <div className="bg-[#eafdff] border-l-4 border-[#012d1d] rounded-2xl p-4 shadow-sm hover:translate-x-1 transition-all">

        <p className="text-[15px] font-medium text-[#031f22] mb-2">
          Pizza arrived in the main hall!
        </p>

        <span className="text-[12px] text-[#5f6762]">
          2 mins ago
        </span>

      </div>

      <div className="bg-[#eafdff] border-l-4 border-[#a6cfc3] rounded-2xl p-4 shadow-sm hover:translate-x-1 transition-all">

        <p className="text-[15px] font-medium text-[#031f22] mb-2">
          Mentor 'Sarah Chen' is now available for UI/UX review.
        </p>

        <span className="text-[12px] text-[#5f6762]">
          15 mins ago
        </span>

      </div>

      <div className="bg-[#eafdff] border-l-4 border-[#717973] rounded-2xl p-4 shadow-sm hover:translate-x-1 transition-all">

        <p className="text-[15px] font-medium text-[#031f22] mb-2">
          Reminder: Round 1 Evaluation starts at 4:00 PM.
        </p>

        <span className="text-[12px] text-[#5f6762]">
          1 hour ago
        </span>

      </div>

    </div>

    {/* BUTTON */}

    <button className="mt-5 text-left text-[#012d1d] font-semibold text-[15px] hover:underline">

      View all announcements →

    </button>

  </div>

</section>
  {/* TIMELINE SECTION */}

{/* TIMELINE SECTION */}

<section className="bg-[#dcf9fc] rounded-[28px] px-10 py-10 border border-[#c1c8c2]/30 shadow-sm">

  {/* TOP */}

  <div className="flex items-start justify-between mb-14">

    <div>

      <h2 className="text-[30px] font-bold text-[#012d1d] mb-2">

        Hackathon Timeline

      </h2>

      <p className="text-[16px] text-[#5f6762]">

        Stay on track for the final presentation.

      </p>

    </div>

    <div className="text-right">

      <div className="text-[52px] leading-none font-bold text-[#012d1d] tracking-tight tabular-nums">

        {String(time.hours).padStart(2, "0")}:
        {String(time.minutes).padStart(2, "0")}:
        {String(time.seconds).padStart(2, "0")}

      </div>

      <p className="mt-2 text-[12px] uppercase tracking-[0.2em] text-[#5f6762]">

        Hours Remaining

      </p>

    </div>

  </div>

  {/* TIMELINE */}

  <div className="relative pt-3">

    {/* BACK LINE */}

    <div className="absolute top-[27px] left-0 w-full h-[3px] bg-[#c1c8c2] rounded-full"></div>

    {/* ACTIVE LINE */}

    <div className="absolute top-[27px] left-0 w-[66%] h-[3px] bg-[#012d1d] rounded-full"></div>

    {/* ITEMS */}

    <div className="relative flex justify-between">

      {/* STEP 1 */}

      <div className="flex flex-col items-center min-w-[120px]">

        <div className="w-12 h-12 rounded-full bg-[#012d1d] text-white flex items-center justify-center ring-[10px] ring-[#dcf9fc] shadow-md z-10">

          <span className="material-symbols-outlined text-[22px]">
            check
          </span>

        </div>

        <p className="mt-5 text-[15px] font-semibold text-[#012d1d]">

          Ideation

        </p>

        <span className="text-[13px] text-[#5f6762] mt-1">

          Fri 09:00

        </span>

      </div>

      {/* STEP 2 */}

      <div className="flex flex-col items-center min-w-[140px]">

        <div className="w-12 h-12 rounded-full bg-[#012d1d] text-white flex items-center justify-center ring-[10px] ring-[#dcf9fc] shadow-md z-10">

          <span className="material-symbols-outlined text-[22px]">
            check
          </span>

        </div>

        <p className="mt-5 text-[15px] font-semibold text-[#012d1d]">

          Development Start

        </p>

        <span className="text-[13px] text-[#5f6762] mt-1">

          Fri 12:00

        </span>

      </div>

      {/* STEP 3 */}

      <div className="flex flex-col items-center min-w-[140px]">

        <div className="w-[58px] h-[58px] rounded-full bg-[#012d1d] text-white flex items-center justify-center ring-[10px] ring-[#dcf9fc] shadow-xl scale-110 z-10">

          <span
            className="material-symbols-outlined animate-spin text-[26px]"
            style={{ animationDuration: "3s" }}
          >
            sync
          </span>

        </div>

        <p className="mt-5 text-[16px] font-bold text-[#012d1d]">

          Hacking Phase

        </p>

        <span className="text-[13px] font-semibold text-[#012d1d] mt-1">

          In Progress

        </span>

      </div>

      {/* STEP 4 */}

      <div className="flex flex-col items-center opacity-50 min-w-[120px]">

        <div className="w-12 h-12 rounded-full bg-[#cbe8eb] text-[#031f22] flex items-center justify-center ring-[10px] ring-[#dcf9fc] z-10">

          <span className="material-symbols-outlined text-[22px]">
            assignment
          </span>

        </div>

        <p className="mt-5 text-[15px] font-medium text-[#031f22]">

          Round 1 Eval

        </p>

        <span className="text-[13px] text-[#5f6762] mt-1">

          Sat 16:00

        </span>

      </div>

      {/* STEP 5 */}

      <div className="flex flex-col items-center opacity-50 min-w-[120px]">

        <div className="w-12 h-12 rounded-full bg-[#cbe8eb] text-[#031f22] flex items-center justify-center ring-[10px] ring-[#dcf9fc] z-10">

          <span className="material-symbols-outlined text-[22px]">
            celebration
          </span>

        </div>

        <p className="mt-5 text-[15px] font-medium text-[#031f22]">

          Final Demo

        </p>

        <span className="text-[13px] text-[#5f6762] mt-1">

          Sun 10:00

        </span>

      </div>

    </div>

  </div>

</section>
{/* BOTTOM SECTION */}

<section className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">

  {/* TEAM CARD */}

  <div className="bg-[#cbe8eb] rounded-xl p-8 flex flex-col transition-shadow hover:shadow-xl">

    <div className="flex items-center justify-between mb-8">

      <div>

        <h2 className="text-2xl font-semibold text-[#012d1d]">
          Team: Binary Bandits
        </h2>

        <p className="text-[#414844]">
          4 Active Members
        </p>

      </div>

      <button className="bg-[#012d1d] text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:opacity-90">

        <span
          className="material-symbols-outlined"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          psychology
        </span>

        Find a Mentor

      </button>

    </div>

    <div className="space-y-6">

      {/* MEMBER 1 */}

      <div className="flex items-center gap-4">

        <img
          alt="Member"
          className="w-12 h-12 rounded-full ring-2 ring-[#a5d0b9]"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBD38o6W3cVTE_vD-rqP3kZ-xV5Bnn4G-hCjMM-OFNZBjdAC9fkB0ScEDISnz2CtwDF4VieSbulqIFOIRhINLbsv5ym1E4rUDM0kg6Gu93cuKg33WjXq2ZUMXsMWdqdaiAiIHCPV25D3i2qN2JthJb0A189KyzaebdeHoij_AoxUyP9wPSUGhbNugFBHyNg50BHNfGWHkBQYiWaDdxHv0R1GojPRQAxIFaHIkTbPZLBRyWaYnYpKb11_u3GBpT1Iw9iEIumMoV1gU0"
        />

        <div>

          <p className="font-bold text-[#031f22]">
            Marcus Thorne (You)
          </p>

          <p className="text-sm text-[#414844]">
            Full-stack Developer
          </p>

        </div>

        <div className="ml-auto flex items-center gap-1">

          <span className="w-2 h-2 rounded-full bg-[#012d1d]"></span>

          <span className="text-sm text-[#012d1d]">
            Online
          </span>

        </div>

      </div>

      {/* MEMBER 2 */}

      <div className="flex items-center gap-4">

        <img
          alt="Member"
          className="w-12 h-12 rounded-full ring-2 ring-[#a6cfc3]"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzgxyYbmG7N4Mu7aCwai_S2qnFJvFJtZ5v0eJvioHXXjPg4eHd1fLHf9sUhLTj7pmv1CktnY9paJOaz7BjDS4h_L4AiQPISjUVE8yS5IwHRZZDVyP5w3cvD3l6sb7vLb6f4sf1boyinm5WKU1qffJyRTxa0jOlExT9UWqwf07g3w_VFI5gY5IQAJ2K-s2K5BitdGNt3QOrLBJ78EpqKUSeuusd_kE82rRqwwh3MEFNUh1OLl6v5T1P52U3SOq0Zcvw55DD9hQxvvk"
        />

        <div>

          <p className="font-bold text-[#031f22]">
            Elena Rodriguez
          </p>

          <p className="text-sm text-[#414844]">
            Data Scientist
          </p>

        </div>

        <div className="ml-auto flex items-center gap-1">

          <span className="w-2 h-2 rounded-full bg-[#012d1d]/30"></span>

          <span className="text-sm text-[#414844]">
            Offline
          </span>

        </div>

      </div>

      {/* MEMBER 3 */}

      <div className="flex items-center gap-4">

        <img
          alt="Member"
          className="w-12 h-12 rounded-full ring-2 ring-[#a5d0b9]"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_WYEqnrMehLVmNyVPomp6OoIP_q2ZQCuUeyZ_Grg993KNkiNgzeItYRyctFC1WxdNdLdqwJoausdPimj2c3rSXYGfxLO_TnyQgQMDWq6BRcaTfH08GqlneG5V-kU7bvR4d33JZF45nfc6VBYkT8N-T2c5s80GMQRutUnQQSoi90XDypqLMA8_TQHk7Dq7QyrkR6bZ7bOm7PCThT-0KyhWZyfEkpFstJ4BguSMcBCzztDOCewvNHbtfPZRNxaHRVXLnhswdIUz6EU"
        />

        <div>

          <p className="font-bold text-[#031f22]">
            Samir Gupta
          </p>

          <p className="text-sm text-[#414844]">
            UI/UX Designer
          </p>

        </div>

        <div className="ml-auto flex items-center gap-1">

          <span className="w-2 h-2 rounded-full bg-[#012d1d]"></span>

          <span className="text-sm text-[#012d1d]">
            Online
          </span>

        </div>

      </div>

    </div>

  </div>

  {/* RESOURCE CARD */}

  <div className="bg-[#21432c] rounded-xl p-8 flex flex-col text-white relative overflow-hidden">

    <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">

      <span className="material-symbols-outlined">
        construction
      </span>

      Essential Resources

    </h2>

    <div className="grid grid-cols-2 gap-4 relative z-10">

      <a
        href="#"
        className="p-4 bg-[#8ab092]/30 rounded-lg hover:bg-[#8ab092]/50 transition-colors flex flex-col gap-2"
      >
        <span className="material-symbols-outlined text-[#c5eccc]">
          menu_book
        </span>

        <span>API Docs</span>
      </a>

      <a
        href="#"
        className="p-4 bg-[#8ab092]/30 rounded-lg hover:bg-[#8ab092]/50 transition-colors flex flex-col gap-2"
      >
        <span className="material-symbols-outlined text-[#c5eccc]">
          cloud_download
        </span>

        <span>Asset Pack</span>
      </a>

      <a
        href="#"
        className="p-4 bg-[#8ab092]/30 rounded-lg hover:bg-[#8ab092]/50 transition-colors flex flex-col gap-2"
      >
        <span className="material-symbols-outlined text-[#c5eccc]">
          terminal
        </span>

        <span>CLI Tool</span>
      </a>

      <a
        href="#"
        className="p-4 bg-[#8ab092]/30 rounded-lg hover:bg-[#8ab092]/50 transition-colors flex flex-col gap-2"
      >
        <span className="material-symbols-outlined text-[#c5eccc]">
          forum
        </span>

        <span>Tech Support</span>
      </a>

    </div>

    {/* DECORATIVE ICON */}

    <div className="absolute bottom-0 right-0 p-4 opacity-20">

      <span className="material-symbols-outlined text-[100px]">
        auto_awesome
      </span>

    </div>

  </div>

</section>


</div>
<button className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-[#012d1d] text-white shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group z-50">

  <span className="material-symbols-outlined text-[32px] group-hover:rotate-90 transition-transform">
    add
  </span>

  <div className="absolute right-20 bg-[#012d1d] text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all">

    New Project Entry

  </div>

</button>

      </main>

    </div>
  );
}

export default ParticipantDashboard;