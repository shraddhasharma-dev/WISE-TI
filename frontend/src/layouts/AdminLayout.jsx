import { useState } from "react";

import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";

function AdminLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>

      <div className="bg-[#F5F3F0] dark:bg-[#0f172a] min-h-screen transition-all duration-300">

        <Sidebar />

        <div className="ml-[280px]">

          <Topbar
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />

          <main className="p-8 lg:p-10">
            {children}
          </main>

        </div>

      </div>

    </div>
  );
}

export default AdminLayout;