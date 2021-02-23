/* eslint-disable no-restricted-globals */

// This service worker can be customized!
// See https://developers.google.com/web/tools/workbox/modules
// for the list of available Workbox modules, or add any other
// code you'd like.
// You can also remove this file if you'd prefer not to use a
// service worker, and the Workbox build step will be skipped.

import { clientsClaim, skipWaiting } from "workbox-core";
import { ExpirationPlugin } from "workbox-expiration";
import { precacheAndRoute } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { NetworkFirst, CacheFirst } from "workbox-strategies";

clientsClaim();
skipWaiting();

// Precache all of the assets generated by your build process.
// Their URLs are injected into the manifest variable below.
precacheAndRoute(self.__WB_MANIFEST);

// navigationPreload()
const cachedResponsePlugin = {
  cachedResponseWillBeUsed: ({ cachedResponse }) => {
    let headers = new Headers(cachedResponse.headers);
    console.log(cachedResponse.headers); // Empty
    headers.set("X-Cached-Response", "true");

    return cachedResponse.arrayBuffer().then((buffer) => {
      return new Response(buffer, {
        status: cachedResponse.status,
        statusText: cachedResponse.statusText,
        headers,
      });
    });
  },
};

const autoCacheImagesPlugin = {
  fetchDidSucceed: async ({ response }) => {
    const imageCache = await self.caches.open("images");
    response
      .clone()
      .json()
      .then((data) => {
        let webcams = data.result.webcams;
        webcams.forEach((webcam) => {
          const req = new Request(webcam.image.current.preview, {
            mode: "no-cors",
          });
          fetch(req).then((res) => imageCache.put(req, res));
        });
      });
    return response;
  },
};

// Caches png
registerRoute(
  // Add in any other file extensions or routing criteria as needed.
  ({ url }) => url.pathname.endsWith(".png") || url.pathname.endsWith(".jpg"), // Customize this strategy as needed, e.g., by changing to CacheFirst.
  new NetworkFirst({
    cacheName: "images",
    plugins: [
      // Ensure that once this runtime cache reaches a maximum size the
      // least-recently used images are removed.
      new ExpirationPlugin({ maxEntries: 50 }),
    ],
  })
);

// Network First For Weather
registerRoute(
  new RegExp(/https:\/\/api\.openweathermap\.org\/.+/),
  new NetworkFirst({
    cacheName: "weather-cache",
    plugins: [
      new ExpirationPlugin({
        // Max age: 1 day
        maxAgeSeconds: 1 * 24 * 60 * 60,
      }),
      cachedResponsePlugin,
    ],
  })
);

// Cache First For Webcam and Geocoding
registerRoute(
  new RegExp(/https:\/\/api\.windy\.com\/api\/webcams.+/),
  new CacheFirst({
    cacheName: "webcam-cache",
    plugins: [
      new ExpirationPlugin({
        // Max age: one week
        maxAgeSeconds: 7 * 24 * 60 * 60,
        // Max entries: 30 cities
        maxEntries: 30,
      }),
      autoCacheImagesPlugin,
    ],
  })
);

registerRoute(
  new RegExp(/https:\/\/api\.opencagedata\.com\/geocode\/.+/),
  new CacheFirst({
    cacheName: "geocode-cache",
    plugins: [
      new ExpirationPlugin({
        // Max age: six months (geocode data doesn't really change)
        maxAgeSeconds: 6 * 30 * 24 * 60 * 60,
        // Max entries: 30 cities
        maxEntries: 30,
      }),
    ],
  })
);

// // This allows the web app to trigger skipWaiting via
// // TODO: registration.waiting.postMessage({type: 'SKIP_WAITING'})
// self.addEventListener("message", (event) => {
//   if (event.data && event.data.type === "SKIP_WAITING") {
//     self.skipWaiting();
//   }
// });
