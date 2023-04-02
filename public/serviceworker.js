(async function initializeServiceWorker() {
  // TODO: Implement stale while evaluate strategy
  // TODO: Implement version controlling by checking the version first, to see if we need to update the cache
  // TODO: Find what the unused JS in the \_app file is
  // TODO: Make each page in this application score 100 on Lighthouse
  // TODO: Practice creating a service worker from scratch for demo purposes
  // TODO: Add expirations to the cache, in particular to article pages

  // Functions that listen to the browser events
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
    const cache = await caches.open("assets");
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
              return response.clone();
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
              return response.clone();
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
        // This is for CSS assets, images, etc. we want to check cache first
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
                return response.clone();
              }
            } catch (e) {
              console.log(`Error fetching asset: ${url}`);
            }
          }
          return notFoundResponse();
        }
      }
    } else {
      // If the request is not for the current origin, then figure out CORS requests or pass request through
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
    await caches.delete("assets");
    await cacheAssets(/*forceReload=*/ true);
    // eslint-disable-next-line no-undef
    await clients.claim();
    console.log(`Service worker is activated...`);
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
