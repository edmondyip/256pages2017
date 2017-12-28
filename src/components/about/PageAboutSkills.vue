<template>
  <article>
    <section>
      <h2>Skills</h2>
      <ul class="skill-bar">
        <transition-group name="loading" appear>
          <li v-for="skill in skills" :key="skill.name">
            <span :class="{zero: loadBar === false}" :style="{width: skill.percent + '%'}">{{skill.percent + '%'}}</span>
            <div>{{skill.name}}</div>
          </li>
        </transition-group>
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
            percent: 68
          },
          {
            name: 'Graphic Design',
            percent: 80
          },
          {
            name: 'Search Engine Optimization',
            percent: 86
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
            percent: 62
          },
          {
            name: 'Project Management',
            percent: 75
          }
        ]
      }
    },
    methods: {
      barBg: function (per) {
        return 'background: linear-gradient(left, black ' + per + '%, white ' + (100 - per) + '%)'
      }
    },
    mounted: function () {
      let self = this
      let checkSkill = document.getElementsByClassName("skill-bar")
      let skillWatcher = ScrollMon.create(checkSkill)
      skillWatcher.fullyEnterViewport(function () {
        console.log('in')
        self.loadBar = true
      })
      skillWatcher.partiallyExitViewport(function () {
        console.log('out')
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
          width: 100%;
          height: 30px;
          position: relative;
          background: #eeeeee;
          overflow: hidden;
          div {
            display: block;
            position: absolute;
            width: 100%;
            height: 30px;
            line-height: 30px;
            padding: 0 0 0 10px;
          }
          span {
            display: block;
            background: $themeColor;
            position: absolute;
            height: 30px;
            line-height: 30px;
            text-align: right;
            padding: 0 5px 0 0;
            transition: .5s;
            &.zero {
              width: 0%!important;
              overflow: hidden;
              left: -10px;
            }
          }
        }
      }
    }
  }

</style>
