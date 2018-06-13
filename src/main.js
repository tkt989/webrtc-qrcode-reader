// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import VueOnsen from "vue-onsenui";
import store from "./store";

import "onsenui/css/onsenui.css";
import "onsenui/css/onsen-css-components.css";

Vue.use(VueOnsen);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  store,
  components: { App },
  template: "<App/>"
});
