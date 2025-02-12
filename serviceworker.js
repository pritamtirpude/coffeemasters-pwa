self.addEventListener("install", async (event) => {
  const cache = await caches.open("cm-appshell");
  cache.addAll([
    "/",
    "/styles.css",
    "/scripts/app.js",
    "/scripts/API.js",
    "/scripts/Menu.js",
    "/scripts/Order.js",
    "/scripts/Router.js",
    "/images/logo.svg",
    "https://cdn.jsdelivr.net/npm/idb@7/build/umd.js",
    "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap",
    "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0",
  ]);
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    (async () => {
      const cachedResponse = await caches.match(event.request);
      if (cachedResponse) {
        return cachedResponse;
      } else {
        return fetch(event.request);
      }
    })()
  );
});
