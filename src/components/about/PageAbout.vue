<template>
  <div class="about-cover">

    <div class="about-me">
      <div class="image">
        <header>
          <h1>Edmond Yip</h1>
          <h1>Designer</h1>
          <h1>Developer</h1>
        </header>
      </div>
      <personal-profile class="info" />
    </div>

    <div class="about-skills">
      <personal-skills />
    </div>

    <div class="about-256">
      <website-info  class="info" />
      <div class="image">
      </div>
    </div>

  </div>
</template>

<script>
  import PersonalProfile from "@/components/about/PageAboutMe"
  import WebsiteInfo from "@/components/about/PageAbout256"
  import PersonalSkills from "@/components/about/PageAboutSkills"
  export default {
    name: 'About',
    data: function () {
      return {
      }
    },
    components: {
      PersonalProfile,
      WebsiteInfo,
      PersonalSkills
    }
  }

</script>

<style scoped lang="scss">
  .about-cover {
    position: relative;
    max-width: 920px;
    margin: 0 auto;
    div {
      position: relative;
      display: flex;
      width: 100%;
      height: 100%;
      .info {
        width: 50%;
        display: block;
        padding: 0 20px 20px;
        margin: 0;
        background: #ffffff;
      }
      .image {
        width: 50%;
        display: block;
        overflow: hidden;
        header {
          display: block;
          width: 100%;
          background: url(~assets/img/about/about-me.jpg) no-repeat;
          background-size: cover;
          height: 400px;
          padding: 20px;
          display: flex;
          flex-flow: column wrap;
          justify-content: flex-end;
          h1 {
            width: 100%;
            padding: 0;
            margin: 0;
            color: rgba($color: #ffffff, $alpha: .8);
            text-align: left;
          }
        }
      }
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
