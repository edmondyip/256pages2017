<template>
  <div>
    <svg width="100%" height="100%" x="0px" y="0px" id="background-svg" xmlns="http://www.w3.org/2000/svg" xml:space="preserve"
      viewBox="0 0 720 480" preserveAspectRatio="none">
      <g v-for="bg in bgList" :id="bg.name" style="display: none" :key="bg.id">
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
        target: 'home',
        bgList: [{
            name: 'home',
            path: ["M1010.9,148.3c0,56.9,0,144.9,0,183.4c-113,0-259.7,0-362.7,0c0-24.3,0-149.9,0-183.4 C754,148.3,909.8,148.3,1010.9,148.3z",
            "M-290.9,331.7c0-56.9,0-144.9,0-183.4c113,0,259.7,0,362.7,0c0,24.3,0,149.9,0,183.4 C-34,331.7-189.8,331.7-290.9,331.7z"]
          }, {
            name: 'about',
            path: ["M794,264.8c40.2,40.2,102.4,102.4,129.7,129.7C837.2,481,724.8,593.3,646,672.2c-17.2-17.2-106-106-129.7-129.7 C597.2,461.6,716.6,342.2,794,264.8z",
            "M58.9-165.1C99.1-124.9,161.3-62.6,188.6-35.4C120.2,32.9,31.5,121.7-30.8,184c-17.2-17.2-106-106-129.7-129.7 C-96.5-9.7-2.3-103.9,58.9-165.1z"]
          },
          {
            name: 'projects',
            path: ["M753.7,74c0,112.8,0,287.6,0,364c-245.3,0-563.8,0-787.3,0c0-48.2,0-297.6,0-364C195.8,74,534.1,74,753.7,74z"]
          },
          {
            name: 'contact',
            path: ["M-271.3,467c56.7-104.2,144.6-265.4,183-336c207,112.8,475.8,259.2,664.5,361.9c-24.2,44.5-149.6,274.7-183,336 C199.5,723.5-86,568-271.3,467z"]
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
    },
    watch: {
      '$route' (to, from) {
        this.target = this.routeName
        this.tween()
      }
    }
  }
</script>

<style lang="scss">
  svg#background-svg {
    display: block;
    position: absolute;
    z-index: -100;
    path {
      width: 100%;
      height: 100%;
      // stroke: #85F1C1;
      // stroke-width: 1px;
      fill: #85F1C1;
      opacity: .8;
    }
  }
</style>
