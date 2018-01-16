<template>
  <div class="wrapper">
    <project-timeline :projectId="projectId">
      <li v-for="project in list" :key="project.id">
        <router-link :to="{ name: 'project', params: {url: project.path}}" @click.native="updateProject(project.id)">
          <slot v-if="projectId <= 9">0</slot>{{project.id}}
        </router-link>
      </li>
    </project-timeline>
    <section class="container">
      <project-info :class="{load: loading === true}" :project-id="projectId" :list="list" />
      <project-gallery :class="{load: loading === true}" :project-id="projectId" :list="list" />
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
  import ProjectTimeline from '@/components/projects/ProjectTimeline'
  export default {
    name: 'ProjectList',
    metaInfo: {
      title: 'my projects',
      meta: [{
        vmid: 'description',
        name: 'description',
        content: "You can see Edmond Yip's projects here, included ux/ui design, web design, info graph, frond-end development, seo and blog. "
      }]
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
      ProjectGallery,
      ProjectTimeline
    },
    methods: {
      updateProject: function (id) {
        console.log(id - 1)
        self = this
        self.projectId = ProjectList.projects.findIndex(obj => obj.path === this.$route.params.url)
        self.loading = true
        setTimeout(function () {
          self.$router.push({
            name: 'project',
            params: {
              url: self.list[(id - 1)].path
            }
          })
          self.loading = false
        }, 800)
      },
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
    },
    watch: {
      '$route' (to, from) {
        projectId: ProjectList.projects.findIndex(obj => obj.path === this.$route.params.url)
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
    padding: 20px;
    section.container {
      display: grid;
      width: 100%;
      height: 500px;
      position: relative;
      grid-template-columns: 40% 60%;
      overflow: hidden;
    }
    .btn {
      width: 20px;
      height: 20px;
      display: block;
      padding: 15px;
      background: rgba($color: #ffffff, $alpha: .9);
      transition: .3s;
      cursor: pointer;
      svg {
        fill: $darkColor;
        height: 100%;
        width: 100%;
      }
      &.back {
        position: absolute;
        left: 330px;
        top: 470px;
      }
      &.next {
        position: absolute;
        left: 380px;
        top: 470px;
        svg {
          transform: rotate(180deg);
        }
      }
      &:hover {
        background: rgba($color: #ffffff, $alpha: .6);
      }
      &.disabled {
        opacity: .5;
        pointer-events: none;
        svg {
          fill: rgba($color: $darkColor, $alpha: .5)
        }
      }
    }
  }

  @media (max-width: $breakpoint-mobile) {
    .wrapper {
      width: 100%;
      padding: 100px 0;
      section.container {
        grid-template-columns: 1fr;
        grid-template-rows: 50%;
        background: #ffffff;
      }
      .btn {
        &.back {
          top: 308px;
          left: -15px;
        }
        &.next {
          top: 308px;
          right: -15px;
        }
      }
    }
  }

</style>
