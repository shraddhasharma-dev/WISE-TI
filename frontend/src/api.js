// ─── Base Config ──────────────────────────────────────────────────────────────
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

async function request(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json', ...options.headers },
    ...options,
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.detail || `API error ${res.status}`);
  }
  return res.json();
}

// ─── Participants ──────────────────────────────────────────────────────────────
export const participantsApi = {
  getAll: () => request('/participants'),

  getById: (id) => request(`/participants/${id}`),

  add: (data) =>
    request('/participants', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  updateStage: (id, stage) =>
    request(`/participants/${id}/stage`, {
      method: 'PUT',
      body: JSON.stringify({ stage }),
    }),

  delete: (participantId) =>
    request(`/participants/${participantId}`, {
      method: "DELETE",
    }),
};

// ─── Teams ────────────────────────────────────────────────────────────────────
export const teamsApi = {
  getAll: () => request('/teams'),

  create: (data) =>
    request('/teams', {
      method: 'POST',
      body: JSON.stringify(data),
      // data shape: { name, participant_ids: [] }
    }),
    delete: (teamId) =>
  request(`/teams/${teamId}`, {
    method: "DELETE",
  }),
};

// ─── Scores ───────────────────────────────────────────────────────────────────
export const scoresApi = {
  submit: (data) =>
    request('/scores', {
      method: 'POST',
      body: JSON.stringify(data),
      // data shape: { team_id, judge_name, score }
    }),

  getByTeam: (teamId) => request(`/scores/${teamId}`),
};

// ─── Activity Log ─────────────────────────────────────────────────────────────
export const activityApi = {
  getLog: () => request('/activity-log'),
};

// ─── AI Features ──────────────────────────────────────────────────────────────
export const aiApi = {
  generateRationale: (data) =>
    request('/generate-rationale', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  draftEmail: (data) =>
    request('/draft-email', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  generateRubric: (data) =>
    request('/generate-rubric', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  explainAnomaly: (data) =>
    request('/explain-anomaly', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  compatibilitySummary: (data) =>
    request('/compatibility-summary', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  configureEvent: (data) =>
    request('/configure-event', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
};

// ─── Custom React Hook: useApi ─────────────────────────────────────────────────
// Usage: const { data, loading, error, refetch } = useApi(apiFn, ...args)
import { useState, useEffect, useCallback } from 'react';

export function useApi(apiFn, ...args) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetch = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await apiFn(...args);
      setData(result);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(args)]);

  useEffect(() => { fetch(); }, [fetch]);

  return { data, loading, error, refetch: fetch };
}
