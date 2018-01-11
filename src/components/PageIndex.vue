<template>
  <video-banner />
</template>

<script>
  import VideoBanner from "@/components/index/IndexVideo"
  export default {
    name: 'IndexPage',
    metaInfo: {
      title: "Edmond Yip's personal website",
      meta: [
        {
          vmid: 'description',
          name: 'description',
          content: "Welcome to Edmond Yip's personal website. Edmond Yip is a Full stack designer + developer. This website built by VueJS."
        }
      ]
    },
    components: {
      VideoBanner
    }
  }
</script>

<style lang="scss" scoped>


</style>
