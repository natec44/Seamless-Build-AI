import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NotificationsPanel = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/notifications`)
      .then((res) => setNotifications(res.data))
      .catch((err) => console.error('Failed to fetch notifications:', err));
  }, []);

  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <h2 className="text-lg font-semibold">Notifications</h2>
      <ul className="mt-2 space-y-2">
        {notifications.map((note) => (
          <li key={note._id} className="p-2 bg-gray-100 rounded">
            {note.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationsPanel;
