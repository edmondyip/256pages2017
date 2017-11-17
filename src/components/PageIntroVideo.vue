<template>
  <div class="video-logo-container">
    <transition name="video-animation" tag="div" appear appear-active-class="video-animation" @after-appear="afterVideo">
      <div class="video-wrapper">
        <iframe id="ytplayer" type="text/html" src="https://www.youtube.com/embed/videoseries?list=PLqPg4ZyANjyxgnWTAaDAvq2NaYjBH1pv1&autoplay=1&controls=0&showinfo=0&loop=1&iv_load_policy=3&mute=1" frameborder="0"></iframe>
      </div>
    </transition>
    <transition name="title-animation" tag="h1" class="index-title" appear appear-class="title-animation">edmond yip design portfolio</transition>
    <h2 class="video-logo-small-name">two hundred and fifty six pages</h2>
    <!-- <div class="video-logo">弐伍陸頁</div> -->
  </div>
</template>

<script>
  export default {
    name: 'Intro',
    data: function () {
      return {
        titleAnimation: false
      }
    },
    methods: {
      self: this,
      afterVideo: function (el) {
        console.log('Video Loaded')
        this.titleAnimation = true
      }
    }
  }
</script>

<style scoped lang="scss">
  .video-logo-container {
    position: relative;
    overflow: hidden;
    width: 900px;
    height: 380px;
    margin: 0 auto;
    transition: .5s;
    .video-wrapper {
      width: 100%;
      height: 380px;
      overflow: hidden;
      background: #85F1C1;
    }
    .video-logo {
      position: absolute;
      background: rgba(74, 74, 74, .5);
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
    }
    #ytplayer {
      position: absolute;
      width: 980px;
      height: 550px;
      left: -40px;
      top: -50px;
      opacity: .1;
      transition: .5s;
    }
    .video-logo-small-name {
      font-size: 11px;
      letter-spacing: 2px;
      position: absolute;
      top: 195px;
      right: -100px;
      transform: rotateZ(90deg);
      color: #000000;
    }
  }

  .video-logo-container:hover {
    width: 980px;
    .video-logo {
      color: rgba(0, 0, 0, 0);
      font-size: 150px;
    }
    #ytplayer {
      opacity: .9;
      left: 0;
    }
  }

  h1.index-title {
    font-size: 11px;
    color: #000000;
    position: absolute;
    bottom: 10px;
    left: 10px;
  }

  .video-animation {
    animation: go 2s;
  }

  .title-animation {
    animation: go 2s;
  }

  @keyframes go {
    from {
      width: 0;
    }
    to {
      width: 900px;
    }
  }

</style>
