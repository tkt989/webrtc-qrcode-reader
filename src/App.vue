<template>
  <v-ons-navigator id="app" swipeable :page-stack="pageStack" @push-page="pageStack.push($event)">
  </v-ons-navigator>
</template>

<script>
import CameraPage from "./components/CameraPage";

export default {
  name: "App",
  components: {
    CameraPage
  },

  data() {
    return {
      pageStack: [CameraPage]
    };
  },

  mounted() {}
};
</script>

<style>
html,
body {
  margin: 0;
  height: 100%;
  background: black;
}
#app {
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
