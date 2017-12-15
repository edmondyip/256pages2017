<template>
    <fieldset>
      <legend>leave me a message</legend>
      <input type="text" v-model="cmName" placeholder="name">
      <input type="text" v-model="cmEmail" placeholder="email" />
      <textarea type="text" v-model="cmContent" placeholder="message..." />
      <button v-if="message === ''" @click="sendComment">send</button>
      <button v-else disabled>{{message}}</button>
    </fieldset>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Guestbook',
    data: function () {
      return {
        comments: [],
        errors: [],
        cmName: '',
        cmEmail: '',
        cmContent: '',
        message: ''
      }
    },
    methods: {
      sendComment: function () {
        axios.post('https://dev.256pages.com/comments', {
            name: this.cmName,
            email: this.cmEmail,
            content: this.cmContent
          })
          .then(response => {
            this.cmName = ''
            this.cmEmail = ''
            this.cmContent = ''
            this.message = 'thank you'
          })
          .catch(e => {
            this.errors.push(e)
          })
      }
    }
  }

</script>

<style lang="scss" scoped>
  fieldset {
    margin: 50px 0;
    border: 0;
    padding: 0;
    position: relative;
    input {
      font-size: 1rem;
      padding: 3px;
      display: inline-block;
      margin: 5px 5px 5px 0;
      border: 1px solid #cccccc;
      width: 200px;
    }
    textarea {
      font-size: 1rem;
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

@media (max-width: $breakpoint-mobile) {
  fieldset {
    input {
      width: 100%;
    }
    textarea {
      width: 100%;
    }
  }
}
</style>
