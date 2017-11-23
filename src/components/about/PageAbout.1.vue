<template>
<section>
  <div class="about-cover" :class="[scrolled ? 'scrolled' : '']">
    <div class="about-me">
      <img :scroll="handleScroll" src="~assets/img/about/about-me.jpg" alt="edmond yip">
      <h1 class="about-title">about me</h1>
    </div>
    <div class="about-256">
      <img :scroll="handleScroll" src="~assets/img/about/about-256.jpg" alt="edmond yip">
      <h1 class="about-title">test</h1>
    </div>
  </div>
</section>
</template>

<script>
  export default {
    name: 'Banner',
    data: function () {
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
section {
  position: relative;
  .about-cover {
    position: fixed;
    display: flex;
    justify-content: center;
    height: 300px;
    width: 100%;
    transition: .5s;
    opacity: 1;
    div {
      display: block;
      img {
        position: absolute;
        transition-delay: .5s;
        transition: .8s;
      }
      h1.about-title {
        font-size: 60px;
        letter-spacing: 2px;
        // right: 10vw;
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
}
</style>
