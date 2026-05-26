import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import AdminDashboard from "./pages/AdminDashboard";
import ParticipantDashboard from "./pages/ParticipantDashboard";
import JudgeDashboard from "./pages/JudgeDashboard";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* ADMIN */}
        <Route
          path="/admin/dashboard"
          element={<AdminDashboard />}
        />

        {/* PARTICIPANT */}
        <Route
          path="/participant/dashboard"
          element={<ParticipantDashboard />}
        />

        {/* JUDGE */}
        <Route
          path="/judge/dashboard"
          element={<JudgeDashboard />}
        />

        {/* DEFAULT ROUTE */}
        <Route
          path="*"
          element={
            <Navigate to="/participant/dashboard" />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;