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
      background: #222222;
      color: #85F1C1;
      height: 35px;
      width: 50px;
      line-height: 35px;
      display: block;
      position: fixed;
      left: -20px;
      bottom: 150px;
      transition: .5s;
      text-decoration: none;
      text-align: right;
      padding: 0 10px 0 0;
    }
    a:hover {
      color: #50aa82;
      background: #4A4A4A;
      left: -10px;
    }
  }
</style>
