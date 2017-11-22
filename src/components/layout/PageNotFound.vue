<template>
  <div class="page-not-found">
    <h1>
      404
    </h1>
    <p>page not found</p>
    <router-link to="/">back</router-link>
  </div>
</template>

<script>
  export default {
    name: 'NotFound',
    metaInfo: {
      title: 'Page not found',
      titleTemplate: '%s | 256pages',
      link: [{
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Bitter'
      }]
    }
  }
</script>

<style scoped lang="scss">
  .page-not-found {
    text-align: center;
    h1 {
      font-size: 30px;
    }
  }
</style>

