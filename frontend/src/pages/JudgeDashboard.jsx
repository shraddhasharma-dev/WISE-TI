import React, { useState, useEffect, useRef } from 'react';

import JudgeSidebar from '../components/judge/JudgeSidebar';
import EvaluationHero from '../components/judge/EvaluationHero';
import EvaluationQueue from '../components/judge/EvaluationQueue';
import JudgeResources from '../components/judge/JudgeResources';
import ActivityAndMentors from '../components/judge/ActivityAndMentors';

import { teamsApi, scoresApi } from '../api';

export default function JudgeDashboard() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [countdown, setCountdown] = useState({ hours: 2, minutes: 48, seconds: 12 });

  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [teamScores, setTeamScores] = useState({});
  const [progress, setProgress] = useState({
    evaluated: 0,
    total: 0,
    percent: 0,
    nextTeam: null
  });

  const sectionRefs = {
    dashboard: useRef(null),
    evaluation: useRef(null),
    resources: useRef(null),
    activity: useRef(null),
  };

  // countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) return { hours: 0, minutes: 0, seconds: 0 };
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // load teams
  useEffect(() => {
    const load = async () => {
      const res = await teamsApi.getAll();
      setTeams(res.teams || res || []);
    };
    load();
  }, []);

  // compute scores + progress whenever teams change
  useEffect(() => {
    if (!teams.length) return;
    computeScores(teams);
  }, [teams]);

  // shared helper — fetches all scores and recomputes progress
  const computeScores = async (teamList) => {
    let evaluated = 0;
    const scoreMap = {};

    for (const t of teamList) {
      const res = await scoresApi.getByTeam(t.id);
      const scores = res?.scores || [];
      scoreMap[t.id] = scores;
      if (scores.length > 0) evaluated++;
    }

    const total = teamList.length;
    const percent = total ? Math.round((evaluated / total) * 100) : 0;
    const nextTeam = teamList.find(t => !scoreMap[t.id]?.length);

    setTeamScores(scoreMap);
    setProgress({ evaluated, total, percent, nextTeam: nextTeam?.name || null });
  };

  // select team
  const openTeamScoring = (team) => {
    setSelectedTeam(team);
  };

  // submit score — refreshes the scored team AND recomputes progress
  const submitScore = async (judgeName, score) => {
    if (!selectedTeam) return;

    await scoresApi.submit({
      team_id: selectedTeam.id,
      judge_name: judgeName,
      score: Number(score),
    });

    // refresh this team's scores from backend
    const updated = await scoresApi.getByTeam(selectedTeam.id);
    const updatedScores = updated?.scores || [];

    setTeamScores((prev) => {
      const newMap = { ...prev, [selectedTeam.id]: updatedScores };

      // recompute progress from the new scoreMap synchronously
      const evaluated = teams.filter(t => (newMap[t.id]?.length || 0) > 0).length;
      const total = teams.length;
      const percent = total ? Math.round((evaluated / total) * 100) : 0;
      const nextTeam = teams.find(t => !(newMap[t.id]?.length));

      setProgress({ evaluated, total, percent, nextTeam: nextTeam?.name || null });

      return newMap;
    });
  };

  return (
    <div className="bg-[#F5F3F0] min-h-screen text-[#031f22] font-sans antialiased">

      <JudgeSidebar />

      <main className="ml-64 min-h-screen px-16 py-12 flex flex-col gap-20">

        <section ref={sectionRefs.dashboard} id="dashboard">
          <EvaluationHero countdown={countdown} progress={progress} />
        </section>

        <section ref={sectionRefs.evaluation} id="evaluation">
          <EvaluationQueue
            teams={teams}
            selectedTeam={selectedTeam}
            teamScores={teamScores}
            onSelectTeam={openTeamScoring}
            onSubmitScore={submitScore}
          />
        </section>

        <section ref={sectionRefs.resources} id="resources">
          <JudgeResources />
        </section>

        <section ref={sectionRefs.activity} id="activity">
          <ActivityAndMentors />
        </section>

      </main>
    </div>
  );
}
