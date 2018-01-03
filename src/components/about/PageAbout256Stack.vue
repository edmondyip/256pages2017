<template>
  <article>

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
        <li><a href="https://www.ubuntu.com/" target="_blank" rel="noopener noreferrer">Ubuntu</a></li>
        <li><a href="https://www.nginx.com/" target="_blank" rel="noopener noreferrer">Nginx</a></li>
        <li><a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">Nodejs</a></li>
        <li><a href="https://webpack.js.org/" target="_blank" rel="noopener noreferrer">Webpack</a></li>
        <li><a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">Express</a></li>
      </ul>
    </section>

    <section>
      <h2>Font type</h2>
      <ul>
        <li><a href="https://moji-waku.com/" target="_blank" rel="noopener noreferrer">kaiso</a></li>
        <li><a href="https://fonts.google.com/specimen/Ubuntu" target="_blank" rel="noopener noreferrer">Ubuntu</a></li>
        <li><a href="https://fonts.google.com/specimen/Open+Sans" target="_blank" rel="noopener noreferrer">Open Sans</a></li>
      </ul>
    </section>
    
  </article>
</template>

<script>
  export default {
    name: 'About256'
  }
</script>

<style scoped lang="scss">
  article {
    width: 100%;
    margin: 20px 0;
    display: flex;
    flex-flow: row;
    position: relative;
    section {
      flex: 1 1 auto;
      padding: 10px 30px;
      margin: 0 10px 0 0;
      background: $themeColor;
      // box-shadow: 0 0 10px rgba($color: #000000, $alpha: .05);
      // border: 5px solid #cccccc;
      &:last-child {
        margin: 0;
      }
    }
  }

  @media (max-width: $breakpoint-mobile) {
    article {
      flex-flow: column;
      width: 100%;
      section {
        width: calc(100% - 60px);
        margin: 0 0 10px;
      }
    }
  }
</style>
