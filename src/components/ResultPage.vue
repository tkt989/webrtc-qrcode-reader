<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="left">
        <v-ons-back-button @click="back">Back</v-ons-back-button>
      </div>
    </v-ons-toolbar>

    <p v-html="html"></p>
  </v-ons-page>
</template>

<script>
let url = new RegExp('(https?://[\\w/:%#\\$&\\?\\(\\)~\\.=\\+\\-]+)')
export default {
  name: 'ResultPage',
  props: {
    data: ''
  },

  computed: {
    html() {
      let data = this.data

      return data.replace(url, `<a href="$1">$1</a>`)
    }
  },

  methods: {
    back(event) {
      this.$store.commit('startRecording')
    }
  }
}
</script>

<style scoped>
</style>