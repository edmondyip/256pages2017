<template>
  <header>
    <app-navbar />
  </header>
</template>

<script>
  import Navbar from '@/components/layout/PageNavbar'
  export default {
    name: 'Header',
    components: {
      'app-navbar': Navbar
    }
  }
</script>

<style scoped lang="scss">
  header {
    width: 900px;
    margin: 0 auto;
    padding: 3vh 0;
    transition: .5s;
  }
  #app.home header {
    padding: 8vh 0;
  }
</style>
