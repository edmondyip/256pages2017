<template>
  <div id="app">
    <background-animation />
    <main>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </main>
    <page-footer />
    <vue-progress-bar />
    <page-header />
  </div>
</template>

<script>
  import PageHeader from '@/components/layout/PageHeader'
  import PageFooter from '@/components/layout/PageFooter'
  import BackgroundAnimation from '@/components/layout/PageBackground'
  export default {
    name: 'Layout',
    metaInfo: function () {
      return {
        title: '256pages',
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
        }, {
          rel: 'canonical',
          href: 'https://256pages.com' + this.routePath
        }]
      }
    },
    mouted: function () {
      this.$Progress.finish()

    },
    created: function () {
      console.log(this.$route.name)
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
      BackgroundAnimation
    }
  }

</script>

<style scoped lang="scss">
  #app {
    height: 100%;
    main {
      padding: 150px 0 0;
      transition: .5s;
      position: relative;
    }
    .home main {
      padding: 0;
    }
  }

  @media (max-width: $breakpoint-mobile) {
    #app {
      main {
        padding: 20px;
      }
    }
  }

</style>
