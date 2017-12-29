<template>
  <header :class="{scrolled: scrolled === true}">
    <div class="nav-btn" @click="navOpen = !navOpen">
      <svg x="0px" y="0px" id="mobile-btn" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 25 25" preserveAspectRatio="none">
        <g id="close">
          <polygon points="23,4.7 20.3,2 12.5,9.8 4.7,2 2,4.7 9.8,12.5 2,20.3 4.7,23 12.5,15.2 20.3,23 23,20.3 15.2,12.5"/>
        </g>
        <g id="open">
          <rect x="3.04" y="5.04" width="18.93" height="2.92" />
          <rect x="3.04" y="11.04" width="18.93" height="2.92" />
          <rect x="3.04" y="17.04" width="18.93" height="2.92" />
        </g>
      </svg>
    </div>
    <navbar :class="{open: navOpen}" />
  </header>
</template>

<script>
  import SVGMorpheus from "@/assets/js/svg-morpheus"
  import Navbar from "@/components/layout/PageNavbar"
  export default {
    name: 'Header',
    data: function () {
      return {
        tab: null,
        navOpen: false,
        scrolled: false
      }
    },
    methods: {
      tween: function (target) {
        this.tab.to(target)
      },
      scrollPoisition: function () {
        this.scrolled = window.scrollY > 0;
      }
    },
    mounted: function () {
      this.tab = new SVGMorpheus('#mobile-btn',
      {
        duration: 300
      })
    },
    created: function () {
      window.addEventListener('scroll', this.scrollPoisition)
    },
    beforeDestroy: function () {
      window.removeEventListener('scroll', this.scrollPoisition)
    },
    components: {
      Navbar
    },
    watch: {
      navOpen: function () {
        if (this.navOpen === false) {
          this.tween('open')
        }else {
          this.tween('close')
        }
      },
      '$route' (to,from) {
        this.tween('open')
        this.navOpen = false
      }
    }
  }

</script>

<style scoped lang="scss">
  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    padding: 3vh 0;
    transition: .5s;
    .nav-btn {
      position: fixed;
      top: 5px;
      left: 5px;
      width: 25px;
      height: 25px;
      padding: 5px;
      display: none;
      border: none;
      // background: #ffffff;
      z-index: 2;
      // border-radius: 30px;
      #mobile-btn {
        width: 100%;
        height: 100%;
        fill: $darkColor;
      }
    }
    &.scrolled {
      background: rgba($color: #ffffff, $alpha: .7);
    }
  }

  #app.home header {
    padding: 8vh 0;
  }

  @media (max-width: $breakpoint-mobile) {
    header {
      width: 100%;
      height: 50px;
      padding: 0;
      .nav-btn {
        display: block;
      }
    }
  }

</style>
