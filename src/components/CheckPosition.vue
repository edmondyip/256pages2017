<template>
  <div class="position">
    <slot></slot>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .poisition {
    position: fixed;
    left: 10px;
    top: 10px;
    font-size: .8rem;
    color: #ddd;
    font-family: $titleFont;
    font-weight: 300;
  }
</style>
