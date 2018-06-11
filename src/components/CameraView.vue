<template>
  <div class="CameraView">
    <video autoplay ref="video" />
  </div>
</template>

<script>
export default {
  name: "CameraView",

  props: {
    stop: {
      type: Boolean,
      default: false
    }
  },

  watch: {
    stop: function(newVal, oldVal) {
      if (newVal) {
        let video = this.$refs.video;
        video.pause();
        video.src = null;
      }
    }
  },

  mounted() {
    let self = this;
    function updateFrame() {
      if (self.stop) return;
      self.$emit("update-frame", self.$refs.video);
      requestAnimationFrame(updateFrame);
    }

    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: "environment" } })
      .then(stream => {
        this.$refs.video.src = window.URL.createObjectURL(stream);
        requestAnimationFrame(updateFrame);
      });
  }
};
</script>

<style scoped>
.CameraView {
  width: 100%;
  height: 100%;
  display: flex;
  align-content: center;
  background: black;
}

video {
  width: 100%;
  height: 100%;
}
</style>
