<template>
  <div class="about-cover">

    <div class="about-me">
      <transition name="fade" mode="out-in">
        <website-info v-if="About256Content === true" class="info" />
        <div v-else>
          <h1>about me</h1>
          <img src="~assets/img/about/about-me.jpg" @click="AboutMeContent = !AboutMeContent" alt="edmond yip">
        </div>
      </transition>
    </div>

    <div class="about-256">
      <transition name="fade" mode="out-in">
        <personal-profile v-if="AboutMeContent === true" class="info" />
        <div v-else>
          <h1>about this website</h1>
          <img src="~assets/img/about/about-256.jpg" @click="About256Content = !About256Content" alt="256 pages">
        </div>
      </transition>
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
      width: calc(50% - 4px);
      height: calc(100% - 4px);
      border: 2px solid rgba(133,241,193,1);
      background: $themeColor;
      .info {
        background: rgba(133,241,193,1);
        padding: 10px 50px;
        margin: 0 10px;
        height: 100%;
      }
      div {
        width: 100%;
        img {
          transition-delay: .5s;
          transition: .8s;
          width: 100%;
          cursor: pointer;
        }
        h1 {
          letter-spacing: 2px;
          color: #fff;
          display: block;
          transition: .4s;
          position: absolute;
          margin: 10px;
          padding: 10px;
          background: rgba(0, 0, 0, .5);
        }
        &:hover h1 {
          background: rbga(0,0,0,1);
        }
      }
    }
  }
  @media (max-width: $breakpoint-mobile) {
    .about-cover {
      display: block;
      div {
        width: calc(100% - 4px)
      }
    }
  }
</style>
