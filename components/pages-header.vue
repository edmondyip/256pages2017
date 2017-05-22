<!-- Template -->
<template>
  <header>
    <div id="logo">
        <nuxt-link to="/">256P</nuxt>
      </div>
    <app-navbar />
  </header>
</template>

<!-- Script -->
<script>
import NavBar from '~components/pages-nav.vue'
export default {
  name: "Header",
  components: {
    "app-navbar" : NavBar
  }
}
</script>

<!-- Style -->
<style lang="scss" scoped>
header {
  transition: .5s;
  height: calc(100% - 2rem);
  width: var(--header-width);
  padding: 1rem;
  background: #fff;
  z-index: 800;
  #logo {
    margin:1rem auto;
    font-size: 1.8rem;
    font-weight: 400;
    text-align: center;
    color:#52c6d6;
    border-radius: 0.2rem;
  }
  #logo::before {
    content:"";
    display: inline-block;
    vertical-align: bottom;
    height: 100%;
    text-align: right;
  }
}
</style>
