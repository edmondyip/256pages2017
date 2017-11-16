<template>
  <div class="about-cover" :class="[scrolled ? 'scrolled' : '']">
    <img v-on:scroll="handleScroll" src="~assets/img/about/cover.jpg" alt="edmond yip">
    <h1 class="about-title">edmond yip
      <span>design portfolio 2017</span>
    </h1>
  </div>
</template>

<script>
  export default {
    name: 'Banner',
    data () {
      return {
        scrolled: null
      }
    },
    methods: {
      handleScroll () {
        this.scrolled = window.scrollY > 150
      }
    },
    created () {
      window.addEventListener('scroll', this.handleScroll)
    },
    destroyed () {
      window.addEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style scoped lang="scss">
  .about-cover {
    position: relative;
    display: block;
    height: 321px;
    // width: 100vw;
    // left: 0;
    max-width: 100%;
    transition: .5s;
    opacity: 1;
    img {
      position: absolute;
      left: -300px;
      transition-delay: .5s;
      transition: .8s;
    }
    h1.about-title {
      font-size: 60px;
      letter-spacing: 2px;
      position: absolute;
      right: 10vw;
      color: #000000;
      display: block;
      margin: 175px 0 0;
      transition: .4s;
      span {
        display: block;
        font-size: 35px;
        margin: 0 0 0 50px;
        transition: .8s;
      }
    }
  }

  .about-cover.scrolled {
    opacity: 0;
    img {
      left: -100%;
    }
    h1.about-title {
      right: -100%;
    }
  }
</style>
