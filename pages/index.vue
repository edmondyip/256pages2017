<!-- Template -->
<template>
  <section>
    <div class="welcome-image">
      <img src="~assets/img/chinese.svg" alt="256pages">
    </div>
  </section>
</template>

<!-- Script -->
<script>
  export default {
    name: "Index",
    head: {
      title: "Pages",
      meta: [
        { name: 'CanonicalUrl', content: 'https://256pages.com' }
      ]
    }
  }
</script>

<!-- Style -->
<style lang="scss" scoped>
  .welcome-image {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 95vh;
<<<<<<< HEAD
    background: rgb(8,251,144);
=======
>>>>>>> 6c8d44eaba542365f3cd08ef761d071d966c0042
    img {
      width: 15rem;
    }
  }
</style>
