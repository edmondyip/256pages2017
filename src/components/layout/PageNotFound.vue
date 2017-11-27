<template>
  <div class="page-not-found">
    <h1>404</h1>
    <h2>page not found</h2>
    <p><router-link to="/">back to home</router-link></p>
  </div>
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
  .page-not-found {
    text-align: center;
    h1 {
      font-size: 50px;
    }
  }
</style>

