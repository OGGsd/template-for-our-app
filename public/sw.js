const CACHE_NAME = 'klippcenter-jkpg-v2.0.0';
const STATIC_CACHE = 'klippcenter-static-v2.0.0';
const DYNAMIC_CACHE = 'klippcenter-dynamic-v2.0.0';
const IMAGE_CACHE = 'klippcenter-images-v2.0.0';

// Core files to cache immediately for TWA compatibility
const CORE_FILES = [
  '/',
  '/index.html',
  '/manifest.json',
  '/Logo.jpg',
  '/Hero Section Background.jpg'
];

// Static assets to cache
const STATIC_ASSETS = [
  '/src/main.tsx',
  '/src/App.tsx',
  '/src/index.css'
];

// Install event - cache core files
self.addEventListener('install', (event) => {
  console.log('PWA: Service Worker installing...');
  
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE).then((cache) => {
        console.log('PWA: Caching core files');
        return cache.addAll(CORE_FILES);
      }),
      caches.open(DYNAMIC_CACHE).then((cache) => {
        console.log('PWA: Dynamic cache opened');
        return Promise.resolve();
      }),
      caches.open(IMAGE_CACHE).then((cache) => {
        console.log('PWA: Image cache opened');
        return Promise.resolve();
      })
    ]).then(() => {
      console.log('PWA: Installation complete');
      return self.skipWaiting();
    })
  );
});

// Activate event - clean old caches
self.addEventListener('activate', (event) => {
  console.log('PWA: Service Worker activating...');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && 
              cacheName !== DYNAMIC_CACHE && 
              cacheName !== IMAGE_CACHE) {
            console.log('PWA: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('PWA: Activation complete');
      return self.clients.claim();
    })
  );
});

// Enhanced fetch event for TWA compatibility
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip external URLs (except for specific domains we want to cache)
  if (url.origin !== location.origin && 
      !url.hostname.includes('vercel-storage.com') && 
      !url.hostname.includes('googleapis.com') &&
      !url.hostname.includes('gstatic.com')) {
    return;
  }

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      // Return cached version if available
      if (cachedResponse) {
        console.log('PWA: Serving from cache:', request.url);
        
        // For HTML requests, also try to update in background
        if (request.destination === 'document') {
          fetch(request).then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              caches.open(STATIC_CACHE).then((cache) => {
                cache.put(request, networkResponse.clone());
              });
            }
          }).catch(() => {
            // Network failed, but we have cache
          });
        }
        
        return cachedResponse;
      }

      // Otherwise fetch from network
      return fetch(request).then((networkResponse) => {
        // Don't cache if not a valid response
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }

        // Clone the response
        const responseToCache = networkResponse.clone();

        // Determine which cache to use
        let cacheToUse = DYNAMIC_CACHE;
        
        // Cache images in image cache
        if (request.destination === 'image' || 
            request.url.includes('.png') ||
            request.url.includes('.jpg') ||
            request.url.includes('.jpeg') ||
            request.url.includes('.svg') ||
            request.url.includes('.webp')) {
          cacheToUse = IMAGE_CACHE;
        }
        // Cache static assets in static cache
        else if (STATIC_ASSETS.some(asset => request.url.includes(asset)) ||
                 request.url.includes('.css') ||
                 request.url.includes('.js') ||
                 request.destination === 'document') {
          cacheToUse = STATIC_CACHE;
        }

        // Add to cache
        caches.open(cacheToUse).then((cache) => {
          console.log('PWA: Caching new resource:', request.url);
          cache.put(request, responseToCache);
        });

        return networkResponse;
      }).catch(() => {
        // Offline fallback
        console.log('PWA: Network failed, serving offline fallback');
        
        // Return offline page for navigation requests
        if (request.destination === 'document') {
          return caches.match('/') || new Response(
            `<!DOCTYPE html>
            <html lang="sv">
            <head>
              <title>KLIPPCENTER | JKPG - Offline</title>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <style>
                body { 
                  font-family: 'Inter', Arial, sans-serif; 
                  text-align: center; 
                  padding: 40px 20px; 
                  background: linear-gradient(135deg, #99695a, #b77a68);
                  min-height: 100vh;
                  margin: 0;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                }
                .offline-container {
                  max-width: 400px;
                  background: white;
                  padding: 40px 30px;
                  border-radius: 25px;
                  box-shadow: 0 20px 50px rgba(0,0,0,0.2);
                }
                .logo {
                  width: 80px;
                  height: 80px;
                  background: #99695a;
                  border-radius: 20px;
                  margin: 0 auto 20px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-size: 24px;
                  color: white;
                  font-weight: bold;
                }
                h1 { 
                  color: #333; 
                  margin: 0 0 15px 0; 
                  font-size: 24px;
                  font-weight: bold;
                }
                p { 
                  color: #666; 
                  margin: 0 0 25px 0; 
                  line-height: 1.6;
                }
                .btn {
                  background: #99695a;
                  color: white;
                  padding: 15px 30px;
                  border: none;
                  border-radius: 25px;
                  font-weight: bold;
                  cursor: pointer;
                  text-decoration: none;
                  display: inline-block;
                  font-size: 16px;
                  transition: all 0.3s ease;
                  margin: 5px;
                }
                .btn:hover {
                  background: #b77a68;
                  transform: translateY(-2px);
                }
                .offline-features {
                  background: #f8f9fa;
                  padding: 20px;
                  border-radius: 15px;
                  margin: 20px 0;
                  text-align: left;
                }
                .feature {
                  margin: 10px 0;
                  display: flex;
                  align-items: center;
                }
                .feature-icon {
                  margin-right: 10px;
                  font-size: 18px;
                }
              </style>
            </head>
            <body>
              <div class="offline-container">
                <div class="logo">K</div>
                <h1>🔌 Du är offline</h1>
                <p>Ingen internetanslutning hittades, men du kan fortfarande använda vissa funktioner.</p>
                
                <div class="offline-features">
                  <div class="feature">
                    <span class="feature-icon">📞</span>
                    <span>Ring oss direkt</span>
                  </div>
                  <div class="feature">
                    <span class="feature-icon">📍</span>
                    <span>Se vår adress</span>
                  </div>
                  <div class="feature">
                    <span class="feature-icon">🕒</span>
                    <span>Kolla öppettider</span>
                  </div>
                </div>
                
                <a href="tel:036712300" class="btn">📞 Ring: 036-712 300</a>
                <button onclick="window.location.reload()" class="btn">🔄 Försök igen</button>
              </div>
            </body>
            </html>`,
            {
              headers: { 
                'Content-Type': 'text/html',
                'Cache-Control': 'no-cache'
              }
            }
          );
        }

        // Return cached image or placeholder for images
        if (request.destination === 'image') {
          return new Response(
            `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
              <rect width="400" height="300" fill="#f3f4f6"/>
              <circle cx="200" cy="120" r="30" fill="#d1d5db"/>
              <rect x="170" y="160" width="60" height="40" rx="5" fill="#d1d5db"/>
              <text x="200" y="220" text-anchor="middle" fill="#6b7280" font-family="Arial" font-size="14">
                KLIPPCENTER | JKPG
              </text>
              <text x="200" y="240" text-anchor="middle" fill="#9ca3af" font-family="Arial" font-size="12">
                Bild ej tillgänglig offline
              </text>
            </svg>`,
            { 
              headers: { 
                'Content-Type': 'image/svg+xml',
                'Cache-Control': 'no-cache'
              } 
            }
          );
        }

        return new Response('Offline - Innehåll ej tillgängligt', {
          status: 503,
          statusText: 'Service Unavailable',
          headers: {
            'Content-Type': 'text/plain',
            'Cache-Control': 'no-cache'
          }
        });
      });
    })
  );
});

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  console.log('PWA: Background sync triggered:', event.tag);
  
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Handle any offline actions here
      Promise.resolve().then(() => {
        console.log('PWA: Background sync completed');
      })
    );
  }
});

