(async function initializeServiceWorker() {
  self.addEventListener("install", onInstall);
  self.addEventListener("activate", onActivate);
  self.addEventListener("message", onMessage);
  self.addEventListener("fetch", onFetch);

  const version = 2;
  const cacheName = `static::${version}`;
  let isOnline = true;

  main().catch(console.error);

  async function main() {
    await sendMessage({ requestStatusUpdate: true });
    const response = await fetch("/api/assets");
    const { assets } = await response.json();
    await cacheAssets(assets);
  }

  async function onFetch(event) {
    event.respondWith(router(event.request));
  }

  async function router(request) {
    const url = new URL(request.url);
    const { pathname } = url;
    const cache = await caches.open(cacheName);
    const fetchOptions = {
      method: request.method,
      headers: request.headers,
      cache: "no-cache",
      credentials: "same-origin",
    };
    if (url.origin === location.origin) {
      if (pathname.startsWith("/api/")) {
        if (isOnline) {
          try {
            const response = await fetch(request.url || request, fetchOptions);
            if (response && response.ok) {
              if (request.method === "GET") {
                await cache.put(url, response.clone());
              }
              return response;
            }
          } catch (e) {
            console.log(`Error fetching asset: ${url}`);
          }
        }
        const cachedResponse = await cache.match(url);
        if (cachedResponse) {
          return cachedResponse.clone();
        }
        return notFoundResponse();
      } else if (request.headers.get("Accept").includes("text/html")) {
        if (isOnline) {
          try {
            const response = await fetch(request.url || request, fetchOptions);
            if (response && response.ok) {
              if (request.status !== 404) {
                await cache.put(url, response.clone());
              }
              return response;
            }
          } catch (e) {
            console.log(`Error fetching asset: ${url}`);
          }
        }
        const cachedResponse = await cache.match(url);
        if (cachedResponse) {
          return cachedResponse.clone();
        }
        return cache.match("/offline");
      } else {
        const cachedResponse = await cache.match(url);
        if (cachedResponse) {
          return cachedResponse.clone();
        } else {
          if (isOnline) {
            try {
              const response = await fetch(
                request.url || request,
                fetchOptions
              );
              if (response && response.ok) {
                await cache.put(url, response.clone());
                return response;
              }
            } catch (e) {
              console.log(`Error fetching asset: ${url}`);
            }
          }
          return notFoundResponse();
        }
      }
    } else {
      // If the request is not for the current origin, then figure out CORS requests
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
      console.log(`Service worker v${version} is online: ${isOnline}`);
    }
  }

  async function onInstall() {
    console.log(`Service worker v${version} is installing...`);
    self.skipWaiting();
  }

  async function onActivate(event) {
    event.waitUntil(handleActivation());
  }

  async function handleActivation() {
    await clearCaches();
    const response = await fetch("/api/assets");
    const { assets } = await response.json();
    await cacheAssets(assets, /*forceReload=*/ true);
    // eslint-disable-next-line no-undef
    await clients.claim();
    console.log(`Service worker v${version} is activated...`);
  }

  async function clearCaches() {
    const cacheNames = await caches.keys();
    const oldCacheNames = cacheNames.filter(function matchOldCache(cacheName) {
      if (cacheName.startsWith("static::")) {
        let [, cacheVersion] = cacheName.split("::");
        cacheVersion =
          cacheVersion != null ? Number(cacheVersion) : cacheVersion;
        return cacheVersion > 0 && cacheVersion != version;
      }
    });
    return Promise.all(
      oldCacheNames.map(function deleteCache(cacheName) {
        return caches.delete(cacheName);
      })
    );
  }

  async function cacheAssets(assets, forceReload = false) {
    const cache = await caches.open(cacheName);
    return Promise.all(
      assets.map(async function cacheFile(asset) {
        try {
          if (!forceReload) {
            const cachedResponse = await cache.match(asset);
            if (cachedResponse) {
              return cachedResponse;
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
          return response;
        } catch (e) {
          console.log(`Error caching asset: ${asset}`);
        }
      })
    );
  }
})().catch(console.error);
