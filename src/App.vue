<template>
  <div id="app" :class="routeName">
    <background-animation></background-animation>
    <size-checker />
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
  import BackgroundAnimation from '@/components/layout/PageBackground2'

  export default {
    name: 'Layout',
    data: function () {
      return {
        routeName: this.$route.name
      }
    },
    metaInfo: {
      title: 'a designer + developer from hong kong',
      titleTemplate: '%s | 256pages',
      // base: {
      //   href: 'https://256pages.com/'
      // },
      link: [{
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Ubuntu:400,500'
      }, {
        rel: 'author',
        href: 'https://256pages.com/humans.txt'
      }]
    },
    components: {
      PageHeader,
      PageFooter,
      SizeChecker,
      BackgroundAnimation
    },
    watch: {
      '$route' (to, from) {
        //add route name on #app
        this.routeName = this.$route.name
      }
    },
    mouted: function () {
      this.$Progress.finish()
    },
    created: function () {
      //progress bar
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
