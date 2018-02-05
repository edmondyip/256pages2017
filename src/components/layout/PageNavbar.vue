<template>
  <nav>
    <transition-group tag="ul" name="navAnimation" appear appear-active-class="nav-anmation" itemscope itemtype="http://www.schema.org/SiteNavigationElement">
      <!-- loop nav bar -->
      <li v-for="(item, index) in list" itemprop="name" :key="index">
        <router-link :class="item.name" :to="item.url" itemprop="url">{{item.name}}{{item.index}}</router-link>
        <span>{{item.caption}}</span>
      </li>
      <li itemprop="name" :key="5">
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
          url: '/about',
          caption: 'something about me'
        }, {
          name: 'projects',
          url: '/projects',
          caption: 'my projects'
        }, {
          name: 'contact',
          url: '/contact',
          caption: 'if you want to find me'
        }]
      }
    }
  }

</script>

<style scoped lang="scss">
@import '../../assets/css/_global.scss';
  nav {
    max-width: 940px;
    margin: 0 auto;
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
          font-size: 1.2rem;
          color: $darkColor;
          margin-top: 2px;
          opacity: 0;
          text-align: left;
          padding: 10px;
          white-space: nowrap;
        }
        a {
          color: $darkColor;
          text-decoration: none;
          font-size: 1.8rem;
          padding: 5px 20px 5px 10px;
          transition: .8s;
          &:hover~span {
            opacity: 1;
            margin-top: 8px;
            background: $darkColor;
            color: $themeColor;
          }
          &:hover,
          &.router-link-active {
            background: $darkColor;
            color: $themeColor;
          }
          &.home.router-link-active {
            color: $darkColor;
            background: none;
          }
          &:hover.home,
          &.home.router-link-exact-active {
            background: $darkColor;
            color: $themeColor;
          }
        }
      }
    }
  }

  .nav-anmation {
    animation: nav-load 1s;
  }

  @keyframes nav-load {
    0% {
      opacity: 0;
      transform: translateY(-100px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: $breakpoint-mobile) {
    nav {
      width: 100%;
      height: 0;
      overflow: hidden;
      transition: .5s;
      position: absolute;
      z-index: 1;
      background: rgba(255,255,255,.8);
      ul {
        display: block;
        transition: .5s;
        li {
          span {
            display: none;
            a {
              padding: 5px 10px;
            }
          }
        }
      }
      &.open {
        height: 100vh;
        display: block;
        ul {
          height: 100%;
        }
      }
    }
  }

</style>
