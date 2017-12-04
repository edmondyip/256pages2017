<template>
  <div class="size">
    {{windowWidth}} | {{windowHeight}}
  </div>
</template>

<script>
  export default {
    name: 'Size',
    data: function () {
      return {
        windowWidth: document.documentElement.clientWidth,
        windowHeight: document.documentElement.clientHeight
      }
    },
    mounted() {
      this.$nextTick(function () {
        window.addEventListener('resize', this.getWindowSize)
      })

    },
    methods: {
      getWindowSize(event) {
        this.windowWidth = document.documentElement.clientWidth
        this.windowHeight = document.documentElement.clientHeight
      }
    },
    beforeDestroy: function () {
      window.removeEventListener('resize', this.getWindowSize)
    }
  }
</script>

<style lang="scss" scoped>
  .size {
    position: fixed;
    right: 10px;
    bottom: -15px;
    font-size: 3rem;
    color: #ddd;
    font-family: $titleFont;
    font-weight: 300;
  }
</style>
