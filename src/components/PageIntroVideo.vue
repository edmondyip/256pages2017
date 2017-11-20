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
        <div class="video-logo" v-if="logoAnimation === true">弐伍陸頁</div>
      </transition>
    </div>
    <transition name="title">
      <h1 class="index-title" v-if="titleAnimation === true">edmond yip design portfolio</h1>
    </transition>
    <transition name="small-name">
      <h2 class="index-small-name" v-if="nameAnimation === true">two hundred and fifty six pages</h2>
    </transition>
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
        self = this
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
    }
  }
</script>

<style scoped lang="scss">
  section {
    position: relative;
    width: 900px;
    margin: 0 auto;
    .video-container {
      position: relative; // overflow: hidden;
      width: 100%;
      height: 380px;
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
        position: absolute; // background: rgba(74, 74, 74, .5);
        width: 100%;
        height: 100%;
        text-align: center;
        display: flex;
        justify-content: center;
        font-family: kaiso, sans-serif;
        font-size: 100px;
        line-height: 380px;
        transition: .5s ease-out;
        cursor: cell;
        color: rgba(0, 0, 0, 1);
        top: 0;
      }
      #youtube {
        position: absolute;
        width: 980px;
        height: 550px;
        left: -40px;
        top: -50px;
        opacity: .1;
        transition: .5s;
        pointer-events: none;
      }
    }

    .video-logo-container:hover {
      width: 980px;
      .video-logo {
        color: rgba(0, 0, 0, 0);
        font-size: 150px;
      }
      #youtube {
        opacity: .9;
        left: 0;
      }
    }

    h1.index-title {
      font-size: 11px;
      color: #000000;
      position: absolute;
      bottom: 10px;
      left: 20px;
    }
    h2.index-small-name {
      display: block;
      font-size: 20px;
      letter-spacing: 2px;
      position: absolute;
      color: #000000;
      right: 0;
    }
  } // animation
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
      transform: translateX(100vw)
    }
    100% {
      transform: translateX(0)
    }
  }

</style>
