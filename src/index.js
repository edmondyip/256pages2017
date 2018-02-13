// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import VueProgressBar from 'vue-progressbar'
// import Is from "is_js"

import '@/assets/css/normalize.css'
import '@/assets/css/_main.css'

// const options = {
//   color: '#85F1C1',
//   failedColor: '#874b4b',
//   thickness: '3px',
//   transition: {
//     speed: '0.2s',
//     opacity: '0.6s',
//     termination: 300
//   },
//   autoRevert: true,
//   location: 'top',
//   inverse: false
// }

// Vue.use(VueProgressBar, options)

// Global data
Vue.mixin({
  data: function () {
    return {
      routeName: this.$route.name,
      // positionX: 0,
      // positionY: 0,
      windowWidth: document.documentElement.clientWidth,
      windowHeight: document.documentElement.clientHeight,
      mobileCheck: false
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      if (process.browser) {
        window.addEventListener('resize', this.getWindowSize)
      }
    })
  },
  methods: {
    // updatePosition: function (event) {
    //   this.positionX = event.clientX
    //   this.positionY = event.clientY
    // },
    getWindowSize: function (event) {
      this.windowWidth = document.documentElement.clientWidth
      this.windowHeight = document.documentElement.clientHeight
      // this.mobileCheck = Is.touchDevice()
      // if (this.windowWidth < this.windowHeight) {
      //   this.mobileCheck = true
      // }
    }
  },
  created: function () {
    // window.addEventListener('mousemove', this.updatePosition)
    this.routeName = this.$route.name
    // this.mobileCheck = Is.touchDevice()
    // if (this.windowWidth < this.windowHeight) {
    //   this.mobileCheck = true
    // }
  },
  beforeDestroy: function () {
    if (process.browser) {
      // window.removeEventListener('mousemove', this.updatePosition)
      window.removeEventListener('resize', this.getWindowSize)
    }
  },
  watch: {
    '$route' (to, from) {
      this.routeName = this.$route.name
    }
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: {
//     App
//   }
// })

export function createApp() {
  // create the app instance.
  // here we inject the router, store and ssr context to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = new Vue({
    router,
    // store,
    render: h => h(App)
  })

  // expose the app, the router and the store.
  // note we are not mounting the app here, since bootstrapping will be
  // different depending on whether we are in a browser or on the server.
  return {
    app,
    router
  }
}
