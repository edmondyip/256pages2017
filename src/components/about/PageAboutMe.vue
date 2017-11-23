<template>
  <article>
    <section>
      <h2>profile</h2>
      <p>name : edmond yip</p>
      <p>nationality : hong kong</p>
    </section>

    <section>
      <h2>about</h2>
      <p>hi, i am edmond. welcome to 256 pages, you can find some of my works in this place. feel free to <router-link to="contact">contact me</router-link> if you have any idea need to realize.</p>
    </section>

    <section>
      <h2>skills</h2>
      <ul>
        <li>user experience design</li>
        <li>graphic design</li>
        <li>search engine optimization</li>
        <li>solution consultancy</li>
        <li>web front-end development</li>
        <li>project management</li>
      </ul>
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
</style>
