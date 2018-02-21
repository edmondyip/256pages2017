importScripts('/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.8be3734611605c8e0c5a.js",
    "revision": "b0e200e475f79e557bf8d68b10871d3a"
  },
  {
    "url": "/_nuxt/layouts/default.23e96ca9582180c8ff61.js",
    "revision": "7908103bfbd85984442a34255beb2647"
  },
  {
    "url": "/_nuxt/manifest.97164ca8bd3618dc6423.js",
    "revision": "30c936742551f1dd1a47ef2862cd5238"
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

