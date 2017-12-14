<template>
  <div class="container">
    <div>
      <input type="text" v-model="commentName" />
      <input type="text" v-model="commentEmail" />
      <input type="text" v-model="commentContent" />
      <button @click="commentPost()">Send</button>
    </div>
    <ul v-if="comments && comments.length">
      <li v-for="comment of comments" :key="comment.id">
        <h1>{{comment.name}}</h1>
        <p>{{comment.email}}</p>
        <p>{{comment.content}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data: function () {
      return {
        comments: [],
        errors: [],
        commentsName: ''
      }
    },
    created: function () {
      this.loadData()
    },
    methods: {
      commentPost: function () {
        axios.post('//localhost:3000/comments', {
            name: this.commentName,
            email: this.commentEmail,
            content: this.commentContent
          })
          .then(response => {
            this.loadData()
          })
          .catch(e => {
            this.error.push(e)
          })
      },
      loadData: function () {
        axios.get('//localhost:3000/comments')
          .then(response => {
            this.comments = response.data
          })
          .catch(e => {
            this.errors.push(e)
          })
      }
    }
  }

</script>

<style lang="scss" scoped>
  .container {
    width: 900px;
    margin: 0 auto;
  }

</style>
