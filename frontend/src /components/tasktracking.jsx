import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TaskTracking = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/tasks`)
      .then((res) => setTasks(res.data))
      .catch((err) => console.error('Failed to fetch tasks:', err));
  }, []);

  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <h2 className="text-lg font-semibold">Task Tracking</h2>
      <ul className="mt-2">
        {tasks.map((task) => (
          <li key={task._id} className="border-b py-1">
            {task.title} – {task.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskTracking;
import { saveToIndexedDB } from '../utils/indexedDBUtils';

async function handleSubmit(taskData) {
  try {
    await axios.post('/api/tasks/update', taskData);
  } catch (err) {
    if (!navigator.onLine) {
      await saveToIndexedDB('offlineTasks', taskData);

      if ('serviceWorker' in navigator && 'SyncManager' in window) {
        const reg = await navigator.serviceWorker.ready;
        await reg.sync.register('sync-tasks');
        console.log('Background sync registered');
      } else {
        console.warn('Background sync not supported');
      }
    }
  }
}
