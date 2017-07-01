<template>
  <div class="container">
    <ul>
      <li v-for="project in projects">
        <nuxt-link :to="{ name: 'projects-id', params: { id: project.id } }">{{ project.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  asyncData ({ req, params }) {
    // We can return a Promise instead of calling the callback
    return axios.get('http://localhost:3002/projects')
    .then((res) => {
      return { projects: res.data.slice(0, 5) }
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
