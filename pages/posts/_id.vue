<template>
  <div class="container">
    <h1>{{ post.title }}</h1>
<<<<<<< HEAD
=======
    <pre>{{ post.body }}</pre>
    <p><nuxt-link to="/posts">Back to the list</nuxt-link></p>
>>>>>>> 87d3a420ea4ff836851c5c944d652edd4ca72007
  </div>
</template>

<script>
import axios from 'axios'

export default {
<<<<<<< HEAD
  async asyncData ({ req, params }) {
    // We can use async/await ES6 feature
    let { data } = await axios.get(`http://localhost:3002/posts/${post.uid}`)
=======
  async asyncData ({ params }) {
    // We can use async/await ES6 feature
    let { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
>>>>>>> 87d3a420ea4ff836851c5c944d652edd4ca72007
    return { post: data }
  },
  head () {
    return {
<<<<<<< HEAD
      title: this.post.uid
=======
      title: this.post.title
>>>>>>> 87d3a420ea4ff836851c5c944d652edd4ca72007
    }
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
