import Vue from 'vue'
import Is from 'is_js'

const GlobalData = {
  install(Vue, options) {
    Vue.mixin({
      data: function () {
        return {
          routeName: this.$route.path,
          // positionX: 0,
          // positionY: 0,
          // windowWidth: document.documentElement.clientWidth,
          // windowHeight: document.documentElement.clientHeight,
          mobileCheck: false
        }
      },
      // mounted: function () {
      //   this.$nextTick(function () {
      //     window.addEventListener('resize', this.getWindowSize)
      //   })
      // },
      // methods: {
      //   updatePosition: function (event) {
      //     this.positionX = event.clientX
      //     this.positionY = event.clientY
      //   },
      //   getWindowSize: function (event) {
      //     this.windowWidth = document.documentElement.clientWidth
      //     this.windowHeight = document.documentElement.clientHeight
      //     this.mobileCheck = Is.touchDevice()
      //     if (this.windowWidth < this.windowHeight) {
      //       this.mobileCheck = true
      //     }
      //   }
      // },
      created: function () {
        // window.addEventListener('mousemove', this.updatePosition)
        this.routeName = this.$route.path
        this.mobileCheck = Is.touchDevice()
        // if (this.windowWidth < this.windowHeight) {
        //   this.mobileCheck = true
        // }
      },
      // beforeDestroy: function () {
      //   window.removeEventListener('mousemove', this.updatePosition)
      //   window.removeEventListener('resize', this.getWindowSize)
      // },
      watch: {
        '$route' () {
          this.routeName = this.$route.path
        }
      }
    })
  }
}

Vue.use(GlobalData)
