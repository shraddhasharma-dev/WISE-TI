import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminDashboard from "./pages/AdminDashboard";
import ParticipantStatus from "./pages/ParticipantStatus";
import JudgeEvaluation from "./pages/JudgeEvaluation";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/participant/status" element={<ParticipantStatus />} />
        <Route path="/judge/evaluate" element={<JudgeEvaluation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;