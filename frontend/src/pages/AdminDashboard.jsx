import React, { useState } from "react";
import AdminLayout from "../layouts/AdminLayout";

import WorkflowTracker from "../components/dashboard/WorkflowTracker";
import StatsGrid from "../components/dashboard/StatsGrid";
import QuickActions from "../components/dashboard/QuickActions";
import LeaderboardTable from "../components/dashboard/LeaderboardTable";
import AlertCard from "../components/dashboard/AlertCard";
import ActivityFeed from "../components/dashboard/ActivityFeed";
import EventSetupChat from "../components/dashboard/EventSetupChat.jsx";

import ParticipantsTab from "../components/dashboard/ParticipantsTab.jsx";
import TeamsTab from "../components/dashboard/TeamsTab.jsx";
import JudgesTab from "../components/dashboard/JudgesTab.jsx";
import EvaluationsTab from "../components/dashboard/EvaluationsTab.jsx";

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <AdminLayout activeTab={activeTab} setActiveTab={setActiveTab}>

      {activeTab === "Dashboard" && (
        <div className="space-y-8">
          <WorkflowTracker />
          <StatsGrid />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[24px]">
            <div className="lg:col-span-8 space-y-6">
              <QuickActions />
              <LeaderboardTable />
            </div>

            <div className="lg:col-span-4 space-y-6">
              <AlertCard />
              <ActivityFeed />
            </div>
          </div>

          {/* AI Event Setup — full width below grid */}
          <EventSetupChat />
        </div>
      )}

      {activeTab === "Participants" && <ParticipantsTab />}
      {activeTab === "Teams" && <TeamsTab />}
      {activeTab === "Judges" && <JudgesTab />}
      {activeTab === "Evaluations" && <EvaluationsTab />}

    </AdminLayout>
  );
}

export default AdminDashboard;
