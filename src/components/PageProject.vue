<template>
  <project-list />
</template>

<script>
  import ProjectList from "@/components/projects/ProjectList"
  export default {
    name: 'ProjectPage',
    components: {
      ProjectList
    }
  }
</script>

<style lang="scss" scoped>
  section {
    width: 950px;
    height: 450px;
    background: #ffffff;
    h1 {
      display: none;
    }
  }
</style>
