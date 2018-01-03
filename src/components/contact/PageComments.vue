<template>
  <ul>
    <button @click="loadApi()">Refresh</button>
    <button @click="delCm()">Delete</button>
    <li v-for="comment in comments" :key="comment.id">
      <input type="checkbox" v-model="checkedCm" :value="comment._id"></input>
      <h2>
        <a :href="'mailto:' + comment.email">{{comment.name}}</a>
      </h2>
      <p>{{comment.content}}</p>
      <span>{{timeCheck(comment.createdAt)}}</span>
    </li>
  </ul>
</template>

<script>
  import axios from "axios"
  import date from "moment"
  export default {
    name: 'Comments',
    data: function () {
      return {
        comments: [],
        errors: [],
        checkedCm: []
      }
    },
    created: function () {
      this.loadApi()
    },
    methods: {
      loadApi: function () {
        axios.get('https://dev.256pages.com/comments')
          .then(response => {
            this.comments = response.data
          })
          .catch(e => {
            this.errors.push(e)
          })
      },
      timeCheck: function (time) {
        return date(time).format("Do MMM, h:mm a")
      },
      delCm: function () {
        axios.delete('https://dev.256pages.com/comments/' + this.checkedCm)
          .then(response => {
            this.loadApi()
            this.checkCm = []
          })
          .catch(e => {
            this.errors.push(e)
          })
      },
    }
  }

</script>

<style lang="scss" scoped>
  ul {
    width: 400px;
    margin: 0 auto;
    li {
      position: relative;
      background: #ffffff;
      padding: 25px;
      box-shadow: 0 0 10px rgba($color: #000000, $alpha: .3);
      span {
        font-size: .7rem;
        color: #aaa;
        position: absolute;
        right: 10px;
      }
      input {
        position: absolute;
        right: 10px;
        top: 10px;
      }
    }
  }

  @media (max-width: $breakpoint-mobile) {
    ul {
      width: 100%;
    }
  }

</style>
