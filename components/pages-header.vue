<!-- Template -->
<template>
  <header>
    <div id="logo">
<<<<<<< HEAD
        <nuxt-link to="/"><img src="~assets/img/chinese.svg" alt="256pages"></nuxt>
=======
<<<<<<< HEAD
        <nuxt-link to="/"><img src="~assets/img/chinese.svg" alt="256pages"></nuxt>
=======
        <nuxt-link to="/"><img src="~assets/img/chinese.svg" alt="256pages Logo"></nuxt>
>>>>>>> f03e3e1598d70a9c50562f4d780f46c0e85e1d82
>>>>>>> 6c8d44eaba542365f3cd08ef761d071d966c0042
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

<<<<<<< HEAD
@include for-tablet {
=======
<<<<<<< HEAD
@media (min-width:767px) {
>>>>>>> 6c8d44eaba542365f3cd08ef761d071d966c0042
  header {
    height: 5rem;
    width: var(--full-header-width);
    display: block;
<<<<<<< HEAD
=======
=======
  @media (min-width:767px) {
    header {
      height: 5rem;
      width: var(--full-header-width);
      display: block;
    }
>>>>>>> f03e3e1598d70a9c50562f4d780f46c0e85e1d82
>>>>>>> 6c8d44eaba542365f3cd08ef761d071d966c0042
  }
}
</style>
