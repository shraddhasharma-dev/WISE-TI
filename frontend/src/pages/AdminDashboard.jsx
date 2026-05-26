import AdminLayout from "../layouts/AdminLayout";

import WorkflowTracker from "../components/dashboard/WorkflowTracker";
import StatsGrid from "../components/dashboard/StatsGrid";
import QuickActions from "../components/dashboard/QuickActions";
import LeaderboardTable from "../components/dashboard/LeaderboardTable";
import AlertCard from "../components/dashboard/AlertCard";
import ActivityFeed from "../components/dashboard/ActivityFeed";

function AdminDashboard() {
  return (
    <AdminLayout>

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

      </div>

    </AdminLayout>
  );
}

export default AdminDashboard;