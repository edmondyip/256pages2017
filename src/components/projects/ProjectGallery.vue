<template>
  <section>
    <carousel paginationActiveColor="#42b983" paginationColor="#ffffff" :speed="300" easing="ease" :perPage="1" :paginationSize="5">
      <slide v-for="img in list[projectId].gallery" :key="img.id">
        <img :src="require('../../assets/img/projects/' + list[projectId].path + '/' + img.fileName)" :alt="list[projectId].name + img.title"
        />
      </slide>
    </carousel>
  </section>
</template>

<script>
  import {
    Carousel,
    Slide
  } from 'vue-carousel'
  export default {
    name: 'ProjectGallery',
    props: ['projectId', 'list'],
    data: function () {
      return {}
    },
    components: {
      Carousel,
      Slide
    }
  }

</script>

<style lang="scss" scoped>
  section {
    min-width: 100%;
    opacity: 1;
    transition: .8s;
    width: 590px;
    height: 450px;
    margin-top: 50px;
    margin-left: -50px;
    .load {
      transform: translateX(100%);
    }
    .VueCarousel-slide {
      overflow: hidden;
      img {
        width: 540px;
        height: 400px;
      }
    }
    .VueCarousel-pagination {
      bottom: 0px;
      position: absolute;
      background: $themeColor;
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
