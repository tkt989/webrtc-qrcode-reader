<template>
  <ons-page>
    <CameraView id="CameraView" :stop="stop" @update-frame="scan"/>
    <!-- <ToolBar id="ToolBar"/> -->
  </ons-page>
</template>

<script>
import ToolBar from './ToolBar'
import CameraView from './CameraView'
import ResultPage from './ResultPage'
import jsQR from 'jsqr'

export default {
  name: 'CameraPage',
  components: {
    ToolBar,
    CameraView,
    ResultPage
  },

  props: {
    stop: false
  },

  mounted() {},

  methods: {
    scan(video) {
      let canvasElement = document.createElement('canvas')
      let canvas = canvasElement.getContext('2d')

      canvasElement.height = video.videoHeight
      canvasElement.width = video.videoWidth
      canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height)
      let image = canvas.getImageData(0, 0, canvasElement.width, canvasElement.height)
      let code = jsQR(image.data, image.width, image.height)

      if (code != null && code.binaryData.length != 0) {
        this.$emit('push-page', {
          extends: ResultPage,
          onsNavigatorProps: {
            data: code.data
          }
        })
        navigator.vibrate(200)
        this.$store.commit('stopRecording')
      }
    }
  }
}
</script>

<style scoped>
#CameraView {
  position: fixed;
}

#ToolBar {
  position: fixed;
  width: 100%;
}
</style>