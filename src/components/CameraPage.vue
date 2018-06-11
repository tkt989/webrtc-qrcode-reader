<template>
  <ons-page>
    <CameraView id="CameraView" :stop="stop" @update-frame="scan"/>
    <ToolBar id="ToolBar"/>
  </ons-page>
</template>

<script>
import ToolBar from "./ToolBar";
import CameraView from "./CameraView";
import ResultPage from "./ResultPage";
import jsQR from "jsqr"

export default {
  name: "CameraPage",
  components: {
    ToolBar,
    CameraView,
    ResultPage
  },

  data() {
    return {
      stop: false
    }
  },

  mounted() {
  },

  methods: {
    scan(video) {
      let canvasElement = document.createElement("canvas");
      let canvas = canvasElement.getContext("2d");

      canvasElement.height = video.videoHeight;
      canvasElement.width = video.videoWidth;
      canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
      let image = canvas.getImageData(0, 0, canvasElement.width, canvasElement.height);
      let code = jsQR(image.data, image.width, image.height);

      if (code != null && code.binaryData.length != 0) {
        this.stop = true;
        this.$emit("push-page", {
          extends: ResultPage,
          onsNavigatorProps: {
            code
          }
        });
      }
    }
  }
};
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