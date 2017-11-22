<template>
  <div class="size">
    <p>width {{WindowWidth}} | height {{WindowHeight}}</p>
  </div>
</template>

<script>
  export default {
    name: 'Size',
    data: function () {
      return {
        WindowWidth: document.documentElement.clientWidth,
        WindowHeight: document.documentElement.clientHeight
      }
    },
    methods: {
      handleResize (e) {
        this.WindowHeight = document.documentElement.clientHeight
        this.WindowWidth = document.documentElement.clientWidth
      }
    },
    // beforeDestroy: function () {
    //   window.removeEventListener('resize', this.handleResize)
    // },
    updated: function () {
      this.$nextTick(function () {
        window.addEventListener('resize', this.handleResize)
        console.log(this.WindowWidth + ',' + this.WindowHeight)
      })
    }
  }
</script>

<style lang="scss" scoped>
  .size {
    position: fixed;
    right: 10px;
    bottom: 0;
  }

</style>
