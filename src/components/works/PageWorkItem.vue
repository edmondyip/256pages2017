<template>
  <isotope ref="grid" :options='option' :list="list" :item-selector="'element-item'" v-images-loaded:on.progress="layout" class="works-list">
    <section v-for="(work, index) in list" :key="index" :class="{'checked': index === projectView}" @click="changeProjectView(index)">
      <div class="wrapper">
        <img :src="require('../../assets/img/works/' + work.path + '/' + work.gallery[0].fileName)" :alt="work.name + work.gallery[0].title">
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
      isotope
    },
    directives: {
      imagesLoaded
    }
  }
</script>

<style scoped lang="scss">
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
      ul {
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
        li {
          background: #85F1C1;
          font-size: 12px;
          line-height: 14px;
          margin: 5px;
          display: inline-block;
          padding: 8px;
        }
      }
    }
  }

  .works-list section ul>li:first-child {
    margin: 5px 5px 5px 0;
  }

  .works-list section:hover h2 {
    left: 0px;
  }

  .works-list section:hover ul {
    right: 5px;
  }

  .works-list section .description {
    background: none;
    padding: 0 20px;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0);
    transition: 1s;
  }

  .works-list section .description p {
    display: none;
  }

  .works-list img {
    list-style: none;
    overflow: hidden;
    background: #7ADDC9;
    margin: 0;
    padding: 0;
  }
  /* checked */

  .works-list .checked {
    width: 100%;
    background: rgba(255, 255, 255, 1);
  }

  .works-list .checked .wrapper {
    position: relative;
    display: block;
  }

  .works-list .checked .description {
    display: inline-block;
    position: relative;
    width: 40%;
    background: rgba(255, 255, 255, 1);
    height: 100%;
    left: 0px;
    top: -50px;
    bottom: 0px;
  }

  .works-list .checked .description p,
  .works-list .checked .description h2 {
    display: block;
  }

  .works-list .checked img {
    display: inline-block;
    height: 100%;
    width: 50%;
  }

  .works-list .checked h2,
  .works-list .checked ul {
    position: relative;
    width: auto;
    left: unset!important;
    right: unset!important;
  }

</style>
