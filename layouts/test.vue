<!-- Template -->
<template>
  <div id="container" v-bind:class="{ active: tab }">
    <div class="nav-btn" v-on:click="tab = !tab">
      <div class="burger">Menu</div>
    </div>
    <div class="overlay" v-show="tab" v-on:click="tab = !tab"></div>
    <article id="content">
      <div v-if="$route.name=='index'"></div>
      <h1 v-else class="title">{{ $route.name }}</h1>
      <nuxt/>
    </article>
  </div>
</template>

<!-- Script -->
<script>
  export default {
    data: () => ({
      tab: false
    })
  }
</script>

<!-- Style -->
<style lang="scss" scoped>
@import ""
  #container {
    flex-wrap: nowrap;
    width: var(--container-width);
    height: 100%;
    opacity: 1;
    transition: .5s;
    background: $container-color;
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
  @media (min-width: 767px) {
    #container {
    }
    .nav-btn {
      display: none;
    }
  }
  @media (min-width: 1280px) {
    #container {
      width: 1200px;
      height: 95vh;
      margin: 2.5vh auto;
      box-shadow: 0 0 5rem rgba(0,0,0,.2);
    }
  }
</style>
