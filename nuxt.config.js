process.traceDeprecation = true
process.noDeprecation = true

module.exports = {
  /*
  ** Headers of the page*/

  head: {
    titleTemplate: '%s - 256P',
    meta: [
      { charset: 'utf-8' },
      { name: 'sitecode', content: 'hk'},
      { name: 'viewport', content: 'width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no' },
      { hid: 'description', content: "Edmond Yip's Personal Website & Portfolio" },
      { name: 'msapplication-TileColor', content: '#52c6d6' },
      { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
      { name: 'msapplication-navbutton-color', content: '#52c6d6' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      { name: 'theme-color', content: '#52c6d6' },
      { name: 'google-site-verification', content: 'vA7tpUkqKhXTdkqg4_vIFYET5zO8oMhd9EDlnG6GkNM'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Dosis:200,400' },
      { rel: 'icon', type: 'image/x-icon', sizes: "16x16", href: '/favicon-16x16.png' },
      { rel: 'icon', type: 'image/x-icon', sizes: "32x32", href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/x-icon', sizes: "96x96", href: '/favicon-96x96.png' },
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: "57x57", href: '/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: "60x60", href: '/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: "72x72", href: '/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: "76x76", href: '/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: "114x114", href: '/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: "120x120", href: '/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: "144x144", href: '/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: "152x152", href: '/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: "180x180", href: '/apple-icon-180x180.png' },
      { rel: 'icon', sizes: "192x192", href: '/android-icon-192x192.png' }
    ]
  },
  /*
  ** Global CSS
*/
  css: [
    '~assets/css/normalize.css',
    { src: '~assets/css/main.scss', lang: 'scss' }
  ],
  /*
  ** Customize the progress-bar color
*/
  loading: { color: '#52c6d6' },

/* Load Customize Main.js */
  env: {
    HOST_URL: process.env.HOST_URL || 'https://256pages.com'
  },
  plugins: [
    '~plugins/ga.js'
  ],
  build: {
    assetsPublicPath: '/',
    assetsSubDirectory: 'static'
  }
}
