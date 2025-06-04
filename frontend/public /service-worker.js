const CACHE_NAME = 'seamlessbuild-cache-v1';
const OFFLINE_URL = '/offline.html';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll([OFFLINE_URL, '/']);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request).then(response => {
      return response || caches.match(OFFLINE_URL);
    }))
  );
});

self.addEventListener('sync', event => {
  if (event.tag === 'sync-tasks') {
    event.waitUntil(syncOfflineTasks());
  }
});

async function syncOfflineTasks() {
  const db = await openDB();
  const tasks = await db.getAll('offlineTasks');

  for (const task of tasks) {
    try {
      await fetch('/api/tasks/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task),
      });
      await db.delete('offlineTasks', task.id);
    } catch (err) {
      console.error('Sync failed:', err);
    }
  }
}

self.addEventListener('push', event => {
  const data = event.data?.json() || {};
  const title = data.title || 'SeamlessBuild Notification';
  const options = {
    body: data.body || 'You have a new update.',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-96x96.png'
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('SeamlessBuildDB', 1);
    request.onupgradeneeded = event => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains('offlineTasks')) {
        db.createObjectStore('offlineTasks', { keyPath: 'id', autoIncrement: true });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}
