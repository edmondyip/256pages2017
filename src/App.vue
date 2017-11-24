<template>
  <div id="app" :class="routeName">
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
  import PageHeader from '@/components/layout/PageHeader.vue'
  import PageFooter from '@/components/layout/PageFooter.vue'
  import SizeChecker from "@/components/CheckSize"

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
        href: 'https://256pages.com/humans.txt'
      }]
    },
    components: {
      PageHeader,
      PageFooter,
      SizeChecker
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
  main {
    padding: 20px;
    transition: .5s;
  }

  #app.home main {
    padding: 0;
  }
</style>
