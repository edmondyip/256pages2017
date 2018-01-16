<template>
  <section>
    <ul>
      <slot></slot>
    </ul>
    <span :style="{top: (projectId + 1) * 34 + 'px'}"></span>
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
    left: -20px;
    ul {
      height: 90%;
      li {
        a {
          display: block;
          height: 25px;
          line-height: 25px;
          color: #ffffff;
          text-decoration: none;
          transition: .4s ease;
          &.router-link-active {
            color: $darkColor;
            font-size: 1.6rem;
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
  }

</style>
