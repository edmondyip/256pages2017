<template>
  <div>
    <svg width="100%" height="100%" x="0px" y="0px" id="background-svg" xmlns="http://www.w3.org/2000/svg" xml:space="preserve"
      viewBox="0 0 500 500" preserveAspectRatio="none">
      <path class="bg01" d="M423.5,111.5c207.9-81.3,392.5-48,445,131c56.5,192.8-101.9,354.1-278,410c-211.3,67.1-400.6,0.8-439-123
	C116.5,416.4,184.9,204.8,423.5,111.5z" />
      <path class="bg02" visibility="hidden" d="M130.6,93.7c95.9-46.9,401-86.3,522,0s254,305,77,253.2s-229-383.2-419-376.3s-472,300.4-304,360.2
	s846-139.2,549,89.8S-283.4,296.2,130.6,93.7z" />
      <path class="bg03" visibility="hidden" d="M86.5,57.5c426-284,1089,624,996,56c-54.7-334.2-1082,861-408,705c522.7-121-1027-973-811-434
	C7,742.6-106.2,186,86.5,57.5z" />
      <path class="bg04" visibility="hidden" d="M-313.5,468.5c-593.3-700,1252.9,333.2,1616,96c408.8-267.1,171.5-685.4,21-384
	C1226.8,374.1-59.2,768.5-313.5,468.5z" />
    </svg>
    <div @click="tween">test</div>
  </div>
</template>

<script>
  import KUTE from "kute.js"
  import kuteSvg from "kute.js/kute-svg.js"
  export default {
    name: 'bg',
    data: function () {
      return {
        bgHome: '.bg01',
        bgAbout: '.bg02',
        bgProjects: '.bg03',
        bgContact: '.bg04'
      }
    },
    mounted: {
      tween: function () {
        self = this
        KUTE.to((self.bgProjects), {
          path: (self.bgContact)
        }, {
          easing: 'easingCubicInOut',
          yoyo: true,
          reverseFirstPath: true
        }).start()
      }
    }
    }
  }
</script>

<style lang="scss" scoped>
  svg {
    display: block;
    position: absolute;
    z-index: -100;
    path {
      width: 100%;
      height: 100%;
      stroke: #85F1C1;
      stroke-width: 50px;
      fill: none;
      opacity: .2;
    }
  }
</style>
