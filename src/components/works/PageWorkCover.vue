<template>
  <img :src="require('../../assets/img/works/' + path + '/' + image.fileName)" :alt="name + image.title">
</template>

<script>
  export default {
    props: ['image', 'path', 'name']
  }
</script>

<style scoped lang="scss">
      img {
        width: 100%;
        display: block;
        cursor: pointer;
      }
</style>
