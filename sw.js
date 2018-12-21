/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "asset-manifest.json",
    "revision": "bd30986826ea547ac38f6682f37e1f61"
  },
  {
    "url": "favicon.ico",
    "revision": "bfb85b8c140affade4d2e0ee960e46d6"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "7ebc5da5d1ba24e691926c429b93da3a"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "56257882f6378fe6cb716596e6aa2a70"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "5131f90257b32b3d021302c801504e5c"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "f489ad5e0f5017bb49dd8bf4af383759"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "cf5eaa642123b11a009a21017d3c69ec"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "b9d580a1cd24cc614994e086dd7c01ae"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "f7122394070d01890b0f70460512c15e"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "0d46ff41108c4493b8d1367f3cd7447b"
  },
  {
    "url": "index.html",
    "revision": "fbaabe525ecd447353819565951528e1"
  },
  {
    "url": "manifest.json",
    "revision": "c5da382f89bd0fbc4d77dba467d74bd3"
  },
  {
    "url": "precache-manifest.2f6815b012767da4679e6525f1096209.js",
    "revision": "2f6815b012767da4679e6525f1096209"
  },
  {
    "url": "service-worker.js",
    "revision": "1a363eacf19550bb762153d68fee1ebf"
  },
  {
    "url": "static/css/main.4d9d0715.chunk.css",
    "revision": "e2f2e99c17eeae29fab2148214f38a0b"
  },
  {
    "url": "static/js/1.f9cb6d0b.chunk.js",
    "revision": "aea118c0b4caaf9497241c154c4e415d"
  },
  {
    "url": "static/js/main.806c85ab.chunk.js",
    "revision": "c496a2ed9232f10139ba414e4f031c96"
  },
  {
    "url": "static/js/runtime~main.75a5f161.js",
    "revision": "52bcbe2f4b589ee746c04b372f936c2b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/index.html");

workbox.routing.registerRoute(/^https:\/\/stackpath\.bootstrapcdn\.com\/bootstrap\/4\.1\.3\/css\/bootstrap\.min\.css/, workbox.strategies.cacheFirst({ "cacheName":"bootstrap-min", plugins: [new workbox.expiration.Plugin({"maxEntries":80,"maxAgeSeconds":86400,"purgeOnQuotaError":false})] }), 'GET');
