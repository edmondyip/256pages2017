<!-- Template -->
<template>
  <header>
    <div id="logo">
        <nuxt-link to="/"><img src="~assets/img/chinese.svg" alt="256pages"></nuxt>
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
@import "~assets/css/setting.scss";

  header {
    transition: .5s;
    height: 100%;
    width: var(--header-width);
    padding: var(--header-padding);
    background: #fff;
    z-index: 800;
    #logo {
      margin:1rem auto;
      font-size: 1.8rem;
      font-weight: 400;
      text-align: center;
      color:#52c6d6;
      border-radius: .2rem;
    }
    #logo::before {
      content:"";
      display: inline-block;
      vertical-align: bottom;
      height: 100%;
      text-align: right;
    }
  }

@include for-tablet {
  header {
    height: 5rem;
    width: var(--full-header-width);
    display: block;
  }
}
</style>
