<template>
  <div class="project-list" :style="{fullWidth}">
    <section v-for="(work, index) in list" :key="index">
      <div>
          <p>{{number}}</p>
        <h2>{{work.name}}</h2>
        <p>{{work.description}}</p>
      </div>
      <div>
        <img :src="require('../../assets/img/works/' + work.path + '/' + work.gallery[0].fileName)" :alt="work.name + work.gallery[0].title">
      </div>
    </section>
  </div>
</template>

<script>
  import worksList from '@/assets/json/projects.json'
  export default {
    name: 'ProjectItem',
    data: function () {
      return {
        projectView: 1,
        list: worksList.projects,
        number: (Object.keys(worksList.projects).length)*100,
        fullWidth: 'width:' + this.number + 'vw'
    }
    },
    metaInfo: {
      title: 'my portfolio',
      bodyAttrs: {
        style: 'background: #85F1C1'
      }
    }
  }
  
</script>

<style lang="scss" scoped>
  .project-list {
    margin: 10px auto;
    display: flex;
    overflow-y: scroll;
    section {
      width: 800px;
      padding: 20px;
      display: block;
      background: rgba(255, 255, 255, .5);
      margin: 0 50px;
      div {
        display: inline-block;
        width: 45%;
        position: relative;
        img {
          width: 100%;
        }
      }
    }
  }

</style>
