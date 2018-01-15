<template>
  <section>
    <ul>
        <slot></slot>
    </ul>
    <span :style="{top: (projectId + 1) * 30 + 'px'}"></span>
  </section>
</template>

<script>
  export default {
    name: 'Timeline',
    props: ['projectId']
  }

</script>

<style lang="scss" scoped>
  section {
    position: absolute;
    width: 30px;
    height: 100%;
    left: -30px;
    ul {
      height: 90%;
      padding: 10px 0;
      li {
        height: 20px;
        line-height: 20px;
        &.active {
          color: $darkColor;
        }
        a {
          color: #ffffff;
          text-decoration: none;
        }
      }
    }
  }

  span {
    position: absolute;
    left: -2px;
    height: 2px;
    width: 30px;
    background: $darkColor;
    display: block;
    transition: .4s ease;
  }

</style>
