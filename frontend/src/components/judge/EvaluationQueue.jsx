import React, { useState } from 'react';

const statusBadge = (scored, active) => {
  if (scored) return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      background: '#eaf3de', color: '#3b6d11',
      fontSize: 12, fontWeight: 500,
      padding: '3px 10px', borderRadius: 20,
      border: '0.5px solid #c0dd97'
    }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#639922', display: 'inline-block' }} />
      Scored
    </span>
  );
  if (active) return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      background: '#e6f1fb', color: '#185fa5',
      fontSize: 12, fontWeight: 500,
      padding: '3px 10px', borderRadius: 20,
      border: '0.5px solid #b5d4f4'
    }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#378add', display: 'inline-block' }} />
      In Scoring
    </span>
  );
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      background: '#f1efe8', color: '#5f5e5a',
      fontSize: 12, fontWeight: 500,
      padding: '3px 10px', borderRadius: 20,
      border: '0.5px solid #d3d1c7'
    }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#888780', display: 'inline-block' }} />
      Pending
    </span>
  );
};

export default function EvaluationQueue({
  teams = [],
  selectedTeam,
  teamScores = {},
  onSelectTeam,
  onSubmitScore
}) {
  const [search, setSearch] = useState('');
  const [score, setScore] = useState('');
  const [judgeName, setJudgeName] = useState('');
  const [rubric, setRubric] = useState(null);
  const [rubricLoading, setRubricLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const filteredTeams = teams.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase())
  );

  const isScored = (teamId) => teamScores?.[teamId]?.length > 0;

  const getScores = (teamId) => teamScores?.[teamId] || [];

  const getAverage = (teamId) => {
    const scores = getScores(teamId);
    if (!scores.length) return null;
    return (scores.reduce((s, x) => s + x.score, 0) / scores.length).toFixed(1);
  };

  const getAnomalies = (teamId) => {
    const scores = getScores(teamId);
    if (scores.length < 2) return [];
    const avg = scores.reduce((s, x) => s + x.score, 0) / scores.length;
    return scores.filter(s => Math.abs(s.score - avg) > 2.0);
  };

  const handleSelectTeam = async (team) => {
    onSelectTeam(team);
    setRubric(null);
    setSubmitError('');
    setScore('');

    setRubricLoading(true);
    try {
      const res = await fetch('/generate-rubric', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          team_name: team.name,
          challenge: team.rationale || team.scope || 'Hackathon project'
        })
      });
      const data = await res.json();
      setRubric(data.rubric);
    } catch {
      setRubric(null);
    }
    setRubricLoading(false);
  };

  const handleSubmit = async () => {
    if (!selectedTeam || !score || !judgeName.trim()) {
      setSubmitError('Please enter your name and a score.');
      return;
    }
    const n = Number(score);
    if (isNaN(n) || n < 0 || n > 10) {
      setSubmitError('Score must be between 0 and 10.');
      return;
    }
    setSubmitting(true);
    setSubmitError('');
    try {
      await onSubmitScore?.(judgeName.trim(), n);
      setScore('');
    } catch {
      setSubmitError('Submission failed. Try again.');
    }
    setSubmitting(false);
  };

  const anomaliesForSelected = selectedTeam ? getAnomalies(selectedTeam.id) : [];

  return (
    <div style={{
      background: 'var(--color-background-primary)',
      borderRadius: 16,
      border: '0.5px solid var(--color-border-tertiary)',
      overflow: 'hidden'
    }}>

      {/* HEADER */}
      <div style={{
        padding: '28px 32px',
        borderBottom: '0.5px solid var(--color-border-tertiary)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 16,
        flexWrap: 'wrap'
      }}>
        <div>
          <h3 style={{ fontSize: 20, fontWeight: 500, margin: 0, color: 'var(--color-text-primary)' }}>
            Evaluation Queue
          </h3>
          <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', margin: '4px 0 0' }}>
            Primary scoring dashboard for your assigned teams
          </p>
        </div>

        <div style={{ position: 'relative' }}>
          <input
            style={{
              padding: '8px 12px 8px 34px',
              border: '0.5px solid var(--color-border-secondary)',
              borderRadius: 8,
              fontSize: 14,
              background: 'var(--color-background-secondary)',
              color: 'var(--color-text-primary)',
              outline: 'none',
              width: 200
            }}
            placeholder="Search teams..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <svg style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', opacity: 0.4 }}
            width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
          </svg>
        </div>
      </div>

      {/* TABLE */}
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
          <thead>
            <tr style={{ background: 'var(--color-background-secondary)' }}>
              {['Team', 'Scope', 'Avg Score', 'Status', 'Action'].map(h => (
                <th key={h} style={{
                  padding: '10px 24px', textAlign: h === 'Action' ? 'right' : 'left',
                  fontSize: 12, fontWeight: 500,
                  color: 'var(--color-text-secondary)',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase'
                }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredTeams.length === 0 ? (
              <tr>
                <td colSpan={5} style={{
                  padding: '40px 24px', textAlign: 'center',
                  color: 'var(--color-text-secondary)', fontSize: 14
                }}>
                  No teams found
                </td>
              </tr>
            ) : filteredTeams.map((team) => {
              const active = selectedTeam?.id === team.id;
              const scored = isScored(team.id);
              const avg = getAverage(team.id);

              return (
                <tr key={team.id} style={{
                  borderTop: '0.5px solid var(--color-border-tertiary)',
                  background: active ? 'var(--color-background-info)' : 'transparent',
                  transition: 'background 0.15s'
                }}>
                  <td style={{ padding: '14px 24px', fontWeight: 500, color: 'var(--color-text-primary)' }}>
                    {team.name}
                  </td>
                  <td style={{
                    padding: '14px 24px', color: 'var(--color-text-secondary)',
                    maxWidth: 240, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'
                  }}>
                    {team.scope || team.rationale || '—'}
                  </td>
                  <td style={{ padding: '14px 24px', color: 'var(--color-text-primary)', fontWeight: avg ? 500 : 400 }}>
                    {avg ? `${avg} / 10` : <span style={{ color: 'var(--color-text-secondary)' }}>—</span>}
                  </td>
                  <td style={{ padding: '14px 24px' }}>
                    {statusBadge(scored, active)}
                  </td>
                  <td style={{ padding: '14px 24px', textAlign: 'right' }}>
                    <button
                      onClick={() => handleSelectTeam(team)}
                      style={{
                        padding: '6px 16px',
                        fontSize: 13, fontWeight: 500,
                        border: active ? '0.5px solid #378add' : '0.5px solid var(--color-border-secondary)',
                        borderRadius: 8,
                        background: active ? '#e6f1fb' : 'transparent',
                        color: active ? '#185fa5' : 'var(--color-text-primary)',
                        cursor: 'pointer'
                      }}
                    >
                      {active ? 'Scoring' : scored ? 'Re-score' : 'Start'}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* SCORING PANEL */}
      {selectedTeam && (
        <div style={{
          borderTop: '0.5px solid var(--color-border-tertiary)',
          padding: 32,
          background: 'var(--color-background-secondary)',
          display: 'flex',
          flexDirection: 'column',
          gap: 24
        }}>
          {/* Panel Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <p style={{ fontSize: 12, fontWeight: 500, color: 'var(--color-text-secondary)', margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Now Scoring
              </p>
              <h4 style={{ fontSize: 18, fontWeight: 500, margin: 0, color: 'var(--color-text-primary)' }}>
                {selectedTeam.name}
              </h4>
            </div>

            {/* Existing scores summary */}
            {getScores(selectedTeam.id).length > 0 && (
              <div style={{
                background: 'var(--color-background-primary)',
                border: '0.5px solid var(--color-border-tertiary)',
                borderRadius: 10, padding: '10px 16px', textAlign: 'right'
              }}>
                <p style={{ fontSize: 11, color: 'var(--color-text-secondary)', margin: '0 0 2px' }}>
                  Panel average
                </p>
                <p style={{ fontSize: 22, fontWeight: 500, margin: 0, color: 'var(--color-text-primary)' }}>
                  {getAverage(selectedTeam.id)}
                </p>
                <p style={{ fontSize: 11, color: 'var(--color-text-secondary)', margin: '2px 0 0' }}>
                  from {getScores(selectedTeam.id).length} judge{getScores(selectedTeam.id).length > 1 ? 's' : ''}
                </p>
              </div>
            )}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>

            {/* Score Input */}
            <div style={{
              background: 'var(--color-background-primary)',
              border: '0.5px solid var(--color-border-tertiary)',
              borderRadius: 12, padding: 20,
              display: 'flex', flexDirection: 'column', gap: 14
            }}>
              <p style={{ fontSize: 13, fontWeight: 500, margin: 0, color: 'var(--color-text-primary)' }}>
                Submit Score
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <label style={{ fontSize: 12, color: 'var(--color-text-secondary)' }}>Your name</label>
                <input
                  value={judgeName}
                  onChange={(e) => setJudgeName(e.target.value)}
                  placeholder="e.g. Dr. Sharma"
                  style={{
                    padding: '8px 12px', borderRadius: 8, fontSize: 14,
                    border: '0.5px solid var(--color-border-secondary)',
                    background: 'var(--color-background-secondary)',
                    color: 'var(--color-text-primary)', outline: 'none'
                  }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <label style={{ fontSize: 12, color: 'var(--color-text-secondary)' }}>Score (0 – 10)</label>
                <input
                  type="number"
                  min={0} max={10} step={0.5}
                  value={score}
                  onChange={(e) => setScore(e.target.value)}
                  placeholder="e.g. 8.5"
                  style={{
                    padding: '8px 12px', borderRadius: 8, fontSize: 14,
                    border: '0.5px solid var(--color-border-secondary)',
                    background: 'var(--color-background-secondary)',
                    color: 'var(--color-text-primary)', outline: 'none'
                  }}
                />
              </div>

              {submitError && (
                <p style={{ fontSize: 12, color: 'var(--color-text-danger)', margin: 0 }}>
                  {submitError}
                </p>
              )}

              <button
                onClick={handleSubmit}
                disabled={submitting}
                style={{
                  padding: '9px 20px', borderRadius: 8,
                  fontSize: 14, fontWeight: 500,
                  background: submitting ? 'var(--color-background-secondary)' : 'var(--color-text-primary)',
                  color: submitting ? 'var(--color-text-secondary)' : 'var(--color-background-primary)',
                  border: 'none', cursor: submitting ? 'not-allowed' : 'pointer',
                  transition: 'opacity 0.15s'
                }}
              >
                {submitting ? 'Submitting…' : 'Submit Score'}
              </button>

              {/* Existing individual scores */}
              {getScores(selectedTeam.id).length > 0 && (
                <div style={{ borderTop: '0.5px solid var(--color-border-tertiary)', paddingTop: 12 }}>
                  <p style={{ fontSize: 11, color: 'var(--color-text-secondary)', margin: '0 0 8px' }}>
                    Judge scores
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {getScores(selectedTeam.id).map((s, i) => (
                      <div key={i} style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        fontSize: 13
                      }}>
                        <span style={{ color: 'var(--color-text-secondary)' }}>{s.judge_name || 'Judge'}</span>
                        <span style={{
                          fontWeight: 500,
                          color: getAnomalies(selectedTeam.id).find(a => a.id === s.id)
                            ? 'var(--color-text-warning)'
                            : 'var(--color-text-primary)'
                        }}>
                          {s.score} / 10
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Rubric Panel */}
            <div style={{
              background: 'var(--color-background-primary)',
              border: '0.5px solid var(--color-border-tertiary)',
              borderRadius: 12, padding: 20,
              display: 'flex', flexDirection: 'column', gap: 10
            }}>
              <p style={{ fontSize: 13, fontWeight: 500, margin: 0, color: 'var(--color-text-primary)' }}>
                AI Rubric
              </p>

              {rubricLoading ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 4 }}>
                  {[100, 80, 90, 70].map((w, i) => (
                    <div key={i} style={{
                      height: 14, borderRadius: 6,
                      background: 'var(--color-background-secondary)',
                      width: `${w}%`, animation: 'pulse 1.5s ease-in-out infinite'
                    }} />
                  ))}
                </div>
              ) : rubric ? (
                <div style={{
                  fontSize: 13, lineHeight: 1.7,
                  color: 'var(--color-text-secondary)',
                  whiteSpace: 'pre-wrap'
                }}>
                  {rubric}
                </div>
              ) : (
                <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', margin: 0 }}>
                  No rubric generated.
                </p>
              )}
            </div>
          </div>

          {/* Anomaly Warning */}
          {anomaliesForSelected.length > 0 && (
            <div style={{
              background: '#faeeda', border: '0.5px solid #fac775',
              borderRadius: 10, padding: '12px 16px',
              display: 'flex', gap: 10, alignItems: 'flex-start'
            }}>
              <svg style={{ flexShrink: 0, marginTop: 2 }} width="16" height="16" viewBox="0 0 24 24"
                fill="none" stroke="#ba7517" strokeWidth="2">
                <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              <div>
                <p style={{ fontSize: 13, fontWeight: 500, color: '#854f0b', margin: '0 0 2px' }}>
                  Score anomaly detected
                </p>
                <p style={{ fontSize: 12, color: '#ba7517', margin: 0 }}>
                  {anomaliesForSelected.length} score{anomaliesForSelected.length > 1 ? 's deviate' : ' deviates'} more than 2 points from the panel average. Flag for committee review.
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}
