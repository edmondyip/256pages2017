import Vue from 'vue'
import Is from 'is_js'

const GlobalData = {
  install(Vue, options) {
    Vue.mixin({
      data: function () {
        return {
          // routeName: $route.name,
          mobileCheck: false
        }
      },
      created: function () {
        // this.routeName = $route.name
        this.mobileCheck = Is.touchDevice()
      },
      beforeRouteUpdate (to, from, next) {
        // this.routeName = $route.name
        console.log($route.name)
      }
    })
  }
}

Vue.use(GlobalData)
