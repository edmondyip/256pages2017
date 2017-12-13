<template>
  <div>
    <svg id="scroll-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 86">
      <path class="cls-1" d="M0,34V52a18,18,0,0,0,36,0V34A18,18,0,0,0,0,34ZM18,20A14,14,0,0,1,32,34V52A14,14,0,0,1,4,52V34A14,14,0,0,1,18,20Z"
      />
      <path class="cls-1" d="M18,37a2,2,0,0,0,2-2V29a2,2,0,0,0-4,0v6A2,2,0,0,0,18,37Z" />
      <path class="cls-1" d="M16.6,85.4a1.93,1.93,0,0,0,2.8,0l5-5a2,2,0,0,0-2.8-2.8L18,81.2l-3.6-3.6a2,2,0,0,0-2.8,2.8Z" />
      <path class="cls-1" d="M16.6.6l-5,5a1.93,1.93,0,0,0,0,2.8,1.93,1.93,0,0,0,2.8,0L18,4.8l3.6,3.6a1.93,1.93,0,0,0,2.8,0,1.93,1.93,0,0,0,0-2.8l-5-5A1.93,1.93,0,0,0,16.6.6Z"
      />
    </svg>
    <div class="wrapper">
      <project-view />
    </div>
  </div>
</template>

<script>
  import ProjectView from "@/components/projects/PageProjectView"
  export default {
    name: 'ProjectList',
    components: {
      ProjectView
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    position: absolute;
    width: 1000px;
    height: 100vw;
    padding: 450px 0 0;
    top: 700px;
    overflow-y: auto;
    overflow-x: hidden;
    transform: rotate(-90deg);
    transform-origin: left top;
  } 

  #scroll-svg {
    fill: #fff;
    width: 20px;
    position: absolute;
    left: 50vw;
  }

  @media (max-width: $breakpoint-mobile) {
    .wrapper {
      position: relative;
      width: 100%;
      height: unset;
      padding: 0 0 50px 0;
      top: 100px;
      overflow: initial;
      transform: rotate(0);
      transform-origin: initial;
    }
    #scroll-svg {
      display: none;
    }
  }

</style>
