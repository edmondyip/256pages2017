<template>
  <div class="work-wrapper">
    <h1>works</h1>
    <app-items />
  </div>
</template>

<script>
  import WorksItem from '@/components/works/PageWorkItem'
  export default {
    name: 'WorksList',
    components: {
      'app-items': WorksItem
    },
    metaInfo: {
      title: 'my portfolio'
    }
  }
</script>

<style scoped lang="scss">
  .work-wrapper {
    width: 980px;
    margin: 0 auto 30px;
  }
</style>
