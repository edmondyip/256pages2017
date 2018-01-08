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
    display: block;
    right: 10px;
    top: 0;
    font-size: .8rem;
    color: #999;
    font-family: $titleFont;
    font-weight: 300;
    background: #ffffff;
    padding: 8px;
    box-shadow: 1px 1px 10px rgba(0,0,0,.5);
  }
</style>
