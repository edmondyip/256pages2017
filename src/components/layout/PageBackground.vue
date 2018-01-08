<template>
  <div>
    <svg width="100%" height="100%" x="0px" y="0px" id="background-svg" xmlns="http://www.w3.org/2000/svg" xml:space="preserve"
      viewBox="0 0 720 480" preserveAspectRatio="none">
      <g style="display: none" v-for="bg in bgList" :id="bg.name" :key="bg.id">
        <path v-for="svgPath in bg.path" :d="svgPath" :key="svgPath.id" />
      </g>
    </svg>
  </div>
</template>

<script>
  import SVGMorpheus from "@/assets/js/svg-morpheus"
  export default {
    name: 'Background',
    data: function () {
      return {
        myIcon: null,
        target: this.$route.name,
        bgList: [{
            name: 'home',
            path: [
              "M-26.5,415c0-108.6,0-276.5,0-350c18.7,0,43,0,60,0c0,46.4,0,286.1,0,350C16,415-9.8,415-26.5,415z",
              "M686.5,415c0-108.6,0-276.5,0-350c18.7,0,43,0,60,0c0,46.4,0,286.1,0,350C729,415,703.2,415,686.5,415z"
            ]
          }, {
            name: 'about',
            path: [
              "M794,264.8c40.2,40.2,102.4,102.4,129.7,129.7C837.2,481,724.8,593.3,646,672.2c-17.2-17.2-106-106-129.7-129.7 C597.2,461.6,716.6,342.2,794,264.8z",
              "M58.9-165.1C99.1-124.9,161.3-62.6,188.6-35.4C120.2,32.9,31.5,121.7-30.8,184c-17.2-17.2-106-106-129.7-129.7 C-96.5-9.7-2.3-103.9,58.9-165.1z"
            ]
          },
          {
            name: 'projects',
            path: [
              "M753.7,74c0,135.1,0,344.5,0,436c-245.3,0-563.8,0-787.3,0c0-57.7,0-356.5,0-436C195.8,74,534.1,74,753.7,74z"
            ]
          },
          {
            name: 'contact',
            path: [
              "M-271.3,467c56.7-104.2,144.6-265.4,183-336c207,112.8,475.8,259.2,664.5,361.9c-24.2,44.5-149.6,274.7-183,336 C199.5,723.5-86,568-271.3,467z"
            ]
          },
          {
            name: 'error',
            path: [
              "M214,372.5c0-87.7,0-223.2,0-282.5c91,0,209.3,0,292,0c0,37.5,0,230.9,0,282.5C420.8,372.5,295.3,372.5,214,372.5z"
            ]
          }
        ]
      }
    },
    methods: {
      tween: function () {
        this.myIcon.to(this.target)
      }
    },
    mounted: function () {
      this.myIcon = new SVGMorpheus('#background-svg')
      this.target = this.routeName
      this.tween()
    },
    watch: {
      '$route' (to, from) {
        if (to.params.url === undefined) {
          this.target = this.routeName
          this.tween()
        }
      }
    }
  }

</script>

<style lang="scss">
  svg#background-svg {
    margin: auto;
    display: block;
    position: fixed;
    z-index: -100;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    path {
      width: 100%;
      height: 100%;
      fill: $themeColor;
      opacity: .8;
    }
  }

</style>
