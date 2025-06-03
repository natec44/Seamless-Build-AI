import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Week 1', completed: 30 },
  { name: 'Week 2', completed: 45 },
  { name: 'Week 3', completed: 60 },
];

const AnalyticsPanel = () => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <h2 className="text-xl font-bold mb-4">Project Progress</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="completed" fill="#4ade80" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnalyticsPanel;
