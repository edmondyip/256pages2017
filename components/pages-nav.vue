<!-- Template -->
<template>
  <nav id="nav">
    <ul>
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/about">About</nuxt-link></li>
      <li><nuxt-link to="/project/">Project</nuxt-link></li>
      <li><nuxt-link to="/contact">Contact</nuxt-link></li>
      <li><a href="https://blog.256pages.com/" target="_blank">Blog</a></li>
    </ul>
    <!--
    <div class="tab" v-on:click="tab = !tab" v-bind:class="{ active: tab }">
      <i class="material-icons">arrow_back</i>
    </div>
  -->
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
        transition: .5s;
        a
        {
          line-height: 2rem;
          height: 2rem;
          cursor: pointer;
        }
      }
      li:hover
      {
        color: #333;
        text-decoration: underline;
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
