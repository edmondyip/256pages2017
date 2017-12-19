<template>
  <article>
    <section>
      <h2>Skills</h2>
      <ul class="skill-bar">
        <!-- <li v-for="skill in skills" >{{skill.name}}<span :style="barBg(skill.percent)"></span></li> -->
      </ul>
    </section>
  </article>
</template>

<script>
  export default {
    name: 'AboutMe',
    data: function () {
      return {
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
            percent: 90
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
    }
  }

</script>

<style scoped lang="scss">
  article {
    section {
      h1 {
        text-align: right;
      }
      ul.skill-bar {
        list-style: none;
        padding: 0;
        li {
          width: 100%;
          padding: 5px 10px;
          span {
            background: $themeColor;
          }
        }
      }
    }
  }

</style>
