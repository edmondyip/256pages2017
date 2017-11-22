<template>
  <div class="about-cover">
    <div class="about-me">
      <h1>about me</h1>
      <website-info v-if="About256Content === true"  @click="AboutMeContent = false" />
      <img @click="AboutMeContent = true" v-else src="~assets/img/about/about-me.jpg" alt="edmond yip">
    </div>
    <div class="about-256">
      <h1>about 256</h1>
      <personal-profile v-if="AboutMeContent === true"  @click="AboutMeContent = false" />
      <img @click="About256Content = true" v-else src="~assets/img/about/about-256.jpg" alt="256 pages">
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
        AboutMeContent: false,
        About256Content: false
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
    position: relative;
    display: flex;
    width: 100%;
    transition: .5s;
    left: 0;
    right: 0;
    div {
      display: block;
      position: relative;
      width: 50%;
      height: 100%;
      img {
        // position: absolute;
        transition-delay: .5s;
        transition: .8s;
        width: 100%;
      }
      h1 {
        letter-spacing: 2px;
        color: #fff;
        display: block;
        transition: .4s;
        position: absolute;
        top: 10px;
      }
    }
    .about-me {
      background: #dddddd;
    }
    .about-256 {
      background: #cb3402;
    }
  }

</style>
