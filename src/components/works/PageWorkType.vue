<template>
  <ul class="type">
    <li v-for="type in typeList" :key="type.id">{{ type }}</li>
  </ul>
</template>

<script>
  export default {
    props: ['typeList']
  }
</script>

<style scoped lang="scss">
  ul.type {
    position: relative;
    list-style: none;
    bottom: 10px;
    right: -100%;
    transition: .5s;
    li {
      background: #85F1C1;
      font-size: 12px;
      line-height: 14px;
      margin: 5px;
      display: inline-block;
      padding: 8px;
    }
    li:first-child {
      margin: 5px 5px 5px 0;
    }
  }
</style>
