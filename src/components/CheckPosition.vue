<template>
  <div class="position">
    [X={{positionX}}] [Y={{positionY}}]
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .poisition {
    position: fixed;
    right: 0;
    top: 0;
    font-size: .8rem;
    color: #999;
    font-family: $titleFont;
    font-weight: 300;
    background: #ffffff;
    padding: 8px;
  }
</style>
