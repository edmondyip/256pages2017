<template>
  <section>
    <span><slot v-if="projectId <= 9">0</slot>{{projectId + 1}}</span>
    <div class="block" :style="{background: list[projectId].themeColor}"></div>
    <h1>{{list[projectId].name}}</h1>
    <p>{{list[projectId].description}}</p>
    <project-type>
      <li v-for="type in list[projectId].typeList" :key="type.id">{{type}}</li>
    </project-type>
  </section>
</template>

<script>
  import ProjectType from '@/components/projects/ProjectType'
  export default {
    name: 'ProjectItem',
    props: ['projectId', 'list'],
    data: function () {
      return {
      }
    },
    components: {
      ProjectType
    }
  }
</script>

<style lang="scss" scoped>
@import '../../assets/css/_global.scss';
  section {
    position: relative;
    padding: 50px;
    height: 400px;
    background: #ffffff;
    text-indent: 0px;
    transition: .4s;
    overflow: hidden;
    .block {
      position: absolute;
      top: 400px;
      right: 0;
      height: 100px;
      width: 100px;
      transition: .8s;
    }
    span {
      font-family: $titleFont;
      font-size: 15rem;
      line-height: 15rem;
      height: 150px;
      color: #efefef;
      position: absolute;
      bottom: -20px;
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
