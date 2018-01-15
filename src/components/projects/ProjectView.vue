<template>
    <section>
      <header>
        <h1>{{projectId + 1}}</h1>
        <h2>{{list[projectId].name}}</h2>
        <p>{{list[projectId].description}}</p>
        <work-type>
          <li v-for="type in list[projectId].typeList" :key="type.id">{{type}}</li>
        </work-type>
      </header>
    </section>
</template>

<script>
  import workType from '@/components/projects/ProjectType'
  export default {
    name: 'ProjectItem',
    props: ['projectId', 'list'],
    data: function () {
      return {
z      }
    },
    components: {
      workType
    }
  }

</script>

<style lang="scss" scoped>
    section {
      display: grid;
      width: 100%;
      height: 500px;
      position: relative;
      grid-template-columns: 50% 50%;
      .gallery {
        overflow: hidden;
        background: #ffffff;
        img {
          height: 100%;
          display: block;
        }
      }
      header {
        padding: 50px;
        background: #ffffff;
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
