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
    "revision": "0e342851b6fec70dc43f40ba67ff14ed"
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
    "revision": "564b21ea7baae1e7fc94693aff9b8ff9"
  },
  {
    "url": "manifest.json",
    "revision": "c5da382f89bd0fbc4d77dba467d74bd3"
  },
  {
    "url": "service-worker.js",
    "revision": "c68d8934b44fcba7dc298dcc97156fe1"
  },
  {
    "url": "static/css/main.56798883.css",
    "revision": "22b9393a888d6d0d4ee06ff00a24f1f3"
  },
  {
    "url": "static/js/main.7a5996bf.js",
    "revision": "5a4bc04eb99040af0824a11cee5a7600"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/index.html");