// Enhanced push notification handling
self.addEventListener('push', (event) => {
  console.log('PWA: Push notification received');
  
  let notificationData = {
    title: 'KLIPPCENTER | JKPG',
    body: 'Ny uppdatering från KLIPPCENTER | JKPG',
    icon: '/Logo.jpg',
    badge: '/Logo.jpg',
    image: '/Hero Section Background.jpg'
  };

  if (event.data) {
    try {
      notificationData = { ...notificationData, ...event.data.json() };
    } catch (e) {
      notificationData.body = event.data.text();
    }
  }

  const options = {
    body: notificationData.body,
    icon: notificationData.icon,
    badge: notificationData.badge,
    image: notificationData.image,
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1,
      url: notificationData.url || '/'
    },
    actions: [
      {
        action: 'open',
        title: 'Öppna App',
        icon: '/Logo.jpg'
      },
      {
        action: 'book',
        title: 'Boka Tid',
        icon: '/Logo.jpg'
      },
      {
        action: 'close',
        title: 'Stäng'
      }
    ],
    requireInteraction: true,
    silent: false
  };

  event.waitUntil(
    self.registration.showNotification(notificationData.title, options)
  );
});

// Enhanced notification click handling
self.addEventListener('notificationclick', (event) => {
  console.log('PWA: Notification clicked:', event.action);
  
  event.notification.close();

  let targetUrl = '/';
  
  if (event.action === 'open') {
    targetUrl = event.notification.data?.url || '/';
  } else if (event.action === 'book') {
    targetUrl = '/#behandlingar';
  } else if (event.action === 'close') {
    return;
  } else {
    // Default click
    targetUrl = event.notification.data?.url || '/';
  }

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      // Check if app is already open
      for (const client of clientList) {
        if (client.url.includes(self.location.origin) && 'focus' in client) {
          client.focus();
          if (targetUrl !== '/') {
            client.postMessage({ action: 'navigate', url: targetUrl });
          }
          return;
        }
      }
      
      // Open new window
      if (clients.openWindow) {
        return clients.openWindow(targetUrl);
      }
    })
  );
});

// Message handling for communication with main app
self.addEventListener('message', (event) => {
  console.log('PWA: Message received:', event.data);
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
});

// Periodic background sync (if supported)
self.addEventListener('periodicsync', (event) => {
  console.log('PWA: Periodic sync triggered:', event.tag);
  
  if (event.tag === 'content-sync') {
    event.waitUntil(
      // Update content in background
      updateContent()
    );
  }
});

// Update content function
async function updateContent() {
  try {
    const cache = await caches.open(STATIC_CACHE);
    const response = await fetch('/');
    if (response.ok) {
      await cache.put('/', response);
      console.log('PWA: Content updated in background');
    }
  } catch (error) {
    console.error('PWA: Background content update failed:', error);
  }
}

// Cache management - clean up old entries
setInterval(() => {
  caches.open(IMAGE_CACHE).then((cache) => {
    cache.keys().then((keys) => {
      if (keys.length > 100) {
        // Remove oldest entries if cache is too large
        const oldestKeys = keys.slice(0, 20);
        oldestKeys.forEach((key) => {
          cache.delete(key);
        });
        console.log('PWA: Cleaned up old cache entries');
      }
    });
  });
}, 60000 * 60); // Run every hour