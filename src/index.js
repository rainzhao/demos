import './index.scss'

import Vue from 'vue'
import VueRouter from 'vue-router'
import router from "./router/router";

Vue.use(VueRouter);

new Vue({
  el: '#app',
  router
});