export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(reg => {
          console.log('[Service Worker] Registered successfully:', reg);
        })
        .catch(err => {
          console.error('[Service Worker] Registration failed:', err);
        });
    });
  }
}
