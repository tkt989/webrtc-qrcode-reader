<template>
  <v-ons-page>
    {{code.data}}
    <v-ons-toolbar>
      <div class="left">
        <v-ons-back-button>Back</v-ons-back-button>
      </div>
    </v-ons-toolbar>
  </v-ons-page>
</template>

<script>
export default {
  name: "ResultPage",
  props: {
    code: null
  }
};
</script>

<style scoped>
</style>