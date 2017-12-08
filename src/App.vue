<template>
  <div id="app">
    <background-animation :position-x="this.positionX" :position-y="this.positionY" />
    <size-checker />
    <position-checker>{{this.positionX}} | {{this.positionY}}</position-checker>
    <page-header />
    <main>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </main>
    <page-footer />
    <vue-progress-bar />
  </div>
</template>

<script>
  import PageHeader from '@/components/layout/PageHeader'
  import PageFooter from '@/components/layout/PageFooter'
  import SizeChecker from '@/components/CheckSize'
  import BackgroundAnimation from '@/components/layout/PageBackground'
  import PositionChecker from '@/components/CheckPosition'

  export default {
    name: 'Layout',
    metaInfo: {
      title: 'a designer + developer from hong kong',
      titleTemplate: '%s | 256pages',
      // base: {
      //   href: 'https://256pages.com/'
      // },
      link: [{
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Open+Sans|Ubuntu:300,400'
      }, {
        rel: 'author',
        href: 'https://256pages.com/humans.txt'
      }]
    },
    mouted: function () {
      this.$Progress.finish()
    },
    created: function () {
      this.$Progress.start()
      this.$router.beforeEach((to, from, next) => {
        if (to.meta.progress !== undefined) {
          let meta = to.meta.progress
          this.$Progress.parseMeta(meta)
        }
        this.$Progress.start()
        next()
      })
      this.$router.afterEach((to, from) => {
        this.$Progress.finish()
      })
    },
    components: {
      PageHeader,
      PageFooter,
      SizeChecker,
      BackgroundAnimation,
      PositionChecker
    }
  }
</script>

<style scoped lang="scss">
  #app {
    height: 100%;
    main {
      padding: 20px;
      transition: .5s;
    }
    .home main {
      padding: 0;
    }
    .bg {
      position: absolute;
      top: 0px;
    }
  }
</style>
