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
    "revision": "236e5356bcfa5481d6114eb4ac3bf636"
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
    "revision": "793643f7d11e229ab35c74c237bd9082"
  },
  {
    "url": "manifest.json",
    "revision": "c5da382f89bd0fbc4d77dba467d74bd3"
  },
  {
    "url": "service-worker.js",
    "revision": "6a0aa5f05f98c2fda4dab723dd2a68b6"
  },
  {
    "url": "static/css/main.8dc7f1c0.css",
    "revision": "e95fdb45dd78354402bfaf52d75b1ef2"
  },
  {
    "url": "static/js/main.7a5996bf.js",
    "revision": "5a4bc04eb99040af0824a11cee5a7600"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/index.html");

workbox.routing.registerRoute(/^https:\/\/stackpath\.bootstrapcdn\.com\/bootstrap\/4\.1\.3\/css\/bootstrap\.min\.css/, workbox.strategies.cacheFirst({ "cacheName":"bootstrap-min", plugins: [new workbox.expiration.Plugin({"maxEntries":80,"maxAgeSeconds":86400,"purgeOnQuotaError":false})] }), 'GET');
