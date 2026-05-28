import React, { useState } from 'react';
import LandingPage from './pages/LandingPage';
import AdminDashboard from './pages/AdminDashboard';
import JudgeDashboard from './pages/JudgeDashboard';
import ParticipantDashboard from './pages/ParticipantDashboard';

function App() {
  // Use status state for role-based view switching
  const [currentView, setCurrentView] = useState('landing');

  const renderView = () => {
    switch (currentView) {
      case 'admin':
        return <AdminDashboard onBack={() => setCurrentView('landing')} />;
      case 'judge':
        return <JudgeDashboard onBack={() => setCurrentView('landing')} />;
      case 'participant':
        return <ParticipantDashboard onBack={() => setCurrentView('landing')} />;
      case 'landing':
      default:
        return <LandingPage onNavigate={(role) => setCurrentView(role)} />;
    }
  };

  return (
    <>
      {renderView()}
    </>
  );
}

export default App;