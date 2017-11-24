<template>
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
    width: 100vw;
    overflow-x: visible;
    overflow-y: hidden;
  }

</style>
