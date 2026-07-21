self.addEventListener('install', (e) => { self.skipWaiting(); });
self.addEventListener('activate', (e) => { e.waitUntil(clients.claim()); });
self.addEventListener('fetch', (e) => {
  // บังคับดึงข้อมูลใหม่จากเซิร์ฟเวอร์เสมอ ไม่ใช้ความจำเก่า
  e.respondWith(fetch(e.request));
});