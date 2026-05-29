import React, { useEffect, useState } from "react";
import { activityApi } from "../../api";

function ActivityFeed() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await activityApi.getLog();
        setLogs(res.logs || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    load();
    const interval = setInterval(load, 5000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (ts) => {
    if (!ts) return "Just now";
    const d = new Date(ts);
    return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const recentLogs = logs.slice(0, 5);

  return (
    <div className="bg-white rounded-xl p-5 shadow">
      <h2 className="text-base font-bold text-[#012d1d] mb-3">Activity Feed</h2>

      {loading ? (
        <p className="text-xs text-gray-400">Loading...</p>
      ) : recentLogs.length === 0 ? (
        <p className="text-xs text-gray-400">No activity yet</p>
      ) : (
        <div className="space-y-3">
          {recentLogs.map((log) => (
            <div key={log.id} className="flex items-start gap-2 border-b border-gray-50 pb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
              <div>
                <p className="text-xs text-[#012d1d]">{log.details}</p>
                <p className="text-[10px] text-gray-400 mt-0.5">{formatTime(log.created_at)}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ActivityFeed;