<template>
  <section>
    <h1>contact</h1>
    <p>Feel free to contact me if you have any idea need to realize</p>
    <p>You can send email to me or leave a message</p>
    <ul>
      <li>Email :
        <a href="mailto:neta.edmond@gmail.com">neta.edmond@gmail.com</a>
        <a href="https://github.com/edmondyip" target="_blank" rel="noopener noreferrer">GitHub @edmondyip</a>
      </li>
    </ul>
    <guest-book/>
  </section>
</template>

<script>
import GuestBook from "~/components/contact/Guestbook"
  export default {
    name: 'Contact',
    metaInfo: {
      title: "Contact Edmond",
      meta: [
        {
          vmid: 'description',
          name: 'description',
          content: "Contact Edmond if you want to have more information."
        }
      ]
    },
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