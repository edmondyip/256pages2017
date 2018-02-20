importScripts('/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.0667524c414fa7452323.js",
    "revision": "49d9905a98372ff652f04507f43cd67d"
  },
  {
    "url": "/_nuxt/layouts/default.cc111b7975ddff719cba.js",
    "revision": "2e3ffc7e0d6dc5ce10fdc98502e30f81"
  },
  {
    "url": "/_nuxt/manifest.19bfd43309c4338f360c.js",
    "revision": "686845becd0fa44536e77466e7d33334"
  },
  {
    "url": "/_nuxt/pages/about.e5036d498752d10e1257.js",
    "revision": "0915898ac991057b7ee0deec257eed19"
  },
  {
    "url": "/_nuxt/pages/contact.dd7acae56350043f8952.js",
    "revision": "aec8cc6b81964a4525626a95ad68e7c3"
  },
  {
    "url": "/_nuxt/pages/index.9836809a6a64ec793507.js",
    "revision": "50afe80b25975b59648b3d427dee1c0f"
  },
  {
    "url": "/_nuxt/pages/project.550ffe1034e99ad748b6.js",
    "revision": "bcc951220829f3b18993d3bd1e98dca0"
  },
  {
    "url": "/_nuxt/vendor.71a1cd52c77bda6dbbbd.js",
    "revision": "8ca4261ee53f2192fa84ef329851d765"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

