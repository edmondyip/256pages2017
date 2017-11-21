<template>
  <div id="app" :class="routeName">
    <app-header />
    <main>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </main>
    <app-footer />
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
  import Header from '@/components/template/PageHeader.vue'
  import Footer from '@/components/template/PageFooter.vue'
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
    mouted () {
      this.$Progress.finish()
    },
    created () {
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

<style lang="scss">
  @import '~styles/normalize.css';
  @import '~styles/fonts.css';
  body,
  html {
    height: 100%;
    margin: 0;
    padding: 0;
    // background: #85F1C1;
    overflow: hidden;
  }
  
  $titleFont: 'Ubuntu', sans-serif;
  $contentFont: 'Arial', sans-serif;

  p,
  li,
  h1,
  h2,
  h3,
  a {
    color: #333;
  }

  h1,
  h2,
  h3 {
    font-family: $titleFont;
    letter-spacing: 2px;
    text-transform: lowercase;
  }

  h1 {
    font-size: 18px;
  }

  h2 {
    font-size: 16px;
  }

  p {
    font-family: $contentFont;
    letter-spacing: 1px;
    font-size: 12px;
    text-transform: lowercase;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      text-transform: lowercase;
    }
  }
</style>


<style scoped lang="scss">
  .fade-enter-active,
  .fade-leave-active {
    transition: .5s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  main {
    padding: 20px;
    // margin: 0 100px;
    background: rgba(255, 255, 255, .5);
    transition: .5s;
  }

  #app.home main {
    background: rgba(255, 255, 255, 0);
    padding: 0;
  }
</style>
