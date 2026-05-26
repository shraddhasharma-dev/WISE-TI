function Topbar({ darkMode, setDarkMode }) {
  return (
    <header className="sticky top-0 z-40 bg-[#F5F3F0]/80 dark:bg-[#111827]/80 backdrop-blur-md h-20 flex justify-between items-center w-full px-10 border-b border-gray-200 dark:border-gray-800 transition-all">

      <div className="flex items-center gap-[24px]">

        <div className="relative bg-white dark:bg-[#1f2937] border border-gray-200 dark:border-gray-700 rounded-full px-4 py-2 flex items-center w-80 shadow-sm">

          <span className="material-symbols-outlined text-gray-500 text-sm mr-2">
            search
          </span>

          <input
            className="bg-transparent border-none outline-none text-sm w-full dark:text-white"
            placeholder="Search data points..."
            type="text"
          />

        </div>

      </div>

      <div className="flex items-center gap-4">

        {/* Dark Mode Toggle */}

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2.5 rounded-full bg-white dark:bg-[#1f2937] border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-white transition-all"
        >

          <span className="material-symbols-outlined">

            {darkMode ? "light_mode" : "dark_mode"}

          </span>

        </button>

        {/* Notifications */}

        <button className="p-2.5 rounded-full bg-white dark:bg-[#1f2937] border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-white">

          <span className="material-symbols-outlined">
            notifications
          </span>

        </button>

        {/* Profile */}

        <div className="flex items-center gap-4 bg-white dark:bg-[#1f2937] border border-gray-200 dark:border-gray-700 rounded-full px-4 py-1.5 shadow-sm">

          <div className="text-right">

            <p className="text-xs font-bold text-black dark:text-white">
              Admin
            </p>

            <p className="text-[9px] font-bold text-gray-500 uppercase">
              Full Access
            </p>

          </div>

          <img
            alt="Administrator"
            className="w-10 h-10 rounded-full"
            src="https://i.pravatar.cc/100"
          />

        </div>

      </div>

    </header>
  );
}

export default Topbar;