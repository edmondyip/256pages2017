importScripts('/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.21ec00dc32ad79a6d5c1.js",
    "revision": "b68b32ee0d014a65a25646220d514bae"
  },
  {
    "url": "/_nuxt/layouts/default.731856dc0b413484186b.js",
    "revision": "824ff7740d3d57c93a078c58c195a9e6"
  },
  {
    "url": "/_nuxt/manifest.f537e19eb747d1b836b1.js",
    "revision": "a2b5eb36a3bbd603598ab080f2dd4605"
  },
  {
    "url": "/_nuxt/pages/about.04efc631da7c765491b8.js",
    "revision": "c0d63b83f157641cb5fe3b29d496452f"
  },
  {
    "url": "/_nuxt/pages/contact.a324aa48de89525a8c89.js",
    "revision": "aff636386a9656654739c3bae0fda0d2"
  },
  {
    "url": "/_nuxt/pages/index.2c2e9d953d9d93eb2c45.js",
    "revision": "49727ffb783c45d5d65978c7a910aa44"
  },
  {
    "url": "/_nuxt/pages/projects.5c458827a8d699e84c56.js",
    "revision": "319d3a70acc672d8e3e141af97ae9881"
  },
  {
    "url": "/_nuxt/vendor.94c4afe4393eddf87987.js",
    "revision": "5dc2be9c640ef8c07c44b608f924d081"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

