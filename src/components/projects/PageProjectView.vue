<template>
  <div class="project-list" :style="{gridTemplateColumns: gridCss}">
    <section v-for="(work, index) in list" :key="index">
      <!-- info -->
      <header>
        <h1>{{index + 1}}</h1>
        <h2>{{work.name}}</h2>
        <p>{{work.description}}</p>
        <work-type>
          <!-- slot -->
          <li v-for="type in work.typeList" :key="type.id">{{type}}</li>
        </work-type>
      </header>
      <!-- image -->
      <div class="gallery" :style="{border: convertHex(work.themeColor)}">
        <img :src="require('../../assets/img/projects/' + work.path + '/' + work.gallery[0].fileName)" :alt="work.name + work.gallery[0].title" >
      </div>
    </section>
  </div>
</template>

<script>
  import worksList from '@/assets/json/projects.json'
  import workType from '@/components/projects/PageProjectType'
  export default {
    name: 'ProjectItem',
    data: function () {
      return {
        projectView: 1,
        list: worksList.projects,
        opacity: 50
      }
    },
    metaInfo: {
      title: 'my portfolio'
      // bodyAttrs: {
      //   style: 'background: rgba(133,241,193,.5)' //change background color
      // }
    },
    computed: {
      gridCss: function () {
        return 'repeat(' + (this.list).length + ',1fr)' //section grid number from json
      }
    },
    components: {
      workType
    },
    methods: {
      convertHex: function (color) {
        color = color.replace('#', '')
        let r = parseInt(color.substring(0, 2), 16)
        let g = parseInt(color.substring(2, 4), 16)
        let b = parseInt(color.substring(4, 6), 16)
        let result = 'rgba(' + r + ',' + g + ',' + b + ',' + this.opacity / 100 + ')'
        return '20px solid ' + result
      }
    }
  }

</script>

<style lang="scss" scoped>
  .project-list {
    padding: 20px 0;
    display: grid;
    section {
      display: grid;
      position: relative;
      background: rgba(255, 255, 255, .5);
      margin: 0 20px;
      &:first-child {
        margin: 0 20px 0 30px;
      }
      div,
      header {
        grid-template-rows: 1fr 300px;
      }
      .gallery {
        width: 400px;
        height: 200px;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
      header {
        padding: 20px;
        background: rgba(255, 255, 255, .5);
      }
    }
  }

@media (max-width: $breakpoint-mobile) {
  
}
</style>
