<template>
  <div class="project-list" :style="{gridTemplateColumns: gridCss}">
    <section v-for="(work, index) in list" :key="index">
      <!-- info -->
      <header>
        <h1>{{index + 1}}</h1>
        <h2>{{work.name}}</h2>
        <p>{{work.description}}</p>
        <p>{{work.themeColor}}</p>
        <work-type>
          <!-- slot -->
          <li v-for="type in work.typeList" :key="type.id">{{type}}</li>
        </work-type>
      </header>
      <!-- image -->
      <div class="gallery" >
        <!-- :style="{border: '20px solid' + borderColor}" -->
        <img :src="require('../../assets/img/projects/' + work.path + '/' + work.gallery[0].fileName)" :alt="work.name + work.gallery[0].title">
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
        list: worksList.projects
      }
    },
    metaInfo: {
      title: 'my portfolio',
      bodyAttrs: {        
        style: 'background: rgba(133,241,193,.5)' //change background color
      },
      description: 'hong kong design personal portfolio, i can provide'
    },
    computed: {
      gridCss: function () {
        return 'repeat(' + (this.list).length + ',1fr)' //section grid number from json
      }
    },
    components: {
      workType
    }
    // methods: {
    //   convertHex: function (hex,opacity) {
    //     hex: hex.replace("#","")
    //     r = parseInt(hex.substring(0,2),16)
    //     g = parseInt(hex.substring(2,4),16)
    //     b = parseInt(hex,substring(4,6),16)
    //     result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity/100 + ')'
    //     return result
    //   },
    //  borderColor: function (index) {
    //     console.log(this.list[index].themeColor)
    //     return this.convertHex(this.list.themeColor,50)
    //   }
    // }
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

</style>
