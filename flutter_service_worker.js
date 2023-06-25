'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "28e853b39c7ad7aa8f9fc72cadcf2e27",
"assets/AssetManifest.smcbin": "c95665f40908d2b8696fd249ee252694",
"assets/assets/images/1.png": "4f75aea33e0a7c681610f986c13295af",
"assets/assets/images/2.png": "1059d2d79ecd168f7e115d3a25fc47cf",
"assets/assets/images/3.png": "51f9bffca90266ecff6bce429994e6b0",
"assets/assets/images/4.png": "1b29d4552de7dbf1bc5b21b693d13179",
"assets/assets/images/burger.jpg": "fca17319421519cbb9d73c85b4879566",
"assets/assets/images/burrito.jpg": "db355c04fb74d99cc71442915307091c",
"assets/assets/images/CocaCola.jpg": "c73e22d601adf5dcf9bfc7870c77b541",
"assets/assets/images/extracheese.jpg": "1e353bc03a7c2ecd7bb3f03c9af7cf38",
"assets/assets/images/extraMayonnaise.jpg": "936f8df4c4ce1758108d4a26ee6d0f4b",
"assets/assets/images/FruitDrinks.jpg": "0fa89ebeb394a6e633d0d534ea96544b",
"assets/assets/images/HT-Color.png": "fb1f14e939ce123b2f15f39725cb5d54",
"assets/assets/images/JarritosMexicanSoda.jpg": "05933f383007702afccaeeea0b7d67b4",
"assets/assets/images/LemonDrinks.jpg": "9f3477d29f743be15d733d894873488b",
"assets/assets/images/Logo.png": "946158075a72666c82d8b12484157645",
"assets/assets/images/OrangeDrinks.jpg": "3a11e8554fec486d1d957006adafe2f7",
"assets/assets/images/pancakes.jpg": "75b178665bf8c5dbd8b35e0d5c3b3a0b",
"assets/assets/images/pasta.jpg": "d66e228fd4c470e8dce63682dcbe109c",
"assets/assets/images/pepsi.jpg": "83a568b8649b1ec589c732727f5ef2c3",
"assets/assets/images/pizza.jpg": "6c9d18011ece0a0de7d8d460196f20a1",
"assets/assets/images/ramen.jpg": "973e5e64d906dedc337ff4c8171f1944",
"assets/assets/images/restaurant0.jpg": "d424b3eae8fd36c326952bc5697ed964",
"assets/assets/images/restaurant1.jpg": "2e1da15350440da661ea43ecdc2406a1",
"assets/assets/images/restaurant2.jpg": "e206959c34200ef461ac57ed76e91ec3",
"assets/assets/images/restaurant3.jpg": "31cd124cfcc29134d76f7c7fe9cb912b",
"assets/assets/images/restaurant4.jpg": "06d44dcd43319002f95e116b8cf85d62",
"assets/assets/images/salmon.jpg": "297d5520682f00934a2326914768f142",
"assets/assets/images/steak.jpg": "3406cd9c9dd06d8ce2eca63d85726107",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "8ed2a11a2ef4327708dd850c98ec7aa4",
"assets/NOTICES": "8ee2296b3a27d834f10b24f00eb4c1e4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "925436251d97fbbc288920957515e336",
"/": "925436251d97fbbc288920957515e336",
"main.dart.js": "2867486093decea031836686ce142a33",
"manifest.json": "82f420c221aaaff6ab0e06fb8bb31648",
"version.json": "9949c9fdf50ebf7cedf652f80d223cab"};
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
