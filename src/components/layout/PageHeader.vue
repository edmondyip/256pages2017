<template>
  <header :class="{scrolled: scrolled === true, home: routeName === 'home'}">
    <div class="nav-btn" @click="navOpen = !navOpen">
      <svg id="mobile-btn" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 25 25" preserveAspectRatio="none">
        <g id="close">
          <polygon points="23,4.7 20.3,2 12.5,9.8 4.7,2 2,4.7 9.8,12.5 2,20.3 4.7,23 12.5,15.2 20.3,23 23,20.3 15.2,12.5" />
        </g>
        <g id="open">
          <rect x="3" y="5" width="19" height="3" />
          <rect x="3" y="11" width="19" height="3" />
          <rect x="3" y="17" width="19" height="3" />
        </g>
      </svg>
    </div>
    <!-- <navbar :class="{open: navOpen}" /> -->
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
      this.tab = new SVGMorpheus('#mobile-btn', {
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
        } else {
          this.tween('close')
        }
      },
      '$route' (to, from) {
        if (to.params.url === undefined || 'eventor' && from.params.url === undefined) {
          this.tween('open')
          this.navOpen = false
        }
      }
    }
  }

</script>

<style scoped lang="scss">
@import '../../assets/css/_global.scss';
  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    padding: 40px 0;
    transition: .5s;
    .nav-btn {
      position: fixed;
      top: 5px;
      left: 5px;
      width: 30px;
      height: 30px;
      padding: 5px;
      display: none;
      border: none;
      z-index: 2;
      #mobile-btn {
        width: 100%;
        height: 100%;
        fill: $darkColor;
      }
    }
    &.scrolled {
      background: rgba($color: #ffffff, $alpha: .7);
      padding: 0;
    }
    &.home {
      padding: 60px 0;
    }
  }

  @media (max-width: $breakpoint-mobile) {
    header {
      width: 100%;
      height: 50px;
      padding: 10px 0;
      .nav-btn {
        display: block;
      }
      &.home {
        padding: 0;
      }
    }
  }

</style>
