import Vue from 'vue'
import Is from 'is_js'

const GlobalData = {
  install(Vue, options) {
    Vue.mixin({
      data: function () {
        return {
          routeName: this.$route.name,
          mobileCheck: false
        }
      },
      created: function () {
        this.routeName = this.$route.name
        this.mobileCheck = Is.touchDevice()
      },
      beforeRouteUpdate (to, from, next) {
        this.routeName = this.$route.name
        // console.log($route.name)
      }
    })
  }
}

Vue.use(GlobalData)
