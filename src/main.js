import Vue from 'vue'
import App from './App.vue'
import router from "./routers"
import store from "./store/index.js"
import axios from "axios"
import Vuex from "vuex";

Vue.config.productionTip = false
new Vue({
  axios,
  Vuex,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

