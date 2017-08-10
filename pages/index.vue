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
@import "~assets/scss/setting.scss";
  .welcome-image {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 70vh;
    background: rgb(133,241,193);
    img {
      width: 15rem;
    }
  }
</style>
