<template>
  <section>
    <h2><slot v-if="projectId <= 9">0</slot>{{projectId + 1}}</h2>
    <span class="block" :style="{background: list[projectId].themeColor}"></span>
    <h1>{{list[projectId].name}}</h1>
    <p>{{list[projectId].description}}</p>
    <work-type>
      <li v-for="type in list[projectId].typeList" :key="type.id">{{type}}</li>
    </work-type>
  </section>
</template>

<script>
  import worksList from '@/assets/json/projects.json'
  import workType from '@/components/projects/ProjectType'
  export default {
    name: 'ProjectItem',
    props: ['projectId'],
    data: function () {
      return {
        list: worksList.projects
      }
    },
    components: {
      workType
    }
  }

</script>

<style lang="scss" scoped>
  section {
    position: relative;
    padding: 50px;
    background: #ffffff;
    text-indent: 0px;
    transition: .4s;
    .block {
      position: absolute;
      top: 400px;
      right: 0;
      height: 100px;
      width: 100px;
      transition: .5s;
    }
    h2 {
      font-size: 15rem;
      color: #efefef;
      position: absolute;
      bottom: 0;
      left: 0;
    }
    h1,
    h2,
    p,
    ul {
      transition: .4s;
      margin-left: 0;
    }
    &.load {
      h1,
      h2,
      p,
      ul {
        margin-left: -500px;
      }
    }
  }

  @media (max-width: $breakpoint-mobile) {
    section {
      height: 200px;
      padding: 25px;
    }
  }

</style>
