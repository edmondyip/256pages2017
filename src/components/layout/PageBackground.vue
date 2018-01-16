<template>
  <div>
    <svg v-if="mobileCheck === true" id="background-svg" xml:space="preserve" viewBox="0 0 480 720" preserveAspectRatio="none">
      <g style="display: none" v-for="bg in bgList" :id="bg.name" :key="bg.id">
        <path v-for="svgPath in bg.mobile" :d="svgPath" :key="svgPath.id" />
      </g>
    </svg>
    <svg v-else id="background-svg" xml:space="preserve" viewBox="0 0 720 480" preserveAspectRatio="xMidYMid">
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
        bgRatio: 'xMidYMid',
        bgList: [{
            name: 'home',
            path: [
              "M-82.6,397c0-97.4,0-248.1,0-314c36.9,0,84.7,0,118.2,0c0,41.6,0,256.7,0,314C1.1,397-49.7,397-82.6,397z",
              "M684.4,397c0-97.4,0-248.1,0-314c36.9,0,84.7,0,118.2,0c0,41.6,0,256.7,0,314C768.1,397,717.3,397,684.4,397z"
            ],
            mobile: [
              "M-95.1,509c0-120,0-305.8,0-387c36.9,0,84.7,0,118.2,0c0,51.3,0,316.4,0,387C-11.4,509-62.2,509-95.1,509z",
              "M456.9,509c0-120,0-305.8,0-387c36.9,0,84.7,0,118.2,0c0,51.3,0,316.4,0,387C540.6,509,489.8,509,456.9,509z"
            ]
          }, {
            name: 'about',
            path: [
              "M-0.3-217.4C39.9-177.1,192.8-29,220.1-1.8C151.6,66.5,62,155.1-0.3,217.4c-17.2-17.2-196-195.5-219.7-219.1 C-156.1-65.8-61.5-156.1-0.3-217.4z",
              "M719.7,262.6C759.9,302.9,912.8,451,940,478.2C871.7,546.5,782,635,719.7,697.3c-17.2-17.2-196-195.4-219.7-219.1 C564,414.2,658.5,323.9,719.7,262.6z"
            ],
            mobile: [
              "M22.2-137.9C-11.6-104.1-89-26.7-139,23.3c38.6,38.6,98.2,98.2,138.7,138.7C29.1,132.5,139.5,22.1,160.9,0.7 C121.6-38.6,65.5-94.7,22.2-137.9",
              "M480.2,559.1C446.4,592.9,369,670.3,319,720.3c38.6,38.6,98.2,98.2,138.7,138.7c29.4-29.4,139.9-139.9,161.2-161.2 C579.6,658.4,523.5,602.3,480.2,559.1z"
            ]
          },
          {
            name: 'project',
            path: [
              "M1243,74c0,125.8,0,320.8,0,406c-550.2,0-1264.6,0-1765.9,0c0-53.7,0-332,0-406C-8.4,74,750.4,74,1243,74z"
            ],
            mobile: [
              "M0,720C0,526.1,0,226.2,0,95c149.8,0,344,0,480,0c0,82.8,0,510.9,0,625C339.9,720,133.6,720,0,720z"
            ]
          },
          {
            name: 'contact',
            path: [
              "M-271.3,467c56.7-104.2,144.6-265.4,183-336c207,112.8,475.8,259.2,664.5,361.9c-24.2,44.5-149.6,274.7-183,336 C199.5,723.5-86,568-271.3,467z"
            ],
            mobile: [
              "M-155,663.5C-110.8,587.4-42.2,469.6-12.3,418C149.2,500.4,358.8,607.4,506,682.5C487.1,715,389.3,883.2,363.3,928 C212.2,851-10.5,737.3-155,663.5z"
            ]
          },
          {
            name: 'error',
            path: [
              "M214,372.5c0-87.7,0-223.2,0-282.5c91,0,209.3,0,292,0c0,37.5,0,230.9,0,282.5C420.8,372.5,295.3,372.5,214,372.5z"
            ],
            mobile: [
              "M53,400.5c0-87.7,0-223.2,0-282.5c116.6,0,268.1,0,374,0c0,37.5,0,230.9,0,282.5C317.9,400.5,157.1,400.5,53,400.5z"
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
        // console.log(to, from)
        if (to.params.url === undefined || 'eventor' && from.params.url === undefined) {
          this.target = this.routeName
          this.tween()
        }
      }
    }
  }

</script>

<style lang="scss">
  svg#background-svg {
    margin: 0 auto;
    display: block;
    position: fixed;
    z-index: -100;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    path {
      fill: $themeColor;
      opacity: .8;
    }
  }

</style>
