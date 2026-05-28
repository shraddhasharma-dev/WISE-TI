import React from 'react';

export default function ActivityAndMentors() {
  const activities = [
    { text: 'System Notification: Round 1 evaluations are closing in 2 hours. Please finalize your scores.', time: '10 minutes ago', dotColor: 'bg-[#012d1d]' },
    { text: 'New Submission: Team GreenGrid has uploaded their final pitch deck.', time: '45 minutes ago', dotColor: 'bg-[#3f665c]' },
    { text: 'You completed the evaluation for EcoPulse.', time: '1 hour ago', dotColor: 'bg-[#717973]' },
  ];

  const mentors = [
    { name: 'James Smith', role: 'Technical Mentor', initial: 'JS', online: true },
    { name: 'Anna Lee', role: 'UX Design Mentor', initial: 'AL', online: true },
    { name: 'Ray Kapoor', role: 'Cloud Architecture', initial: 'RK', online: false },
  ];

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 lg:col-span-8">
        <h3 className="text-2xl font-bold text-[#012d1d] mb-8">Recent Activity</h3>
        <div className="space-y-4">
          {activities.map((act, idx) => (
            <div key={idx} className="flex gap-4 p-4 bg-white rounded-xl border border-[#d6f3f7] items-start hover:shadow-sm transition-shadow">
              <div className={`mt-2 w-2 h-2 rounded-full ${act.dotColor} shrink-0`}></div>
              <div>
                <p className="text-sm text-[#031f22] leading-relaxed">{act.text}</p>
                <span className="text-[11px] font-medium text-[#414844] block mt-1">{act.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="col-span-12 lg:col-span-4">
        <h3 className="text-2xl font-bold text-[#012d1d] mb-8">Mentor Availability</h3>
        <div className="bg-[#d6f3f7] p-6 rounded-2xl border border-[#012d1d]/5">
          <div className="space-y-6">
            {mentors.map((mentor, idx) => (
              <div key={idx} className={`flex items-center justify-between ${!mentor.online ? 'opacity-50' : ''}`}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#012d1d]/10 flex items-center justify-center font-bold text-[#012d1d] text-sm">
                    {mentor.initial}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#012d1d]">{mentor.name}</p>
                    <p className="text-xs text-[#414844]">{mentor.role}</p>
                  </div>
                </div>
                <span className={`w-2 h-2 rounded-full ${mentor.online ? 'bg-green-500' : 'bg-[#414844]'}`}></span>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-3 bg-white border border-[#012d1d] text-[#012d1d] rounded-lg text-sm font-bold hover:bg-[#012d1d]/5 transition-all shadow-sm">
            Request Mentor Support
          </button>
        </div>
      </div>
    </div>
  );
}