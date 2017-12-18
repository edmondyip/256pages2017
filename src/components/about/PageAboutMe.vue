<template>
  <article>
    <slot></slot>
    <section>
      <h1>Edmond Yip</h1>
      <h1>Designer</h1>
      <h1>Development</h1>
      <p>Hi, i am a designer come from Hong Kong. As my position is a full stack designer, that's mean i can design from graphic to user experience, also the front-end programming. </p>
      <p>When I start to build website from graphic, but programmer always create website exactly not i design. So I try to build it myself,</p>
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
  export default {
    name: 'AboutMe'
  }
</script>

<style scoped lang="scss">
  article {
    section {
      h1 {
        text-align: right;
      }
    }
  }
</style>
