// Install Service Worker
self.addEventListener('install', (e) => { 
  self.skipWaiting(); 
});

// Activate Service Worker
self.addEventListener('activate', (e) => { 
  e.waitUntil(clients.claim()); 
});

// Fetch Request (Bypass cache)
self.addEventListener('fetch', (e) => {
  // บังคับให้ดึงข้อมูลจากเซิร์ฟเวอร์เสมอ (ไม่ใช้แคชเก่า) เพื่อให้ข้อมูลสินค้าอัปเดตตรงกันตลอดเวลา
  e.respondWith(fetch(e.request));
});