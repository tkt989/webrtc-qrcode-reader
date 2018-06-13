<template>
  <div class="CameraView">
    <video autoplay ref="video" />
  </div>
</template>

<script>
export default {
  name: 'CameraView',

  computed: {
    isRecording() {
      return this.$store.state.isRecording
    }
  },

  watch: {
    isRecording(newVal, oldVal) {
      if (this.isRecording) {
        this.start()
      } else {
        this.stop()
      }
    }
  },

  mounted() {
    this.start()
  },

  methods: {
    start() {
      let self = this
      function updateFrame() {
        if (!self.isRecording) return
        self.$emit('update-frame', self.$refs.video)
        requestAnimationFrame(updateFrame)
      }
      navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } }).then(stream => {
        this.$refs.video.src = window.URL.createObjectURL(stream)
        requestAnimationFrame(updateFrame)
      })
    },

    stop() {
      this.$refs.video.pause()
    }
  }
}
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
