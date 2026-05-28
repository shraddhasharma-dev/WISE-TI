import React from 'react';

export default function ParticipantHeader() {
  return (
    <header className="flex justify-between items-center w-full px-16 h-20 bg-[#eafdff]/90 backdrop-blur-md sticky top-0 z-40">
      <div className="flex items-center gap-8">
        <div className="relative">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#414844]">search</span>
          <input 
            className="bg-[#d6f3f7] border-none rounded-full pl-12 pr-6 py-2 w-80 text-sm font-medium focus:ring-2 focus:ring-[#012d1d] outline-none transition-all text-[#031f22] placeholder-[#414844]/60" 
            placeholder="Search milestones or mentors..." 
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-6">
        <button className="material-symbols-outlined text-[#012d1d] hover:bg-[#d1edf1] p-2 rounded-full transition-colors">notifications</button>
        <button className="material-symbols-outlined text-[#012d1d] hover:bg-[#d1edf1] p-2 rounded-full transition-colors">settings</button>
        <div className="w-10 h-10 rounded-full border-2 border-[#c1ecd4] overflow-hidden">
          <img alt="User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiQhJl0omHLERS7GnvwJtGEkBCIy-BYzzEICDG18Op9l8c1vpCGpHtOcLz5Pd1cy8xZ4PXeb4lme6cfmjsRLohP4hJHDi2lJyjrE-vkZ08phtlpWHKC4Fx7iHdBjutefAW3SQlnq3zZBvkTRv5GD0qq6mYD2B5E1VAWvltNy4Vk2ovrK4wjyZOiiGCEmyBh8g1ZgEERqI4tcAyw52z4pXlP6KUd23mIHoBOtq9bGs6yGqOgQdWqvNG_f4nzv7XKe-ylNuaHz77QXA" />
        </div>
      </div>
    </header>
  );
}