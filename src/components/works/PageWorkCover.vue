<template>
  <img :src="require('../../assets/img/works/' + path + '/' + image.fileName)" :alt="name + image.title">
</template>

<script>
  export default {
<<<<<<< HEAD
    props: ['image','path','name']
=======
    props: ['image', 'path', 'name']
>>>>>>> 5357c7d093e6294a24636a4a89b5ad663338062e
  }
</script>

<style scoped lang="scss">
      img {
        width: 100%;
        display: block;
        cursor: pointer;
      }
</style>
