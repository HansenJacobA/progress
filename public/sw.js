(async function initializeServiceWorker() {
  self.addEventListener("install", onInstall);
  self.addEventListener("activate", onActivate);
  self.addEventListener("message", onMessage);
  self.addEventListener("fetch", onFetch);

  let isOnline = true;
  const assets = [
    "/",
    "/offline",
    "/favicon.ico",
    "/app.webmanifest",
    "/icons/icon-512.png",
    "/icons/icon-1024.png",
    "/icons/maskable_icon.png",
  ];

  main().catch(console.error);

  async function main() {
    await sendMessage({ requestStatusUpdate: true });
    await cacheAssets();
  }

  async function onFetch(event) {
    event.respondWith(router(event.request));
  }

  async function router(request) {
    const url = new URL(request.url);
    const { pathname } = url;
    const fetchOptions = {
      method: request.method,
      headers: request.headers,
      cache: "no-cache",
      credentials: "same-origin",
    };

    if (url.origin === location.origin) {
      if (
        pathname.startsWith("/api/") ||
        // Made up header to identify personalized content
        request.headers.get("X-Is-Personalized")
      ) {
        // Network First strategy for API requests and personalized content
        return await networkFirst(request, fetchOptions);
      } else if (request.headers.get("Accept").includes("text/html")) {
        // Stale While Revalidate strategy for articles and dynamic content
        return await staleWhileRevalidate(request, fetchOptions);
      } else {
        // Cache First strategy for static assets
        return await cacheFirst(request, fetchOptions);
      }
    }
  }

  async function cacheFirst(request, fetchOptions) {
    const cache = await caches.open("assets");
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse.clone();
    } else {
      try {
        const response = await fetch(request, fetchOptions);
        if (response.ok) {
          await cache.put(request, response.clone());
        }
        return response.clone();
      } catch (e) {
        console.log(`Error fetching asset: ${request.url}`);
        return notFoundResponse();
      }
    }
  }

  async function networkFirst(request, fetchOptions) {
    const cache = await caches.open("dynamic-content");
    if (isOnline) {
      try {
        const response = await fetch(request, fetchOptions);
        if (response.ok) {
          await cache.put(request, response.clone());
        }
        return response.clone();
      } catch (e) {
        console.log(`Error fetching asset: ${request.url}`);
      }
    }

    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse.clone();
    } else {
      return cache.match("/offline");
    }
  }

  async function staleWhileRevalidate(request, fetchOptions) {
    const cache = await caches.open("dynamic-content");
    const cachedResponse = await cache.match(request);

    const fetchAndUpdateCache = async () => {
      try {
        const response = await fetch(request, fetchOptions);
        if (response.ok) {
          await cache.put(request, response.clone());
        }
      } catch (e) {
        console.log(`Error fetching asset: ${request.url}`);
      }
    };

    if (cachedResponse) {
      fetchAndUpdateCache();
      return cachedResponse.clone();
    } else {
      const response = await fetch(request, fetchOptions);
      if (response.ok) {
        await cache.put(request, response.clone());
      }
      return response.clone();
    }
  }

  function notFoundResponse() {
    return new Response("", {
      status: 404,
      statusText: "Not found",
    });
  }

  async function sendMessage(msg) {
    // eslint-disable-next-line no-undef
    const allClients = await clients.matchAll({ includeUncontrolled: true });
    return Promise.all(
      allClients.map(function clientMessage(client) {
        const channel = new MessageChannel();
        channel.port1.onmessage = onMessage;
        return client.postMessage(msg, [channel.port2]);
      })
    );
  }

  function onMessage(event) {
    const { data } = event;
    if (data.statusUpdate) {
      isOnline = data.statusUpdate.isOnline;
      console.log(`Service worker is online: ${isOnline}`);
    }
  }

  async function onInstall() {
    console.log(`Service worker is installing...`);
    self.skipWaiting();
  }

  async function onActivate(event) {
    event.waitUntil(handleActivation());
  }

  async function handleActivation() {
    await clearOldCaches();
    await cacheAssets(/*forceReload=*/ true);
    // eslint-disable-next-line no-undef
    await clients.claim();
    console.log(`Service worker is activated...`);
  }

  async function clearOldCaches() {
    const cacheNames = await caches.keys();
    const oldCacheNames = cacheNames.filter(
      (name) => !["assets", "dynamic-content"].includes(name)
    );
    await Promise.all(oldCacheNames.map((name) => caches.delete(name)));
  }

  async function cacheAssets(forceReload = false) {
    const cache = await caches.open("assets");
    return Promise.all(
      assets.map(async function cacheFile(asset) {
        try {
          if (!forceReload) {
            const cachedResponse = await cache.match(asset);
            if (cachedResponse) {
              return cachedResponse.clone();
            }
          }
          const fetchOptions = {
            method: "GET",
            cache: "no-cache",
            credentials: "same-origin",
          };
          const response = await fetch(asset, fetchOptions);
          if (response.ok) {
            await cache.put(asset, response.clone());
          }
          return response.clone();
        } catch (e) {
          console.log(`Error caching asset: ${asset}`);
        }
      })
    );
  }
})().catch(console.error);
