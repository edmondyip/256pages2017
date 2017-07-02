<!-- Template -->
<template>
  <div id="container" v-bind:class="{ active: tab }">
    <div class="nav-btn" v-on:click="tab = !tab">
      <div class="burger">Menu</div>
    </div>
    <app-header/>
    <div class="overlay" v-show="tab" v-on:click="tab = !tab"></div>
    <article id="content">
      <div v-if="$route.name=='index'"></div>
      <h1 v-else-if class="title">{{ $route.name }}</h1>
      <nuxt/>
    </article>
    <app-footer/>
  </div>
</template>

<!-- Script -->
<script>
  import Header from '~components/pages-header.vue'
  import Footer from '~components/pages-footer.vue'
  export default {
    name: "DefaultLayout",
    components: {
      "app-header" : Header,
      "app-footer" : Footer
    },
    data: () => ({
      tab: false
    })
  }
</script>

<!-- Style -->
<style lang="scss" scoped>
@import "~assets/css/setting.scss";
  #container {
    flex-wrap: nowrap;
    width: var(--container-width);
    min-height: 100%;
    margin-left: -10rem;
    opacity: 1;
    transition: .5s;
    background: #fff;
    #content {
      padding: 1rem;
      width: 100%;
      position: relative;
      align-content: flex-start;
      transition: .5s;
      z-index: 100;
    }
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
      height: 95vh;
      margin: 2.5vh auto;
      box-shadow: 0 0 5rem rgba(0,0,0,.2);
    }
  }
</style>
