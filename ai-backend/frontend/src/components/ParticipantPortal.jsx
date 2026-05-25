import { useState, useEffect } from "react"

const API = "http://127.0.0.1:9999"

export default function ParticipantPortal({ participantId }) {
  const [participant, setParticipant] = useState(null)
  const [team, setTeam] = useState(null)
  const [scores, setScores] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${API}/participants`)
      .then(r => r.json())
      .then(data => {
        const p = data.participants.find(p => p.id === participantId)
        setParticipant(p)
        setLoading(false)
      })
  }, [participantId])

  useEffect(() => {
    fetch(`${API}/teams`)
      .then(r => r.json())
      .then(data => {
        if (data.teams.length > 0) setTeam(data.teams[0])
      })
  }, [])

  useEffect(() => {
    fetch(`${API}/scores/1`)
      .then(r => r.json())
      .then(data => setScores(data))
  }, [])

  if (loading) return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-gray-500 text-lg">Loading your portal...</p>
    </div>
  )

  if (!participant) return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-red-500">Participant not found.</p>
    </div>
  )

  return (
    <div className="max-w-2xl mx-auto p-6">
      
      {/* Header */}
      <div className="bg-white rounded-2xl shadow p-6 mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Hey, {participant.name} 👋</h1>
        <p className="text-gray-500 mt-1">{participant.institution} · {participant.skill}</p>
        <span className="inline-block mt-3 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
          Active Participant
        </span>
      </div>

      {/* Event Stage */}
      <div className="bg-white rounded-2xl shadow p-6 mb-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-3">Event Progress</h2>
        <div className="flex items-center gap-2">
          {["Roster", "Teams", "Evaluation", "Results"].map((stage, i) => (
            <div key={stage} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                i <= 1 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-400"
              }`}>
                {i + 1}
              </div>
              <span className={`text-sm ${i <= 1 ? "text-blue-600 font-medium" : "text-gray-400"}`}>
                {stage}
              </span>
              {i < 3 && <div className={`w-8 h-0.5 ${i < 1 ? "bg-blue-500" : "bg-gray-200"}`} />}
            </div>
          ))}
        </div>
      </div>

      {/* Team Details */}
      {team && (
        <div className="bg-white rounded-2xl shadow p-6 mb-4">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Your Team</h2>
          <p className="text-2xl font-bold text-blue-600">{team.name}</p>
          <p className="text-gray-600 mt-2 text-sm leading-relaxed">{team.rationale}</p>
          <div className="mt-3 flex items-center gap-2">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              team.status === "approved" 
                ? "bg-green-100 text-green-700" 
                : "bg-yellow-100 text-yellow-700"
            }`}>
              {team.status === "approved" ? "✓ Approved" : "⏳ Pending Approval"}
            </span>
          </div>
        </div>
      )}

      {/* Scores */}
      {scores && scores.scores.length > 0 && (
        <div className="bg-white rounded-2xl shadow p-6 mb-4">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">Evaluation</h2>
          <p className="text-3xl font-bold text-gray-800">{scores.average.toFixed(1)}<span className="text-lg text-gray-400">/10</span></p>
          <p className="text-gray-500 text-sm mt-1">Panel average across {scores.scores.length} judges</p>
        </div>
      )}

      {/* Key Dates */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-3">Key Dates</h2>
        <div className="space-y-2">
          {[
            { label: "Team Formation", date: "May 21, 2026", done: true },
            { label: "Evaluation Phase", date: "May 25, 2026", done: false },
            { label: "Results", date: "May 28, 2026", done: false },
          ].map(item => (
            <div key={item.label} className="flex justify-between items-center">
              <span className={`text-sm ${item.done ? "text-gray-400 line-through" : "text-gray-700"}`}>
                {item.label}
              </span>
              <span className="text-sm text-gray-500">{item.date}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}