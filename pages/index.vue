<!-- Template -->
<template>
  <section>
<<<<<<< HEAD
    <img src="~assest/img/chinese.svg" alt="256pages">
=======
    <div class="welcome-image">
      <img src="~assets/img/chinese.svg" alt="256">
    </div>
>>>>>>> 6258ddf22b40deaa8abeaf398bb7bac7298c096f
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
    height: 100vh;
    width: 100%;
    img {
      width: 10rem;
    }
  }
</style>
