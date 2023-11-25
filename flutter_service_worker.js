'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "0aa583685ba1e4462b79bfe89a59b5f2",
"assets/AssetManifest.json": "79e82f01e9221d0a78aaa7c6de60e676",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "6da13e46ce7052fb5cfe735ee37ac620",
"assets/NOTICES": "656f4c5c0d0971282cc0701b8ebb6d46",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/stageImages/appIcon/Stage.png": "e97ef9b696977238ed368a7fa7f8b26c",
"assets/stageImages/hazardsOff/Battlefield.png": "a71d1c558ee0dbcac4d29516563bf204",
"assets/stageImages/hazardsOff/Final_Destination.jpg": "bfc039067a2a81e7eddc60d03031f732",
"assets/stageImages/hazardsOff/Hollow_Bastion.jpg": "228daddebad52a85d16e9a6fee853612",
"assets/stageImages/hazardsOff/Northern_Cave.png": "fc7d9b389384da0fbea1a1ffe3f524a1",
"assets/stageImages/hazardsOff/Pokemon_Stadium_2.png": "e53d10fec3cb75633ddfcce15a6b3366",
"assets/stageImages/hazardsOff/Small_Battlefield.jpg": "49f80b35b65e0fb8acdad83d59a84f67",
"assets/stageImages/hazardsOff/Town_and_City.png": "df582638a93969f278a9344d75d9670f",
"assets/stageImages/hazardsOff/Yoshi's_Story.png": "3f05eb4a47a5210e2c3b2fd2a76ce17b",
"assets/stageImages/illegal/The_Great_Cave_Offensive.png": "d6bd88124a323d529249c5445f92a2ca",
"assets/stageImages/legal/Battlefield.png": "a71d1c558ee0dbcac4d29516563bf204",
"assets/stageImages/legal/Final_Destination.jpg": "bfc039067a2a81e7eddc60d03031f732",
"assets/stageImages/legal/Kalos_Pok%25C3%25A9mon_League.png": "9f601340bd737aaf141fb9747f2bdb45",
"assets/stageImages/legal/Lylat_Cruise.jpg": "7a1cc6962ed26542ddcc5a57e3c85541",
"assets/stageImages/legal/Smashville.jpg": "bda797d98cb524cbac3a81110622a9d9",
"assets/stageImages/legal/Smashville.png": "4570d78c42bcbd68e7bc52a03c0b5569",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/android-icon-144x144.png": "32d06e77b2a1bb58fb5bc910a9de862e",
"icons/android-icon-192x192.png": "f1b90b9dc05ce3f947243e13159ff66e",
"icons/android-icon-36x36.png": "7bfb230c8e69272ff86aac011f012097",
"icons/android-icon-48x48.png": "7947fef7b28c6ed3130184ff8f31d859",
"icons/android-icon-72x72.png": "3c2b77fe4d1e6faae4eacfa04b9241cc",
"icons/android-icon-96x96.png": "6cdf143d6195622438af92926985a075",
"icons/apple-icon-114x114.png": "39f2a646f95497b9b5d45667344ca806",
"icons/apple-icon-120x120.png": "3622adae2e4300e788ad3f48d509e1e5",
"icons/apple-icon-144x144.png": "32d06e77b2a1bb58fb5bc910a9de862e",
"icons/apple-icon-152x152.png": "262dfd3281c756461a5d3f5958545c1f",
"icons/apple-icon-180x180.png": "debe339cc913a79b953419787a68bc7a",
"icons/apple-icon-57x57.png": "7e9b609498f88b796af5853817e484c4",
"icons/apple-icon-60x60.png": "164d57da1480f3deb69cf9f13d0e3cef",
"icons/apple-icon-72x72.png": "3c2b77fe4d1e6faae4eacfa04b9241cc",
"icons/apple-icon-76x76.png": "a2e923d0279377357991cee7f6f93785",
"icons/apple-icon-precomposed.png": "041f92079d430efc8957fe49a7da5dcb",
"icons/apple-icon.png": "041f92079d430efc8957fe49a7da5dcb",
"icons/favicon-16x16.png": "55dcc9c5c906275f1e4b911fca65d02a",
"icons/favicon-32x32.png": "8204fffd7c282e0a822a550fbf867590",
"icons/favicon-96x96.png": "e542dbbb2141559274c730c2526b7cfc",
"icons/favicon.ico": "fc872ffbe53c5fd83f736a2f17dd1ee3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/ms-icon-144x144.png": "87d871a92648fa9183cb4843f3a652b1",
"icons/ms-icon-150x150.png": "d62637348127125b398c84e6905e5e1d",
"icons/ms-icon-310x310.png": "9718a213fb07c8c065758fd35e43d930",
"icons/ms-icon-70x70.png": "96eb120fb71dcd5705757a23f64cd487",
"index.html": "688677fdc996a383869baf22a9d17324",
"/": "688677fdc996a383869baf22a9d17324",
"main.dart.js": "db47e299d35c2d00bcdb98627999ae55",
"manifest.json": "9a37798b0afdb89dd56f8b24b324ec7e",
"version.json": "ed189a6d434275384b95569974d93a73"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
