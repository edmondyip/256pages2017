<template>
  <div class="about-cover">

    <section class="about-me">
      <div class="image">
        <header>
          <h1>Edmond Yip</h1>
          <h1>Designer</h1>
          <h1>Developer</h1>
        </header>
      </div>
      <personal-profile class="info" />
    </section>

    <section class="about-skills">
      <personal-skills />
    </section>

    <section class="about-256">
      <div class="image">
        <header>
          <h1>256pages Tech Stack</h1>
        </header>
      </div>
      <website-info class="info" />
    </section>

    <section class="about-stack">
      <tech-stack />
    </section>

  </div>
</template>

<script>
  import PersonalProfile from "@/components/about/PageAboutMe"
  import WebsiteInfo from "@/components/about/PageAbout256"
  import PersonalSkills from "@/components/about/PageAboutSkills"
  import TechStack from "@/components/about/PageAbout256Stack"
  export default {
    name: 'About',
    data: function () {
      return {}
    },
    components: {
      PersonalProfile,
      WebsiteInfo,
      PersonalSkills,
      TechStack
    }
  }

</script>

<style scoped lang="scss">
  .about-cover {
    position: relative;
    max-width: 940px;
    margin: 0 auto;
    section {
      position: relative;
      display: flex;
      width: 100%;
      height: 100%;
      &.about-me {
        header {
          background: url(~assets/img/about/about-me.jpg) no-repeat;
          background-size: cover;
        }
      }
      &.about-256 {
        header {
          background: url(~assets/img/about/about-256.jpg) no-repeat center;
          background-size: cover;
        }
      }
      .info {
        width: 50%;
        display: block;
        padding: 0 20px 20px;
        margin: 15px 0;
        background: #ffffff;
        margin-left: -30px;
      }
      .image {
        width: 50%;
        display: block;
        overflow: hidden;
        header {
          display: block;
          width: 100%;
          height: 350px;
          padding: 20px;
          display: flex;
          flex-flow: column wrap;
          justify-content: flex-end;
        }
      }
    }
    h1 {
      width: 100%;
      padding: 0;
      margin: 0;
      color: rgba($color: #ffffff, $alpha: .8);
      text-align: left;
    }
    .about-skills {
      margin: 50px 0;
    }
  }

  @media (max-width: $breakpoint-mobile) {
    .about-cover {
      display: block;
      width: 95%;
      padding: 10px 0;
      .about-me {
        width: 100%;
        display: block;
        .info {
          width: 100%;
        }
        .image {
          width: 100%;
        }
      }
    }
  }

</style>
