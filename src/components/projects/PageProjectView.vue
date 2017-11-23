<template>
  <section>
      
  </section>
</template>

<script>
  import worksList from '@/assets/json/projects.json'
    export default {
        name: 'ProjectItem',
        data: function () {
            return {
                projectView: 1,
                list: worksList.projects
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
