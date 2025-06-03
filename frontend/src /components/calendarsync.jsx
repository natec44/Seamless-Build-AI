import React from 'react';

const CalendarSync = () => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <h2 className="text-lg font-semibold">Calendar Sync</h2>
      <button className="bg-blue-600 text-white px-4 py-2 mt-2 rounded">Sync with Google</button>
      <button className="bg-gray-600 text-white px-4 py-2 mt-2 rounded">Sync with Apple</button>
      <button className="bg-black text-white px-4 py-2 mt-2 rounded">Sync with Microsoft</button>
    </div>
  );
};

export default CalendarSync;
