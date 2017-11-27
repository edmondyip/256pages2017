<template>
<div>
  <svg width="100%" height="100%" x="0px" y="0px" id="background-svg" xmlns="http://www.w3.org/2000/svg"  xml:space="preserve" viewBox="0 0 500 500" preserveAspectRatio="none">
       <path class="bg01" d="M567.6,107.5c-157.7,132.8,273.5,13.9,280,135c10.6,197.2-494.4,254.7-374,24c99.4-190.5,174.1,371.6,66,246
	C435.9,392,678.9,13.8,567.6,107.5z"/>
 <path class="bg02" visibility="hidden" d="M130.6,93.7c95.9-46.9,401-86.3,522,0s254,305,77,253.2s-229-383.2-419-376.3s-472,300.4-304,360.2
	s846-139.2,549,89.8S-283.4,296.2,130.6,93.7z"/>
  </svg>
<div @click="go">test</div>
<div @click="back">back</div>

</div>

</template>

<script>
  import KUTE from "kute.js"
  import kuteSvg from "kute.js/kute-svg.js"
  export default {
    name: 'bg',
    data: {

    },
    methods: {
      go: function () {
        KUTE.fromTo('.bg01', {path: '.bg01'}, {path: '.bg02'}).start()
        console.log('click')
      },
        back: function () {
        KUTE.To('.bg02', {path: '.bg01'}).start()
        console.log('click')
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
            fill: none;
        }
    }
</style>
