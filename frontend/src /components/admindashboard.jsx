import React from 'react';
import NotificationsPanel from './NotificationsPanel';
import AnalyticsPanel from './AnalyticsPanel';
import TeamMembers from './TeamMembers';

const AdminDashboard = () => {
  return (
    <div className="p-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <NotificationsPanel />
      <AnalyticsPanel />
      <TeamMembers />
    </div>
  );
};

export default AdminDashboard;
