const assets = ["/", "./", "../"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open("assets")
      .then((cache) => {
        cache.addAll(assets);
      })
      .catch((error) => {
        console.error("Error installing in service worker ", error);
      })
  );
});

// Stale while revalidate strategy
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((cachedResponse) => {
        // Even if the response is in the cache, we fetch it
        // and update the cache for future usage
        const fetchPromise = fetch(event.request).then((networkResponse) => {
          caches
            .open("assets")
            .then((cache) => {
              cache.put(event.request, networkResponse.clone());
              return networkResponse;
            })
            .catch((error) => {
              console.log(
                "Error saving fetch response to cache in service worker. ",
                error
              );
            });
        });
        // We use the currently cached version if it's there
        return cachedResponse || fetchPromise; // cached or a network fetch
      })
      .catch((error) => {
        console.log(
          "You're probably offline. Error serving cache in service worker. ",
          error
        );
      })
  );
});
