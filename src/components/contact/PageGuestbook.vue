<template>
  <div>
    <form>
      <fieldset>
        <legend>leave me a message</legend>
        <input type="text" v-model="cmName" placeholder="name" />
        <input type="text" v-model="cmEmail" placeholder="email" />
        <textarea type="text" v-model="cmContent" placeholder="message" />
        <button>send</button>
      </fieldset>
    </form>
    <ul>
        <li v-for="comment in comments" :key="comment.id">
            <h2><a :href="'mailto:' + comment.email">{{comment.name}}</a></h2>
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
        cmName: '',
        cmEmail: '',
        cmContent: ''
      }
    },
    mounted: function () {
      this.loadApi()
    },
    methods: {
      loadApi: function () {
        axios.get('http://139.162.88.67:3000/comments')
          .then(response => {
            this.comments = response.data
          })
          .catch(e => {
            this.errors.push(e)
          })
      },
      sendComment: function () {
        axios.post('http://139.161.88.67:3000/comments', {
            name: this.cmName,
            email: this.cmEmail,
            content: this.cmContent
          })
          .then(response => {
            this.loadApi()
          })
          .catch(e => {
            this.errors.push(e)
          })
      }
    }
  }

</script>

<style lang="scss" scoped>
  form {
    margin: 50px 0;
    fieldset {
      border: 0;
      padding: 0;
      input {
        font-size: 1.2rem;
        padding: 3px;
        display: inline-block;
        margin: 5px 5px 5px 0;
        border: 1px solid #cccccc;
        width: 200px;
      }
      textarea {
        display: block;
        border: 1px solid #cccccc;
        width: 415px;
        height: 200px;
        padding: 3px;
        resize: none;
      }
      button {
        background: #ffffff;
        border: 1px solid #cccccc;
        border-radius: 0;
        padding: 8px 15px;
      }
    }
  }

</style>
