<!-- Template -->
<template>
  <footer>
    <div id="footer-container">
      <ul class="menu">
        <li><nuxt-link to="/">Home</nuxt></li>
        <li><nuxt-link to="/about/">About</nuxt></li>
        <li><nuxt-link to="/portfolio/">Portfolio</nuxt></li>
        <li><nuxt-link to="/contact">Contact</nuxt></li>
      </ul>
      <div class="copyright">
        &copy 256pages 2017
      </div>
    </div>
  </footer>
</template>

<!-- Script -->
<script>
  export default {
    name: "Nav",
    methods: {
      closeNav() {
        tab: false
      }
    }
  }
</script>

<!-- Style -->
<style lang="scss" scoped>
  footer {
    padding: 1rem;
    text-align: center;
    border-top: 1px solid #ddd;
    width: 100%;
    font-size: 80%;
    align-self: flex-start;
    #footer-container ul.menu {
      list-style: none;
      display: flex;
      flex-flow: nowrap;
    }
  }
</style>
