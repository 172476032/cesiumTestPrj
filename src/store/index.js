import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);

import scene from "./scene.js"


export default new Vuex.Store({
  modules: {
    scene
  }
})
