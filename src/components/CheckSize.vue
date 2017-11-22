<template>
  <div class="size">
    <p>{{windowWidth}} | {{windowHeight}}</p>
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
    this.$nextTick(function() {
      window.addEventListener('resize', this.getWindowWidth);
      window.addEventListener('resize', this.getWindowHeight);
    })

  },
    methods: {
    getWindowWidth(event) {
        this.windowWidth = document.documentElement.clientWidth;
      },

      getWindowHeight(event) {
        this.windowHeight = document.documentElement.clientHeight;
      }
    },
    beforeDestroy: function () {
      window.removeEventListener('resize', this.getWindowWidth);
      window.removeEventListener('resize', this.getWindowHeight);
    },
  }
</script>

<style lang="scss" scoped>
  .size {
    position: fixed;
    right: 10px;
    bottom: 0;
  }

</style>
