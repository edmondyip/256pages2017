<!-- Template -->
<template>
  <div id="container">
    <app-navbar/>
    <nuxt/>
  </div>
</template>

<!-- Script -->
<script>
import NavBar from '~components/index-nav.vue'
export default {
  name: "IndexLayout",
  components: {
    "app-navbar" : NavBar
  }
}
</script>

<!-- Style -->
<style lang="scss" scoped>
@import "~assets/css/setting.scss";
  #container {
    flex-wrap: nowrap;
    width: var(--container-width);
    opacity: 1;
    transition: .5s;
    background: #fff;
  }
  #container.active {
    margin-left: 0;
  }
  .overlay {
    position: fixed;
    width: 200%;
    height: 100%;
    background: rgba(0,0,0,.7);
    transition: .5s;
    z-index: 200;
  }
  .nav-btn {
    display: block;
    position: fixed;
    top: .1rem;
    left: .1rem;
    border: 0;
    background: #52c6d6;
    color: #fff;
    padding: .1rem;
    z-index: 1000;
    :hover {
      background: darken(#52c6d6,20%);
    }
  }
  @include for-tablet {
    .nav-btn {
      display: none;
    }
  }
  @include for-desktop {
    #container {
      width: 1200px;
      height: 90vh;
      margin: 2.5vh auto;
      box-shadow: 0 0 5rem rgba(0,0,0,.2);
    }
  }
</style>
