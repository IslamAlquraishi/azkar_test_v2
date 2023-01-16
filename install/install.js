let CACHE_NAME = "static_cache";
let CACHE_FILES = [
  "../",
  "../index.html",
  "install/index.js",
  "install/install.js",
  "../images/bg.png",
  "../images/playstore.png",
  "../css/all.min.css",
  "../css/index.css",
  "../js/index.js",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(CACHE_FILES);
    })
  );
});

self.addEventListener("fetch", function (event) {
  let online = navigator.onLine;
  if (!online) {
    event.respondWith(
      caches.match(event.request).then(function (response) {
        if (response) {
          return response;
        }
      })
    );
  }
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return prompt.all(
        keys.map(function (keys, i) {
          if (keys !== CACHE_NAME) {
            return caches.delete(keys[i]);
          }
        })
      );
    })
  );
});
