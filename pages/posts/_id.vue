<template>
  <div class="post">
    <h3>{{ title }}</h3>
    <h4>{{ body }}</h4>
    <p><nuxt-link to="../posts">List</nuxt-link></p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  validate ({ params }) {
    return !isNaN(+params.id)
  },
  asyncData ({ params, error }) {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${+params.id}`)
    .then((res) => res.data)
    .catch(() => {
      error({ message: 'User not found', statusCode: 404 })
    })
  }
}
</script>

<style scoped>
.user {
  text-align: center;
  margin-top: 100px;
  font-family: sans-serif;
}
</style>
