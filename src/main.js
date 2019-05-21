// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
<<<<<<< HEAD
import "./css/map.css"
import iView from "iview";
import "iview/dist/styles/iview.css";
=======
import "iview/dist/styles/iview.css";
import iView from "iview";
>>>>>>> ec71936627fb25fd9795f6346605e0429e84043b
require('cesium/Widgets/widgets.css');
import store from "./store"

Vue.use(iView)

Vue.config.productionTip = false
Vue.use(iView)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
