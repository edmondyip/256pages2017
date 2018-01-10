<template>
  <section>
    <img :src="require('../../assets/img/projects/' + list[projectId].path + '/' + list[projectId].gallery[0].fileName)" :alt="list[projectId].name + list[projectId].gallery[0].title">
  </section>
</template>

<script>
  import worksList from '@/assets/json/projects.json'
  export default {
    name: 'ProjectGallery',
    props: ['projectId'],
    data: function () {
      return {
        list: worksList.projects
      }
    }
  }

</script>

<style lang="scss" scoped>
  section {
    background: #ffffff;
    height: 500px;
    opacity: 1;
    transition: .4s;
    .load {
      // opacity: 0;
      transform: translateX(100%);
    }
    img {
      height: 100%;
      display: block;
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
