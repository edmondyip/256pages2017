<template>
  <div class="wrapper">
    <h1>Projects</h1>
    <button @click="backProject()" :disabled="projectId < 0">Back</button>
    <button @click="nextProject()" :disabled="projectId == (list.length - 1)">Next</button>
    <project-view :project-id="projectId" />
  </div>
</template>

<script>
  import worksList from '@/assets/json/projects.json'
  import ProjectView from "@/components/projects/PageProjectView"
  export default {
    name: 'ProjectList',
    data: function () {
      return {
        projectId: 0,
        list: worksList.projects
      }
    },
    components: {
      ProjectView
    },
    methods: {
      backProject: function () {
        return this.projectId -= 1
      },
      nextProject: function () {
        return this.projectId += 1
      }
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    width: calc(100% - 40px);
    position: relative;
    padding: 0 20px;
    h1 {
      display: none;
    }
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
      overflow: initial;
      transform: rotate(0);
      transform-origin: initial;
    }
    #scroll-svg {
      display: none;
    }
  }

</style>
