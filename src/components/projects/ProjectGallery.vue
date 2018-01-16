<template>
  <section>
  <carousel paginationActiveColor="#42b983" paginationColor="#b2ebd1" speed="300" easing="ease" :perPage="1">
    <slide v-for="img in list[projectId].gallery" :key="img.id">
      <img :src="require('../../assets/img/projects/' + list[projectId].path + '/' + img.fileName)" :alt="list[projectId].name + img.title" />
    </slide>
  </carousel>
  </section>
</template>

<script>
  import {Carousel, Slide} from 'vue-carousel'
  export default {
    name: 'ProjectGallery',
    props: ['projectId', 'list'],
    data: function () {
      return {
      }
    },
    components: {
      Carousel,
      Slide
    }
  }

</script>

<style lang="scss" scoped>
  section {
    // height: 500px;
    min-width: 100%;
    opacity: 1;
    transition: .4s;
    background: #ffffff;
    .load {
      transform: translateX(100%);
    }
    .VueCarousel-slide {
      // height: 500px;
      overflow: hidden;
    img {
        width: 100%;
      }
    }
    .VueCarousel-pagination {
      bottom: 0px;
      position: absolute;
    }
  }

  @media (max-width: $breakpoint-mobile) {
    section {
      height: 250px;
      img {
        width: 100%;
        height: auto;
      }
    }
  }

</style>
