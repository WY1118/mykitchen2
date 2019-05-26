import Vue from 'vue'
import Vuex from 'vuex'
import shopCar from './shopCar'
import mine from "./mine/index"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    shopCar,
    mine
  }
})
