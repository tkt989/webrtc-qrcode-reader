<template>
  <div class="hello">
    <video autoplay  ref="video" />
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },

  mounted() {
    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: "environment" } })
      .then(stream => {
        this.$refs.video.src = window.URL.createObjectURL(stream);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
video {
  width: 100%;
  height: 100%;
}
</style>
