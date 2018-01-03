<template>
  <div>
    <h1>Projects</h1>
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
  div {
    h1 {
      display: none;
    }
  }
  .wrapper {
    // position: absolute;
    // width: 1000px;
    // height: 100vw;
    // padding: 450px 0 0;
    // top: 700px;
    // overflow-y: auto;
    // overflow-x: hidden;
    // transform: rotate(-90deg);
    // transform-origin: left top;
  } 

  #scroll-svg {
    fill: #fff;
    width: 20px;
    position: absolute;
    left: 50vw;
  }

  @media (max-width: $breakpoint-mobile) {
    div {
      h1 {
        display: block;
      }
    }
    .wrapper {
      position: relative;
      width: 100%;
      height: unset;
      padding: 0 0 50px 0;
      top: 20px;
      overflow: initial;
      transform: rotate(0);
      transform-origin: initial;
    }
    #scroll-svg {
      display: none;
    }
  }

</style>
