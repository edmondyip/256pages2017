<template>
  <div class="container">
    <h1>Blog</h1>
    <ul>
      <li v-for="post in posts">
<<<<<<< HEAD
        <nuxt-link :to="{ name: 'posts-id', params: { id: post.id } }">
          {{ post.title }}
        </nuxt-link>
      </li>
    </ul>
    <p><nuxt-link to="/">Back to home page</nuxt-link></p>
=======
        <nuxt-link :to="{ name: 'posts-id', params: { id: post.id } }">{{ post.title }}</nuxt-link>
      </li>
    </ul>
>>>>>>> 87d3a420ea4ff836851c5c944d652edd4ca72007
  </div>
</template>

<script>
import axios from 'axios'

export default {
  asyncData ({ req, params }) {
    // We can return a Promise instead of calling the callback
<<<<<<< HEAD
    return axios.get('http://localhost:3002/posts')
    .then((res) => {
      return { posts: res.data.slice(0, 10) }
=======
    return axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
      return { posts: res.data.slice(0, 5) }
>>>>>>> 87d3a420ea4ff836851c5c944d652edd4ca72007
    })
  }
}
</script>

<style scoped>
.container {
  width: 70%;
  margin: auto;
  text-align: center;
  padding-top: 100px;
}
ul {
  list-style-type: none;
  padding: 0;
}
ul li {
  border: 1px #ddd solid;
  padding: 20px;
  text-align: left;
}
ul li a {
  color: gray;
}
p {
  font-size: 20px;
}
a {
  color: #41B883;
}
</style>
