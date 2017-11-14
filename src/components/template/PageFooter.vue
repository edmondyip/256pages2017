<template>
  <footer>
    <app-tag />
    <div id="copyright">256pages &copy 2017</div>
  </footer>
</template>

<script>
  import SmallTag from '@/components/template/PageSmallTag'
  export default {
    name: 'Footer',
    components: {
      'app-tag': SmallTag
    }
  }
</script>

<style scoped lang="scss">
  #copyright {
    font-family: 'Bitter', sans-serif;
    font-size: 11px;
    letter-spacing: 2px;
    position: fixed;
    bottom: 64px;
    left: -46px;
    transform: rotateZ(90deg);
  }
</style>
