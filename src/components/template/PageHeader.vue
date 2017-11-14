<template>
  <app-navbar />
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
