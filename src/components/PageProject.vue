<template>
  <div>
    <h1>Projects</h1>
    <p><router-link to="/projects/eventor">Open</router-link></p>
  </div>
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
  div {
    h1 {
      display: none;
    }
  }
</style>
