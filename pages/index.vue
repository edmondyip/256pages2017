<!-- Template -->
<template>
  <section>
    <div class="welcome-image">
      <img src="~assets/img/chinese.svg" alt="256pages">
    </div>
    <app-footer/>
  </section>
</template>

<!-- Script -->
<script>
import Footer from '~components/pages-footer.vue'
  export default {
    name: "Index",
    layout: "index",
    head: {
      title: "Pages",
      meta: [
        { name: 'CanonicalUrl', content: 'https://256pages.com' }
      ]
    },
    components: {
      "app-footer" : Footer
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
    height: 81vh;
    background: rgb(133,241,193);
    img {
      width: 15rem;
    }
  }
</style>
