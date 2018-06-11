<template>
  <div class="ToolBar">
    <ons-icon id="help" icon="fa-question-circle" size="32px" fixed-width="true"></ons-icon>
    <div id="help-bg"></div>
  </div>
</template>

<script>
export default {
  name: "ToolBar",
  mounted() {}
};
</script>

<style scoped>
.ToolBar {
  display: flex;
}
#help {
  height: 32px;
  width: 32px;
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  z-index: 1;
}

#help-bg {
  height: 26px;
  width: 26px;
  border-radius: 13px;
  background: white;
  position: absolute;
  top: 19px;
  right: 19px;
}
</style>
