<template>
  <div>
    <svg width="100%" height="100%" x="0px" y="0px" id="background-svg" xmlns="http://www.w3.org/2000/svg" xml:space="preserve"
      viewBox="0 0 500 500" preserveAspectRatio="none">
      <g v-for="bg in bgList" :id="bg.name" style="display: none" :key="bg.id">
        <path :d="bg.path" />
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
            path: "M423.5,111.5c207.9-81.3,392.5-48,445,131c56.5,192.8-101.9,354.1-278,410c-211.3,67.1-400.6,0.8-439-123 C116.5,416.4,184.9,204.8,423.5,111.5z"
          }, {
            name: 'about',
            path: "M130.6,93.7c95.9-46.9,401-86.3,522,0s254,305,77,253.2s-229-383.2-419-376.3s-472,300.4-304,360.2 s846-139.2,549,89.8S-283.4,296.2,130.6,93.7z"
          },
          {
            name: 'projects',
            path: "M86.5,57.5c426-284,1089,624,996,56c-54.7-334.2-1082,861-408,705c522.7-121-1027-973-811-434 C7,742.6-106.2,186,86.5,57.5z"
          },
          {
            name: 'contact',
            path: "M-313.5,468.5c-593.3-700,1252.9,333.2,1616,96c408.8-267.1,171.5-685.4,21-384 C1226.8,374.1-59.2,768.5-313.5,468.5z"
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
      stroke: #85F1C1;
      stroke-width: 1px;
      fill: none;
      opacity: .8;
    }
  }
</style>
