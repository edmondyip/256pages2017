<template>
  <div id="app" :class="routeName">
    <app-header />
    
      <main><transition name="fade" mode="out-in">
        <router-view />
      </transition></main>
    
    <app-footer />
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
  import Header from '@/components/layout/PageHeader.vue'
  import Footer from '@/components/layout/PageFooter.vue'
  export default {
    name: 'Layout',
    data: function () {
      return {
        routeName: this.$route.name
      }
    },
    metaInfo: {
      title: 'edmond yip portfolio',
      titleTemplate: '%s | 256pages',
      link: [{
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Ubuntu:400,500'
      }, {
        rel: 'author',
        href: 'https://256pages.com/static/humans.txt'
      }]
    },
    components: {
      'app-header': Header,
      'app-footer': Footer
    },
    watch: {
      '$route' (to, from) {
        this.routeName = this.$route.name
      }
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
    }
  }
</script>

<style scoped lang="scss">
  .fade-enter-active,
  .fade-leave-active {
    transition: .3s ease;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  main {
    padding: 20px;
    background: rgba(255, 255, 255, .5);
    transition: .5s;
  }

  #app.home main {
    padding: 0;
    background: rgba(255, 255, 255, 0);
  }

</style>
