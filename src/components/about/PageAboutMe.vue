<template>
  <article>
    <section>
      <h2>profile</h2>
      <p>full name : yip man lung</p>
      <p>date of birth : 10 nov 1981</p>
      <p>nationality : hong kong</p>
    </section>

    <section>
      <h2>about</h2>
      <p>hi, i am edmond.</p>
      <p>welcome to 256 pages, you can find some of my works in this place. </p>
      <p>feel free to <router-link to="contact">contact me</router-link> if you have any idea need to realize.</p>
    </section>

    <section>
      <h2>skills</h2>
      <p>user experience design</p>
      <p>grapgic design</p>
      <p>solution consultancy</p>
      <p>project management</p>
      <p>web front-end development</p>
      <p>javascript development</p>
      <p>search engine optimization</p>
    </section>
  </article>
</template>

<script>
  import Banner from '@/components/about/PageAboutMe.vue'
  export default {
    name: 'Intro',
    components: {
      'app-banner': Banner
    }
  }
</script>

<style scoped lang="scss">
  article {
    width: 800px;
    margin: 0 auto;
    section {
      font-family: 'Bitter', sans-serif;
      margin: 50px auto;
      p+h2 {
        margin-top: 1.5rem;
      }
    }
  }
</style>
