<template>
    <section>
      <transition>
      <header>
        <h1>{{projectId + 1}}</h1>
        <h2>{{list[projectId].name}}</h2>
        <p>{{list[projectId].description}}</p>
        <work-type>
          <li v-for="type in list[projectId].typeList" :key="type.id">{{type}}</li>
        </work-type>
      </header>
      </transition>
      <!-- <div class="gallery" :style="{border: convertHex(list[projectId].themeColor)}"> -->
      <div class="gallery">        
        <img :src="require('../../assets/img/projects/' + list[projectId].path + '/' + list[projectId].gallery[0].fileName)" :alt="list[projectId].name + list[projectId].gallery[0].title">
      </div>
    </section>
</template>

<script>
  import worksList from '@/assets/json/projects.json'
  import workType from '@/components/projects/PageProjectType'
  export default {
    name: 'ProjectItem',
    props: ['projectId'],
    data: function () {
      return {
        list: worksList.projects
        // opacity: 50,
      }
    },
    metaInfo: {
      title: 'my projects'
    },
    // computed: {
    //   gridCss: function () {
    //     return 'repeat(' + (this.list).length + ',1fr)' //section grid number from json
    //   }
    // },
    components: {
      workType
    }
    // methods: {
    //   convertHex: function (color) {
    //     color = color.replace('#', '')
    //     let r = parseInt(color.substring(0, 2), 16)
    //     let g = parseInt(color.substring(2, 4), 16)
    //     let b = parseInt(color.substring(4, 6), 16)
    //     let result = 'rgba(' + r + ',' + g + ',' + b + ',' + this.opacity / 100 + ')'
    //     return '10px solid ' + result
    //   }
    // }
  }

</script>

<style lang="scss" scoped>
    section {
      display: grid;
      width: 100%;
      height: 500px;
      position: relative;
      background: #ffffff;
      grid-template-columns: 50% 50%;
      .gallery {
        overflow: hidden;
        img {
          height: 100%;
          display: block;
        }
      }
      header {
        padding: 50px;
      }
    }

  // @media (max-width: $breakpoint-mobile) {
  //   .project-list {
  //     display: block;
  //     section {
  //        transform: rotate(0);
  //        transform-origin: initial;
  //       width: 100%;
  //       margin: 20px 0 0;
  //       .gallery {
  //         width: auto;
  //         height: auto;
  //       }
  //     }
  //   }
  // }

</style>
