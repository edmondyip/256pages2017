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
      font-size: 25px;
      background: #4A4A4A;
      color: #85F1C1;
      height: 31px;
      line-height: 35px;
      width: 51px;
      display: block;
      position: fixed;
      left: -22px;
      bottom: 150px;
      transition: .5s;
      text-decoration: none;
      text-align: right;
      padding: 0 10px 0 0;
    }
    a:hover {
      color: #50aa82;
      background: #222222;
      left: -10px;
    }
  }
</style>
