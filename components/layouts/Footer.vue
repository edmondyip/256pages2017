<template>
  <transition name="copyAnimation" appear appear-active-class="copy-animation">
    <footer>
      <small-tag />
      <div id="copyright">
        256pages &copy 2017
      </div>
    </footer>
  </transition>
</template>

<script>
  import SmallTag from '~/components/layouts/TagLogo'
  export default {
    name: 'Footer',
    components: {
      SmallTag
    }
  }
</script>

<style scoped lang="scss">
  footer {
    display: block;
    font-family: $titleFont;
    font-size: 11px;
    letter-spacing: 2px;
    position: fixed;
    bottom: 0;
    left: 0;
    #copyright {
      display: block;
      position: absolute;
      bottom: 64px;
      left: -50px;
      white-space: nowrap;
      transform: rotateZ(90deg);
    }
  }

  .copy-animation {
    animation: video-load 2s;
  }

  @keyframes video-load {
    0% {
      opacity: 0;
      margin-bottom: -100px;
    }
    100% {
      opacity: 1;
      margin-bottom: 0px;
    }
  }
</style>
