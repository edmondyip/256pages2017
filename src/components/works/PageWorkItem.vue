<template>
  <isotope ref="grid" :options='option' :list="list" :item-selector="'element-item'" v-images-loaded:on.progress="layout" class="works-list">
    <section v-for="(work, index) in list" :key="index" :class="{'checked': index === projectView}" @click="changeProjectView(index)">
      <transition>
        <div class="description" v-if="index === projectView">
          <carousel :perPage="1">
            <slide v-for="(image,index) in work.gallery" :key="index">
              <work-cover :image="image" :path="work.path" :name="work.name"></work-cover>
            </slide>
          </carousel>
          <div class="info">
            <div class="close" @click="index = null">close</div>
            <h2>{{ work.name }}</h2>
            <p>{{ work.description }}</p>
            <work-type :typeList="work.typeList"></work-type>
          </div>
        </div>
        <div v-else class="cover">
          <work-cover :image="work.gallery[0]" :path="work.path" :name="work.name"></work-cover>
          <work-type :typeList="work.typeList"></work-type>
        </div>
      </transition>
    </section>
  </isotope>
</template>

<script>
  import worksList from '@/assets/json/projects.json'
  import workType from '@/components/works/PageWorkType.vue'
  import workCover from '@/components/works/PageWorkCover.vue'
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
            gutter: 20,
            columnWidth: 50
          }
        }
      }
    },
    methods: {
      changeProjectView: function (index) {
        var imgHeight = ('../../assets/img/works/' + this.list.path + '/' + this.list.gallery.fileName).clientHeight
        console.log(imgHeight)
        if (index === this.projectView) {
          // this.projectView = null
        } else {
          this.projectView = index
        }
        var self = this
        setTimeout(function () {
          self.$refs.grid.iso.layout()
        }, 550)
      },
      layout () {
        this.$refs.grid.layout('masonry')
      }
    },
    components: {
      isotope,
      Carousel,
      Slide,
      workType,
      workCover
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
      width: 24%;
      transition: width .5s, height .5s;
      h2 {
        background: #4A4A4A;
        color: #fff;
        line-height: 30px;
        height: 30px;
        padding: 0 10px;
        margin: 0;
      }
      img {
        width: 100%;
        display: block;
        cursor: pointer;
      }
      .description {
        display: block;
        padding: 0;
        margin: 0;
        text-decoration: none;
        transition: .5s;
      }
    }
    .cover /deep/ ul.type {
      position: absolute;
    }
    .close {
      position: absolute;
      right: 10px;
      top: 10px;
      font-size: 12px;
      color: #cccccc;
      cursor: pointer;
    }
    section:hover {
      h2 {
        left: 0px;
      }
      .description .cover {
        /deep/ ul.type {
          right: 5px;
        }
      }
    }
  }
  /* checked */

  .works-list section.checked {
    width: 980px;
    height: 500px;
    background: rgba(255, 255, 255, 1);
    .info {
      display: inline-block;
      position: relative;
      width: 35%;
      background: rgba(255, 255, 255, 1);
      height: 100%;
      vertical-align: top;
      /deep/ ul.type {
        position: relative;
        right: unset;
      }
    }
    .VueCarousel {
      display: inline-block;
      overflow: hidden;
      height: 50%;
      width: 60%;
      background: #7ADDC9;
      margin: 0;
      padding: 20px;
    }
  } // .filter-button-group {
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
