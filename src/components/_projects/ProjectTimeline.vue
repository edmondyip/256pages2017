<template>
  <section>
    <span :style="{top: (projectId) * 33 + 8 + 'px'}"></span>
    <ul>
      <slot></slot>
    </ul>
  </section>
</template>

<script>
  export default {
    name: 'Timeline',
    props: ['projectId']
  }

</script>

<style lang="scss" scoped>
@import '../../assets/css/_global.scss';
  section {
    position: relative;
    ul {
      position: absolute;
      width: 30px;
      left: -25px;
      height: 100%;
      li {
        a {
          display: block;
          height: 25px;
          line-height: 25px;
          color: #ffffff; 
          text-decoration: none;
          transition: .4s ease;
          &.router-link-active {
            color: #ffffff;
            font-size: 1.6rem;
          }
        }
      }
    }
    span {
      position: absolute;
      left: -30px;
      height: 25px;
      width: 30px;
      background: $darkColor;
      display: block;
      transition: .4s ease;
    }
  }

</style>
