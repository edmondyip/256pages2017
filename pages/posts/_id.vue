<template>
  <div class="container">
    <h1>{{ post.title }}</h1>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData ({ req, params }) {
    // We can use async/await ES6 feature
    let { data } = await axios.get(`http://localhost:3002/posts/${post.uid}`)
    return { post: data }
  },
  head () {
    return {
      title: this.post.uid
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
