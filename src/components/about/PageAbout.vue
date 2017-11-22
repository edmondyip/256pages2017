<template>
  <div class="about-cover">
    <div class="about-me">
      <!-- <img v-on:scroll="handleScroll" src="~assets/img/about/about-me.jpg" alt="edmond yip"> -->
      <h1 class="about-title">about me</h1>
    </div>
    <div class="about-256">
      <!-- <img v-on:scroll="handleScroll" src="~assets/img/about/about-256.jpg" alt="edmond yip"> -->
      <h1 class="about-title">about 256</h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Banner',
    data: function () {
      return {
        scrolled: null
      }
    }
  }
</script>

<style scoped lang="scss">
  .about-cover {
    position: absolute;
    display: flex;
    justify-content: center;
    height: 300px;
    width: 100%;
    transition: .5s;
    opacity: 1;
    left: 0;
    right: 0;
    div {
      display: block;
      width: 50%;
      img {
        position: absolute;
        transition-delay: .5s;
        transition: .8s;
      }
      h1.about-title {
        font-size: 60px;
        letter-spacing: 2px;
        color: #000000;
        display: block;
        transition: .4s;
        }
      }
    }
  

</style>
