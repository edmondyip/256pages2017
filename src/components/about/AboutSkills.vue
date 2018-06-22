<template>
  <article>
    <section>
      <h2>Skills</h2>
      <ul class="skill-bar">
          <li v-for="skill in skills" :key="skill.name">
            <span :class="{zero: loadBar === false}" :style="{width: skill.percent + '%'}">{{skill.percent + '%'}}</span>
            <div>{{skill.name}}</div>
          </li>
      </ul>
    </section>
  </article>
</template>

<script>
import ScrollMon from 'scrollmonitor'
  export default {
    name: 'AboutMe',
    data: function () {
      return {
        loadBar: false,
        skills: [{
            name: 'User Experience Design',
            percent: 75
          },
          {
            name: 'Graphic Design',
            percent: 85
          },
          {
            name: 'Search Engine Optimization',
            percent: 90
          },
          {
            name: 'Solution Consultancy',
            percent: 70
          },
          {
            name: 'Web Front-end Development',
            percent: 95
          },
          {
            name: 'API Development',
            percent: 75
          },
          {
            name: 'Project Management',
            percent: 70
          }
        ]
      }
    },
    mounted: function () {
      let self = this
      let checkSkill = document.getElementsByClassName("skill-bar")
      let skillWatcher = ScrollMon.create(checkSkill)
      skillWatcher.fullyEnterViewport(function () {
        self.loadBar = true
      })
      skillWatcher.partiallyExitViewport(function () {
        self.loadBar = false
      })
    }
  }
</script>

<style scoped lang="scss">
  article {
    width: 100%;
    section {
      h1 {
        text-align: right;
      }
      ul.skill-bar {
        list-style: none;
        width: 100%;
        padding: 0;
        li {
          height: 30px;
          position: relative;
          background: #eeeeee;
          overflow: hidden;
          div {
            display: block;
            position: absolute;
            line-height: 30px;
            padding: 0 0 0 10px;
          }
          span {
            display: block;
            background: $themeColor;
            position: absolute;
            height: 30px;
            font-size: 2rem;
            line-height: 30px;
            text-align: right;
            padding: 0 5px 0 0;
            transition: .5s;
            &.zero {
              width: 0%!important;
              overflow: hidden;
              left: -10px;
            }
            // &:hover {
            //   width: 100%!important;
            // }
          }
        }
      }
    }
  }
</style>
