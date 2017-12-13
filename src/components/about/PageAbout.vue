<template>
  <div class="about-cover">

    <div class="about-me">

      <div class="image">
        <h1>about me</h1>
        <img src="~assets/img/about/about-me.jpg" @click="AboutMeContent = !AboutMeContent" alt="about me">
      </div>

      <personal-profile :class="{open: AboutMeContent === true}" class="info">
        <!-- <svg v-if="AboutMeContent === true" @click="AboutMeContent = !AboutMeContent" x="0px" y="0px" class="close-btn" xmlns="http://www.w3.org/2000/svg"
          xml:space="preserve" viewBox="0 0 25 25" preserveAspectRatio="none">
          <g>
            <polygon points="23,4.7 20.3,2 12.5,9.8 4.7,2 2,4.7 9.8,12.5 2,20.3 4.7,23 12.5,15.2 20.3,23 23,20.3 15.2,12.5" />
          </g>
        </svg> -->
      </personal-profile>

    </div>

    <div class="about-256">

      <div class="image">
        <h1>about this website</h1>
        <img src="~assets/img/about/about-256.jpg" @click="About256Content = !About256Content" alt="about 256">
      </div>

      <website-info :class="{open: About256Content === true}" class="info">
        <!-- <svg v-if="About256Content === true" @click="About256Content = !About256Content" x="0px" y="0px" class="close-btn" xmlns="http://www.w3.org/2000/svg"
          xml:space="preserve" viewBox="0 0 25 25" preserveAspectRatio="none">
          <g>
            <polygon points="23,4.7 20.3,2 12.5,9.8 4.7,2 2,4.7 9.8,12.5 2,20.3 4.7,23 12.5,15.2 20.3,23 23,20.3 15.2,12.5" />
          </g>
        </svg> -->
      </website-info>

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
    max-width: 960px;
    transition: .5s;
    margin: 0 auto;
    div {
      position: relative;
      display: grid;
      width: 50%;
      height: 100%;
      .info {
        width: 100%;
        display: block;
        transition: .5s;
        background: $themeColor;
      }
      .image {
        width: 100%;
        display: block;
        img {
          transition-delay: .5s;
          transition: .8s;
          width: 100%;
          cursor: pointer;
          display: block;
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
        &:hover {
          background: rgba(0, 0, 0, 1);
        }
      }
    }
    .close-btn {
      width: 25px;
      height: 25px;
      position: absolute;
      right: 15px;
      top: 15px;
      cursor: pointer;
    }
  }

  @media (max-width: $breakpoint-mobile) {
    .about-cover {
      display: block;
      width: 100%;
      div {
        width: calc(100% - 4px)
      }
    }
  }

</style>
