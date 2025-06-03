import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import NotificationsPanel from './components/NotificationsPanel';
import ProjectSelector from './components/ProjectSelector';
import TaskTracking from './components/TaskTracking';
import MaterialsVendorPanel from './components/MaterialsVendorPanel';
import CalendarSync from './components/CalendarSync';
import GanttChart from './components/GanttChart';
import TeamMembers from './components/TeamMembers';
import AdminDashboard from './components/AdminDashboard';
import AnalyticsPanel from './components/AnalyticsPanel';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/notifications" element={<NotificationsPanel />} />
        <Route path="/projects" element={<ProjectSelector />} />
        <Route path="/tasks" element={<TaskTracking />} />
        <Route path="/materials" element={<MaterialsVendorPanel />} />
        <Route path="/calendar-sync" element={<CalendarSync />} />
        <Route path="/gantt" element={<GanttChart />} />
        <Route path="/team" element={<TeamMembers />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/analytics" element={<AnalyticsPanel />} />
      </Routes>
    </Router>
  );
}

export default App;
