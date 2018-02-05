<template>
  <section>
    <h1>404</h1>
    <h2>page not found</h2>
    <p>
      <router-link to="/">back to home</router-link>
    </p>
  </section>
</template>

<script>
  export default {
    name: 'NotFound',
    metaInfo: {
      title: 'Page not found'
    }
  }

</script>

<style scoped lang="scss">
@import '../../assets/css/_global.scss';
  section {
    text-align: center;
    h1 {
      font-size: 50px;
    }
  }

  @media (max-width: $breakpoint-mobile) {
    section {
      margin: 100px 0;
    }
  }

</style>
