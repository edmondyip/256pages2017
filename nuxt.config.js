const {
  resolve
} = require('path')

module.exports = {
  /*
   ** Build configuration
   */
  build: {
    vendor: ['is_js']
  },
  /*
   ** Headers
   ** Common headers are already provided by @nuxtjs/pwa preset
   */
  head: {
    link: [{
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Open+Sans|Ubuntu:300,400'
    }, {
      rel: 'author',
      href: 'https://256pages.com/humans.txt'
      // }, {
      //   rel: 'canonical',
      //   href: 'https://256pages.com' + this.routePath
    }]
  },
  css: [
    '~/assets/css/_main.css',
  ],
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#3B8070'
  },
  /*
   ** Customize app manifest
   */
  manifest: {
    theme_color: '#3B8070'
  },
  /*
   ** Modules
   */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    'nuxt-sass-resources-loader'
  ],
  sassResources: [
    resolve(__dirname, './assets/css/_global.scss')
  ],
  plugins: [{
    src: '~/plugins/svg-morpheus.js',
    ssr: false
  }]
}
