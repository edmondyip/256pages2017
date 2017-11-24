<template>
  <article>
    <section>
      <h2>Created by</h2>
      <p>edmond yip 2017</p>
    </section>

    <section>
      <h2>Front-end</h2>
      <ul>
        <li><a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">Vuejs</a></li>
        <li><a href="http://sass-lang.com/" target="_blank" rel="noopener noreferrer">Sass</a></li>
        <li><a href="https://necolas.github.io/normalize.css/" target="_blank" rel="noopener noreferrer">Normalize.css</a></li>
      </ul>
    </section>

    <section>
      <h2>Server Side</h2>
      <ul>
        <li><a href="https://www.ubuntu.com/">Ubuntu</a></li>
        <li><a href="https://www.nginx.com/">Nginx</a></li>
        <li><a href="https://nodejs.org/en/">Nodejs</a></li>
        <li><a href="https://webpack.js.org/">Webpack</a></li>
      </ul>
    </section>

    <section>
      <h2>Font type</h2>
      <ul>
        <li><a href="https://moji-waku.com/">kaiso</a></li>
        <li><a href="https://fonts.google.com/specimen/Ubuntu">Ubuntu</a></li>
      </ul>
    </section>

    <section>
      <p><a href="./human.txt">human.txt</a></p>
    </section>
  </article>
</template>

<script>
  import Banner from '@/components/about/PageAboutMe.vue'
  export default {
    name: 'Intro',
    components: {
      'app-banner': Banner
    }
  }
</script>

<style scoped lang="scss">

</style>
