<template>
  <section>
    <h1>{{projectId + 1}}</h1>
    <h2>{{list[projectId].name}}</h2>
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
    padding: 50px;
    background: #ffffff;
    opacity: 1;
    transition: .4s;
    .load {
      opacity: 0;
      // transform: translateX(-500px);
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
