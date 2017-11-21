<template>
  <header>
    <app-navbar />
  </header>
</template>

<script>
  import Navbar from '@/components/template/PageNavbar'
  export default {
    name: 'Header',
    components: {
      'app-navbar': Navbar
    }
  }
</script>

<style scoped lang="scss">
  header {
    width: 60vw;
    margin: 0 auto;
    padding: 3vh 0;
    transition: .5s;
  }
  #app.home header {
    width: 60vw;
    margin: 0 auto;
    padding: 8vh 0;
  }
</style>
