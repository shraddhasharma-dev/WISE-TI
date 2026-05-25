import { useState, useEffect } from "react"
import ParticipantPortal from "./components/ParticipantPortal"

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ParticipantPortal participantId={1} />
    </div>
  )
}

export default App