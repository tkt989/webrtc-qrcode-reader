import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  isRecording: true
};

const mutations = {
  startRecording(state) {
    state.isRecording = true;
  },
  stopRecording(state) {
    state.isRecording = false;
  }
};

export default new Vuex.Store({
  state,
  mutations
});
