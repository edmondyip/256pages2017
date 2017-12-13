<template>
  <section>
    <div class="video-container">
      <transition name="videoAnimation" appear appear-active-class="video-animation" @after-appear="afterVideo">
        <div class="video-wrapper">
          <iframe id="youtube" type="text/html" src="https://www.youtube.com/embed/videoseries?list=PLqPg4ZyANjyxgnWTAaDAvq2NaYjBH1pv1&autoplay=1&controls=0&showinfo=0&loop=1&iv_load_policy=3&mute=1"
            frameborder="0"></iframe>
        </div>
      </transition>
      <transition name="logo">
        <div class="video-logo" v-if="logoAnimation === true">
          <span>弐伍</span>
          <span>陸頁</span>
        </div>
      </transition>
    </div>
    <div class="title-container">
      <transition name="title">
        <h1 class="index-title" v-if="titleAnimation === true">edmond yip design portfolio</h1>
      </transition>
      <transition name="small-name">
        <h2 class="index-small-name" v-if="nameAnimation === true">two hundred and fifty six pages</h2>
      </transition>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Intro',
    data: function () {
      return {
        titleAnimation: false,
        nameAnimation: false,
        logoAnimation: false
      }
    },
    methods: {
      afterVideo: function (el) {
        const self = this
        setTimeout(function () {
          self.logoAnimation = true
        }, 1000)
        setTimeout(function () {
          self.titleAnimation = true
        }, 1500)
        setTimeout(function () {
          self.nameAnimation = true
        }, 2000)
      }
    },
  }

</script>

<style scoped lang="scss">
  $videoWidth: 980px;
  $videoWidthOffside: 40px;
  $videoHeight: 550px;
  $videoHeightOffside: 50px;

  $videoContainerWidth: $videoWidth - ($videoWidthOffside * 2);
  $videoContainerHeight: $videoHeight - ($videoHeightOffside * 2);

  section {
    .video-container {
      position: relative;
      width: $videoContainerWidth;
      height: $videoContainerHeight;
      margin: 0 auto;
      transition: .5s;
      .video-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: #85F1C1;
      }
      .video-logo {
        position: absolute;
        width: 100%;
        height: 100%;
        text-align: center;
        display: flex;
        justify-content: center;
        font-family: kaiso, sans-serif;
        font-size: 100px;
        line-height: $videoContainerHeight;
        transition: .5s ease-out;
        cursor: cell;
        color: rgba(0, 0, 0, 1);
        top: 0;
      }
      #youtube {
        position: absolute;
        width: $videoWidth;
        height: $videoHeight;
        left: - $videoWidthOffside;
        top: - $videoHeightOffside;
        opacity: .1;
        transition: .5s;
        pointer-events: none;
      }
      &:hover {
        width: $videoWidth - 10px;
        .video-logo {
          color: rgba(0, 0, 0, 0.2);
          font-size: 150px;
        }
        #youtube {
          opacity: .8;
          left: 0;
        }
      }
    }
    .title-container {
      position: relative;
      width: $videoContainerWidth;
      margin: 0 auto;
      transition: .5s;
      h1.index-title {
        font-size: 11px;
        color: #000000;
        position: absolute;
        bottom: 10px;
        left: 20px;
      }
      h2.index-small-name {
        font-size: 11px;
        letter-spacing: 2px;
        position: absolute;
        color: #000000;
        bottom: 10px;
        right: 20px;
      }
    }
  }


  .logo-enter-active {
    transition: .3s ease;
  }

  .logo-enter {
    transform: translateY(50px);
    opacity: 0;
  }

  .title-enter-active {
    transition: .3s ease;
  }

  .title-enter {
    transform: translateY(50px);
    opacity: 0;
  }

  .small-name-enter-active {
    transition: .3s ease;
  }

  .small-name-enter {
    transform: translateX(200px);
    opacity: 0;
  }

  .video-animation {
    animation: video-load 1s;
  }

  @keyframes video-load {
    0% {
      transform: translateY(100vw)
    }
    100% {
      transform: translateY(0)
    }
  }

  @media (max-width: $breakpoint-tablet) {
    section {
      .video-container {
        width: 100%;
        pointer-events: none;
      }
      .title-container {
        width: 100%;
      }
    }
  }

  @media (max-width: $breakpoint-mobile) {
    section {
      .video-container {
        width: 100%;
        height: 350px;
        overflow: hidden;
        margin-top: 50px;
        pointer-events: none;
        #youtube {
          width: 100%;
          display: none;
        }
        .video-logo {
          padding: 30px 0;
          line-height: 120px;
          display: block;
          justify-content: center;
          span {
            display: block;
            width: 100%;
            white-space: nowrap;
          }
        }
      }
    }
  }

</style>
