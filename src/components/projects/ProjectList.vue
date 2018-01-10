<template>
  <div class="wrapper">
    <section class="container">
      <project-info :class="{load: loading === true}" :project-id="projectId" />
      <project-gallery :class="{load: loading === true}" :project-id="projectId" />
    </section>
    <div class="back btn" @click="backProject()" :class="{disabled: projectId < 1}">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 17.5 25.6"
        xml:space="preserve">
        <polygon points="17.5,4.7 12.8,0 0,12.8 12.8,25.6 17.5,20.9 9.4,12.8 " />
      </svg>
    </div>
    <div class="next btn" @click="nextProject()" :class="{disabled: projectId === (list.length - 1)}">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 17.5 25.6"
        xml:space="preserve">
        <polygon points="17.5,4.7 12.8,0 0,12.8 12.8,25.6 17.5,20.9 9.4,12.8 " />
      </svg>
    </div>
  </div>
</template>

<script>
  import ProjectList from '@/assets/json/projects.json'
  import ProjectInfo from '@/components/projects/ProjectInfo'
  import ProjectGallery from '@/components/projects/ProjectGallery'
  export default {
    name: 'ProjectList',
    metaInfo: {
      title: 'my projects'
    },
    data: function () {
      return {
        list: ProjectList.projects,
        projectId: ProjectList.projects.findIndex(obj => obj.path === this.$route.params.url),
        loading: false
      }
    },
    components: {
      ProjectInfo,
      ProjectGallery
    },
    methods: {
      backProject: function () {
        self = this
        self.loading = true
        setTimeout(function () {
          self.$router.push({
            name: 'project',
            params: {
              url: self.list[self.projectId -= 1].path
            }
          })
          self.loading = false
        }, 800)
      },
      nextProject: function () {
        self = this
        self.loading = true
        setTimeout(function () {
          self.$router.push({
            name: 'project',
            params: {
              url: self.list[self.projectId += 1].path
            }
          })
          self.loading = false
        }, 800)
      }
    }
  }

</script>

<style lang="scss" scoped>
  .wrapper {
    width: calc(100% - 40px);
    max-width: 900px;
    margin: 0 auto;
    position: relative;
    padding: 0 20px;
    section.container {
      display: grid;
      width: 100%;
      height: 500px;
      position: relative;
      grid-template-columns: 40% 60%;
      overflow: hidden;
      background: #ffffff;
    }
    .btn {
      width: 15px;
      height: 15px;
      display: block;
      padding: 15px;
      background: #ffffff;
      transition: .3s;
      cursor: pointer;
      svg {
        fill: $darkColor;
        height: 100%;
        width: 100%;
      }
      &.back {
        position: absolute;
        left: 0;
        top: 50%;
      }
      &.next {
        position: absolute;
        right: 0;
        top: 50%;
        svg {
          transform: rotate(180deg);
        }
      }
      &:hover {
        background: rgba($color: #ffffff, $alpha: .6)
      }
      &.disabled {
        opacity: 0;
        pointer-events: none;
      }
    }
  }

  @media (max-width: $breakpoint-mobile) {
    .wrapper {
      position: relative;
      width: 100%;
      height: unset;
      padding: 0 0 50px 0;
      overflow: initial;
      transform: rotate(0);
      transform-origin: initial;
    }
    #scroll-svg {
      display: none;
    }
  }

</style>
