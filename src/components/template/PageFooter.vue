<template>
  <transition name="copyAnimation" appear appear-active-class="copy-animation">
    <footer>
      <app-tag />
      <div id="copyright">
        256pages &copy 2017
      </div>
    </footer>
  </transition>
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

  .copy-animation {
    animation: video-load 2s;
  }

  @keyframes video-load {
    0% {
      opacity: 0;
      margin-bottom: -20px;
    }
    100% {
      opacity: 1;
      margin-bottom: 0px;
    }
  }

</style>
