<template>
  <isotope ref="grid" :options='option' :list="list" :item-selector="'element-item'" v-images-loaded:on.progress="layout" class="works-list">
    <section v-for="(work, index) in list" :key="index" :class="{'checked': index === projectView}" @click="changeProjectView(index)">
      <div class="wrapper">
        <carousel :perPage="1" v-if="index === projectView">
          <slide v-for="(image,index) in work.gallery" :key="index">
            <img :src="require('../../assets/img/works/' + work.path + '/' + image.fileName)" :alt="work.name + image.title">
          </slide>
        </carousel>
        <img v-else :src="require('../../assets/img/works/' + work.path + '/' + work.gallery[0].fileName)" :alt="work.name + work.gallery[0].title">
        <div class="description">
          <h2>{{ work.name }}</h2>
          <p>{{ work.description }}</p>
          <ul>
            <li v-for="type in work.typeList" :key="type.id">{{ type }}</li>
          </ul>
        </div>
      </div>
    </section>
  </isotope>
</template>

<script>
  import worksList from '@/assets/json/projects.json'
  import isotope from 'vueisotope'
  import imagesLoaded from 'vue-images-loaded'
  import {Carousel, Slide} from 'vue-carousel'
  export default {
    name: 'WorksItem',
    data: function () {
      return {
        projectView: null,
        list: worksList.projects,
        option: {
          percentPosition: true,
          stagger: 30,
          masonry: {
            fitwidth: true,
            gutter: 20
          }
        }
      }
    },
    methods: {
      changeProjectView: function (index) {
        if (index === this.projectView) {
          this.projectView = null
        } else {
          this.projectView = index
        }
        var self = this
        setTimeout(function () {
          self.$refs.grid.iso.layout()
        }, 400)
      },
      layout () {
        this.$refs.grid.layout('masonry')
      }
    },
    components: {
      isotope,
      Carousel,
      Slide
    },
    directives: {
      imagesLoaded
    }
  }
</script>

<style scoped lang="scss">
  .works-list {
    width: 980px;
    margin: 0 auto;
    section {
      margin: 0 0 20px 0;
      position: relative;
      overflow: hidden;
      display: block;
      width: 22%;
      cursor: pointer;
      transition: width .5s, height .5s;
      h2 {
        background: #4A4A4A;
        color: #fff;
        line-height: 30px;
        height: 30px;
        left: -200px;
        transition: .5s;
        padding: 0 20px;
        display: none;
      }
      img {
        width: 100%;
        display: block;
      }
      .description {
        position: absolute;
        display: block;
        padding: 0;
        margin: 0;
        text-decoration: none;
        -webkit-transition-delay: .5s;
        transition-delay: .5s;
        transition: .5s;
        right: -100%;
        bottom: 5px;
        list-style: none;
        p {
          display: none;
        }
        li {
          background: #85F1C1;
          font-size: 12px;
          line-height: 14px;
          margin: 5px;
          display: inline-block;
          padding: 8px;
        }
        li:first-child {
          margin: 5px 5px 5px 0;
        }
      }
    }
    .VueCarousel {
      background: #7ADDC9;
      margin: 0;
      padding: 20px;
    }
  }

  .works-list section:hover {
    h2 {
      left: 0px;
    }
    ul.description {
      right: 5px;
    }
  }
  
  /* checked */

  .works-list section.checked {
    width: 100%;
    background: rgba(255, 255, 255, 1);
    .wrapper {
      position: relative;
      display: block;
    }
    .description {
      display: inline-block;
      position: relative;
      width: 40%;
      background: rgba(255, 255, 255, 1);
      height: 100%;
      left: 0px;
      top: -50px;
      bottom: 0px;
      h2,
      p {
        display: block;
      }
      h2,
      ul {
        position: relative;
        width: auto;
        left: unset!important;
        right: unset!important;
      }
    }
    .VueCarousel {
      display: inline-block;
      height: 100%;
      width: 50%;
    }
  } 
  
  // .filter-button-group {
  //   margin: 0 auto;
  //   display: flex;
  //   width: 200px;
  //   justify-content: space-around;
  // }
  // .filter-button-group button {
  //   background: #4A4A4A;
  //   color: #85F1C1;
  //   font-family: 'Bitter', sans-serif;
  //   border: 0;
  //   padding: 10px;
  // }

</style>
