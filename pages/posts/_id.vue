<template>
  <div class="container">
    <h1>{{ post.title }}</h1>
<<<<<<< HEAD
  </div>
=======
    <pre>{{ post.body }}</pre>
    <p><nuxt-link to="/post">Back to the list</nuxt-link></p>
>>>>>>> cadd299d6ebee302c7f3b4e4de053caf72f16ac7
</template>

<script>
import axios from 'axios'

export default {
  async asyncData ({ req, params }) {
    // We can use async/await ES6 feature
<<<<<<< HEAD
    let { data } = await axios.get(`http://localhost:3002/posts/${post.uid}`)
=======
    let { data } = await axios.get(`http://localhost:3002/posts/${params.id}`)
>>>>>>> cadd299d6ebee302c7f3b4e4de053caf72f16ac7
    return { post: data }
  },
  head () {
    return {
      title: this.post.title
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
