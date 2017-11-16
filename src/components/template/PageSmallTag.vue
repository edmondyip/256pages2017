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
      font-size: 20px;
      background: #4A4A4A;
      color: #85F1C1;
      height: 30px;
      width: 25px;
      line-height: 30px;
      display: block;
      position: fixed;
      top: 50vh;
      transition: .5s;
      text-decoration: none;
      text-align: center;
      padding: 0 10px 0 0;
    }
    a:hover {
      color: #50aa82;
      background: #222222;
      left: -10px;
    }
  }

  #app.home .logo-tag a {
    top: 10px;
    left: 10px;
    font-size: 30px;
    height: 50px;
    width: 40px;
    line-height: 50px;
    background: rgba(133, 241, 193, 0);
    color: #4A4A4A;
    box-shadow: 0 0 0 2px #4A4A4A;
  }

</style>
