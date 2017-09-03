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
import Footer from '~components/pages-footer.vue'

export default {
  name: "IndexLayout",
  components: {
    "app-navbar" : NavBar
  }
}
</script>

<!-- Style -->
<style lang="scss" scoped>
@import "~assets/scss/setting.scss";
  #container {
    flex-wrap: nowrap;
<<<<<<< HEAD
    width: var(--container-width);
=======
    width: 100vw;
    margin-left: -10rem;
>>>>>>> 908f81ba55806ca0b47c0eb501064a5a452c62fa
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

</style>

<!--

@include for-tablet {
  .nav-btn {
    display: none;
  }
<<<<<<< HEAD
  @include for-desktop {
    #container {
<<<<<<< HEAD
      width: 1200px;
      height: 90vh;
=======
      width: var(--floated-container-width);
      height: var(--floated-container-height);
>>>>>>> 32f8c880c3d3f872a65edef5fd42649bf28313c5
      margin: 2.5vh auto;
      box-shadow: 0 0 5rem rgba(0,0,0,.2);
    }
=======
}
@include for-desktop {
  #container {
    width: 100vw;
    margin: 2.5vh auto;
    box-shadow: 0 0 5rem rgba(0,0,0,.2);
>>>>>>> 908f81ba55806ca0b47c0eb501064a5a452c62fa
  }
}

->
