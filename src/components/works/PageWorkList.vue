<template>
  <div>
    <h1>works</h1>
    <app-items />
  </div>
</template>

<script>
  import WorksItem from '@/components/works/PageWorkItem.vue'
  export default {
    name: 'WorksList',
    components: {
      'app-items': WorksItem
    }
  }
</script>

<style scoped lang="scss">
  h1 {
    color: #4A4A4A;
    width: 980px;
    margin: 0 auto 30px;
    display: block;
    column-span: all;
    font-size: 50px;
  }
</style>
