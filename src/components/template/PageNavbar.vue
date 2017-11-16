<template>
  <nav>
    <ul itemscope itemtype="http://www.schema.org/SiteNavigationElement">
      <li itemprop="name">
        <router-link to="/" itemprop="url">home</router-link>
        <span>welcome to my website</span>
      </li>
      <li itemprop="name">
        <router-link to="about" itemprop="url">about</router-link>
        <span>something about me</span>
      </li>
      <li itemprop="name">
        <router-link to="works" itemprop="url">works</router-link>
        <span>my old design</span>
      </li>
      <li itemprop="name">
        <router-link to="contact" itemprop="url">contact</router-link>
        <span>if you want to find me</span>
      </li>
      <li itemprop="name">
        <a href="https://blog.256pages.com/" itemprop="url" target="blank">blog</a>
        <span>my development blog</span>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'Navbar'
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
          font-family: 'Bitter', sans-serif;
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
          font-family: 'Bitter', sans-serif;
          color: #333;
          text-decoration: none;
          font-size: 18px;
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
        a.active {
          background: #4A4A4A;
          color: #85F1C1;
        }
      }
    }
  }

</style>
