<template>
  <section>
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <p>
      <router-link to="/">back to home</router-link>
    </p>
  </section>
</template>

<script>
  export default {
    props: ['error'],
    name: 'NotFound',
    metaInfo: {
      title: 'Page not found'
    }
  }

</script>

<style scoped lang="scss">
  section {
    text-align: center;
    h1 {
      font-size: 50px;
    }
  }

//   @media (max-width: $breakpoint-mobile) {
//     section {
//       margin: 100px 0;
//     }
//   }

</style>
