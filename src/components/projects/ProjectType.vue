<template>
  <ul class="tag">
    <slot></slot>
  </ul>
</template>

<script>
  export default {}
</script>

<style scoped lang="scss">
  ul.tag {
    position: relative;
    transition: .5s;
    li {
      background: $themeColor;
      font-size: 1rem;
      line-height: 1rem;
      margin: 5px;
      display: inline-block;
      padding: 8px;
      &:first-child {
        margin: 5px 5px 5px 0;
      }
      &:hover {
        opacity: .8;
        // cursor: pointer;
      }
    }
  }
</style>
