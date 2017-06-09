<template>
  <div class="container">
   <ul class="posts">
      <li v-for="post in posts">
        <nuxt-link :to="'/posts/'+post.id">{{ post.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  asyncData () {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
      return { posts: res.data }
    })
  }
}
</script>

<style scoped>
.container {
  text-align: center;
  margin-top: 100px;
  font-family: sans-serif;
}
.posts {
  list-style-type: none;
}
.posts li a {
  display: inline-block;
  width: 800px;
  border: 1px #ddd solid;
  padding: 10px;
  text-align: left;
  color: #222;
  text-decoration: none;
}
.posts li a:hover {
  color: orange;
}
</style>
