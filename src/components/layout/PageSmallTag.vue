<template>
  <div class="logo-tag">
    <router-link to="/">弐</router-link>
  </div>
</template>

<script>
  export default {
    name: 'Tag'
  }

</script>

<style scoped lang="scss">
  .logo-tag {
    a {
      font-family: kaiso, sans-serif;
      font-size: 24px; 
      background: #FFFFFF;
      color: $fontColor;
      height: 40px;
      width: 40px;
      line-height: 40px;
      display: block;
      position: fixed;
      left: -12px;
      bottom: 140px;
      transition: .5s;
      text-decoration: none;
      text-align: right;
      padding: 0 5px 0 0;
      &:hover {
        color: $themeColor;
        background: $fontColor;
        left: -10px;
      }
    }
  }

  #app.home .logo-tag {
    a {
      left: -60px;
    }
  }

</style>
