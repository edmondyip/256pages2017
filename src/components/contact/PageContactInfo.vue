<template>
  <section>
    <h1>contact</h1>
    <p>Feel free to contact me if you have any idea need to realize</p>
    <p>You can send email to me or leave a message</p>
    <ul>
      <li>Email :
        <a href="mailto:neta.edmond@gmail.com">neta.edmond@gmail.com</a>
      </li>
    </ul>
    <guest-book/>
  </section>
</template>

<script>
import GuestBook from "@/components/contact/PageGuestbook"
  export default {
    name: 'Contact',
    components: {
      GuestBook
    }
  }
</script>

<style scoped lang="scss">
  section {
    width: 850px;
    margin: 0 auto;
  }

  @media (max-width: $breakpoint-mobile) {
    section {
      width: 100%;
    }
  }
</style>
