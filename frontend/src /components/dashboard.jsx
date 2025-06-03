import React from 'react';
import ProjectSelector from './ProjectSelector';
import GanttChart from './GanttChart';
import TaskTracking from './TaskTracking';

const Dashboard = () => {
  return (
    <div className="space-y-6 p-4">
      <ProjectSelector />
      <GanttChart />
      <TaskTracking />
    </div>
  );
};

export default Dashboard;
