<template>
  <div id="app">
    <app-header />
    <main>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </main>
    <app-footer />
  </div>
</template>

<script>
  import Header from '@/components/template/PageHeader.vue'
  import Footer from '@/components/template/PageFooter.vue'
  export default {
    name: 'app',
    metaInfo: {
      title: 'edmond yip portfolio',
      titleTemplate: '%s | 256pages',
      link: [{
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Bitter'
      }]
    },
    components: {
      'app-header': Header,
      'app-footer': Footer
    }
  }
</script>

<style>
  @import '~styles/normalize.css';
  @import '~styles/style.scss';

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0
  }
</style>
