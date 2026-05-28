import React, { useState, useEffect, useRef } from 'react';
import JudgeSidebar from '../components/judge/JudgeSidebar';
import EvaluationHero from '../components/judge/EvaluationHero';
import EvaluationQueue from '../components/judge/EvaluationQueue';
import JudgeResources from '../components/judge/JudgeResources';
import ActivityAndMentors from '../components/judge/ActivityAndMentors';

export default function JudgeDashboard() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [countdown, setCountdown] = useState({ hours: 2, minutes: 48, seconds: 12 });

  const sectionRefs = {
    dashboard: useRef(null),
    evaluation: useRef(null),
    resources: useRef(null),
    activity: useRef(null),
  };

  // Shared Countdown Engine
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) {
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0 };
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Intersection Observer Scroll Spy
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const targetElement = sectionRefs[id].current;
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#F5F3F0] min-h-screen text-[#031f22] font-sans antialiased">
      {/* Sidebar Navigation */}
      <JudgeSidebar activeSection={activeSection} onNavClick={handleNavClick} />

      {/* Main Workspace */}
      <main className="ml-64 min-h-screen px-16 py-12 flex flex-col gap-20">
        <section ref={sectionRefs.dashboard} id="dashboard" className="scroll-mt-8">
          <EvaluationHero countdown={countdown} />
        </section>

        <section ref={sectionRefs.evaluation} id="evaluation" className="scroll-mt-8">
          <EvaluationQueue />
        </section>

        <section ref={sectionRefs.resources} id="resources" className="scroll-mt-8">
          <JudgeResources />
        </section>

        <section ref={sectionRefs.activity} id="activity" className="scroll-mt-8">
          <ActivityAndMentors />
        </section>

        {/* System Status Bar */}
        <footer className="mt-auto py-12 border-t border-[#d6f3f7] flex justify-between items-center text-[#414844] text-sm font-medium">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span>System Online</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">history</span>
              <span>Last synced: Just now</span>
            </div>
          </div>
          <div className="flex gap-8">
            <a className="hover:text-[#012d1d] transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-[#012d1d] transition-colors" href="#">Judge Agreement</a>
            <span>Wise@TI v2.4.0</span>
          </div>
        </footer>
      </main>
    </div>
  );
}