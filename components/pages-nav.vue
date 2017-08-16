<!-- Template -->
<template>
<nav id="nav" itemscope itemtype="http://schema.org/SiteNavigationElement">
  <ul>
    <li itemprop="name"><nuxt-link itemprop="url" to="/">Home</nuxt-link></li>
    <li itemprop="name"><nuxt-link itemprop="url" to="/about">About</nuxt-link></li>
    <li itemprop="name"><nuxt-link itemprop="url" to="/project/">Project</nuxt-link></li>
    <li itemprop="name"><nuxt-link itemprop="url" to="/contact">Contact</nuxt-link></li>
    <li><a itemprop="url" href="https://blog.256pages.com/" target="_blank">Blog</a></li>
  </ul>
</nav>
</template>

<!-- Script -->
<script>
  export default {
    name: "Nav"
  }
</script>

<!-- Style -->
<style lang="scss" scoped>
  nav
  {
    width: 100%;
    transition: .5s;
    ul
    {
      list-style: none;
      padding: 1rem 2rem;
      display: block;
      line-height: 2rem;
      transition: .5s;
      li
      {
        margin: 1rem 0;
        transition: all .5s ease;
        a
        {
          line-height: 2rem;
          height: 2rem;
          cursor: pointer;
        }
      }
      li:hover
      {
        background: #fff;
      }
    }
    ul.active
    {
      margin-left: -10rem;
    }
  }

  @media (min-width:767px) {
    nav
    {
      width: var(--container-width);
      ul
      {
        display: flex;
        line-height: 1rem;
        justify-content: center;
        li
        {
          margin: 0 1rem;
          height: 1rem;
        }
      }
    }
  }
</style>
