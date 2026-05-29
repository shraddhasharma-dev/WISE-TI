import React, { useState, useEffect, useRef } from 'react';
import EventJourney from '../components/participant/EventJourney';
import {
  participantsApi,
  teamsApi,
  aiApi
} from '../api';
import ParticipantSidebar from '../components/participant/ParticipantSidebar';
import ParticipantHeader from '../components/participant/ParticipantHeader';
import WelcomeHero from '../components/participant/WelcomeHero';
import TimelineTracker from '../components/participant/TimelineTracker';
import TeamAndResources from '../components/participant/TeamAndResources';

export default function ParticipantDashboard() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [countdown, setCountdown] = useState({ hours: 28, minutes: 44, seconds: 12 });
  const [participant, setParticipant] = useState(null);
const [timeline, setTimeline] = useState([]);
const [team, setTeam] = useState(null);
const [notifications, setNotifications] = useState([]);
const [loading, setLoading] = useState(true);
  const scrollContainerRef = useRef(null);
  const sectionRefs = {
    dashboard: useRef(null),
    timeline: useRef(null),
    teams: useRef(null),
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
  useEffect(() => {
  async function loadDashboard() {
    try {
      const participantsResponse = await participantsApi.getAll();

const allParticipants =
  participantsResponse.participants || [];

// pick first available participant automatically
const firstParticipant = allParticipants[0];

if (!firstParticipant) {
  throw new Error("No participants found");
}

const response = await participantsApi.getById(
  firstParticipant.id
);

      setParticipant(response.participant);
setTimeline(response.timeline);
setNotifications(response.notifications || []);

const teamsResponse = await teamsApi.getAll();
const teams = teamsResponse.teams || [];

const matchedTeam = teams
  .filter((team) =>
    team.members?.some(
      (member) =>
        member &&
        member.id &&
        response?.participant?.id &&
        member.id === response.participant.id
    )
  )
  .sort((a, b) => b.id - a.id)[0];

if (matchedTeam) {
  const compatibility =
    await aiApi.compatibilitySummary({
      team_name: matchedTeam.name,
      members: matchedTeam.members,
    });

  matchedTeam.compatibility =
    compatibility.summary;
}

setTeam(matchedTeam || null);
    } catch (error) {
      console.error('Dashboard load failed:', error);
    } finally {
      setLoading(false);
    }
  }

  loadDashboard();
}, []);

  // Fixed Scroll Spy for Custom Element Containers
  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollTop = container.scrollTop;
    let currentSection = 'dashboard';

    // Calculate positions relative to the scroll container bounds
    const timelineTop = sectionRefs.timeline.current ? sectionRefs.timeline.current.offsetTop - 120 : Infinity;
    const teamsTop = sectionRefs.teams.current ? sectionRefs.teams.current.offsetTop - 120 : Infinity;

    if (scrollTop >= teamsTop) {
      currentSection = 'teams';
    } else if (scrollTop >= timelineTop) {
      currentSection = 'timeline';
    }

    setActiveSection(currentSection);
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const targetElement = sectionRefs[id]?.current;
    if (targetElement && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: targetElement.offsetTop - 30,
        behavior: 'smooth'
      });
    }
  };
if (loading) {
  return (
    <div className="h-screen flex items-center justify-center">
      Loading...
    </div>
  );
}
  return (
    <div className="bg-[#eafdff] h-screen overflow-hidden flex font-sans antialiased text-[#031f22]">
      {/* Side Navigation Panel */}
      <ParticipantSidebar activeSection={activeSection} onNavClick={handleNavClick} />

      {/* Main Content Canvas */}
      <main 
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex-1 ml-64 overflow-y-auto scroll-smooth custom-scrollbar"
      >
        <ParticipantHeader />

        <div className="px-16 py-2 space-y-12 pb-24">
          <div ref={sectionRefs.dashboard} id="dashboard" className="pt-4">
            <WelcomeHero
  participant={participant}
  notifications={notifications}
/>
          </div>

          <div ref={sectionRefs.timeline} id="timeline" className="scroll-mt-6 space-y-10">
  
  <TimelineTracker
    countdown={countdown}
    timeline={timeline}
  />

  <EventJourney participant={participant} />

</div>

          <div ref={sectionRefs.teams} id="teams" className="scroll-mt-6">
            <TeamAndResources team={team} />
          </div>
        </div>
      </main>

      {/* Floating Action Button Entry */}
      <button className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-[#012d1d] text-white shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group z-50">
        <span className="material-symbols-outlined text-[32px] group-hover:rotate-90 transition-transform">add</span>
        <div className="absolute right-20 bg-[#012d1d] text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all shadow-md">
          New Project Entry
        </div>
      </button>
    </div>
  );
}