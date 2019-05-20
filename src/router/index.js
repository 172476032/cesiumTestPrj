import Vue from 'vue'
import Router from 'vue-router'
import map from "@/components/map/map.vue"
import sceneMap from '@/components/sceneMap/index.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'sceneMap',
    component: sceneMap
  }, {
    path: "/map",
    name: "map",
    component: map
  }]
})
