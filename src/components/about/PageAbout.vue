<template>
  <div class="about-cover">
    <div class="about-me">
      <!-- <img src="~assets/img/about/about-me.jpg" alt="edmond yip"> -->
      <h1>about me</h1>
      <personal-profile/>
    </div>
    <div class="about-256">
      <!-- <img src="~assets/img/about/about-256.jpg" alt="256 pages"> -->
      <h1>about 256</h1>
      <website-info/>
    </div>
  </div>
</template>

<script>
  import PersonalProfile from "@/components/about/PageAboutMe"
  import WebsiteInfo from "@/components/about/PageAbout256"
  export default {
    name: 'Banner',
    data: function () {
      return {
      }
    },
    components: {
      PersonalProfile,
      WebsiteInfo
    }
  }
</script>

<style scoped lang="scss">
  .about-cover {
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    transition: .5s;
    opacity: 1;
    left: 0;
    right: 0;
    div {
      display: block;
      width: 50%;
      height: 100%;
      img {
        position: absolute;
        transition-delay: .5s;
        transition: .8s;
      }
      h1 {
        letter-spacing: 2px;
        color: #000000;
        display: block;
        transition: .4s;
        }
      }
    .about-me {
      background: #eeeeee;
    }
    .about-256 {
      background: #cb3402;
    }
    }
</style>
