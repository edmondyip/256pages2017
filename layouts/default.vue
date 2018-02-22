<template>
  <div id="app">
    <!-- <background-animation /> -->
    <!-- <main :class="{home: routeName === 'index'}"> -->
      <main>
      <transition name="fade" mode="out-in">
        <nuxt />
      </transition>
    </main>
    <page-footer />
    <page-header />
  </div>
</template>

<script>
  import PageHeader from '~/components/layouts/PageHeader'
  import PageFooter from '~/components/layouts/PageFooter'
  // import BackgroundAnimation from '~/components/layout/PageBackground'
  export default {
    name: 'Layout',
    components: {
      PageHeader,
      PageFooter
      // BackgroundAnimation
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
    main.home {
      padding: 180px 0 0;
    }
  }

  @media (max-width: $breakpoint-mobile) {
    #app {
      main {
        padding: 40px 20px;
        &.home {
          padding: 0 20px;
        }
      }
    }
  }

</style>
