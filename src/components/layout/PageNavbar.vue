<template>
  <nav>
      <transition-group tag="ul" name="navAnimation" appear appear-active-class="nav-anmation" itemscope itemtype="http://www.schema.org/SiteNavigationElement">
        <li v-for="(item, index) in list" itemprop="name" :key="index">
          <router-link :to="item.url" itemprop="url">{{item.name}}{{item.index}}</router-link>
          <span>{{item.caption}}</span>
        </li>
        <li itemprop="name" :key="0">
          <a href="https://blog.256pages.com" itemprop="url">blog</a>
          <span>my development blog</span>
        </li>
      </transition-group>
  </nav>
</template>

<script>
  export default {
    name: 'Navbar',
    data: function () {
      return {
        list: [{
          name: 'home',
          url: '/',
          caption: 'welcome to my website'
        }, {
          name: 'about',
          url: 'about',
          caption: 'something about me'
        }, {
          name: 'projects',
          url: 'projects',
          caption: 'my projects'
        }, {
          name: 'contact',
          url: 'contact',
          caption: 'if you want to find me'
        }]
      }
    }
  }
</script>

<style scoped lang="scss">
  nav {
    display: block;
    ul {
      list-style: none;
      margin: 0;
      display: flex;
      justify-content: space-between;
      li {
        display: block;
        text-align: center;
        position: relative;
        padding: 20px;
        span {
          width: auto;
          display: block;
          transition-delay: .8s;
          transition: .6s;
          position: absolute;
          font-size: 12px;
          color: #333;
          margin-top: 2px;
          opacity: 0;
          text-align: left;
          padding: 10px;
          white-space: nowrap;
        }
        a {
          color: #333;
          text-decoration: none;
          font-size: 1.2rem;
          padding: 5px 20px 5px 10px;
          text-rendering: auto;
          text-rendering: optimizeSpeed;
          text-rendering: optimizeLegibility;
          text-rendering: geometricPrecision;
          transition: .8s;
        }
        a:hover~span {
          opacity: 1;
          margin-top: 8px;
          background: #4A4A4A;
          color: #85F1C1;
        }
        a:hover,
        a.router-link-exact-active {
          background: #4A4A4A;
          color: #85F1C1;
        }
      }
    }
  }

  .nav-anmation {
    animation: video-load 1s;
  }

  @keyframes video-load {
    0% {
      opacity: 0;
      transform: translateY(-100px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

</style>
