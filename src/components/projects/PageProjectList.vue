<template>
  <!-- <ul class="filter">
      <li>ui</li>
      <li>ux</li>
    </ul> -->
  <div class="wrapper">
    <project-view />
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
    overflow-x: auto;
    overflow-y: hidden;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    padding: 0;
    ul.filter {
      position: relative;
      list-style: none;
      transition: .5s;
      margin: 0 auto;
      li {
        background: #85F1C1;
        font-size: 12px;
        line-height: 14px;
        margin: 5px;
        display: inline-block;
        padding: 8px;
        &:first-child {
          margin: 5px 5px 5px 0;
        }
      }
    }
  }
</style>
