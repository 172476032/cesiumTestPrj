import Vue from 'vue'
import Router from 'vue-router'
import sceneMap from '@/components/sceneMap/index.vue';
import testDdiv from '@/components/testes/testdiv.vue'
// import homeMap from "@/components/homeMap/homeMap.vue"

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'sceneMap',
      component: sceneMap
    },
    // {
    //   path: "homeMap",
    //   name: "homeMap",
    //   component: homeMap
    // },
    {
      path: "testlabel",
      name: "testlabel",
      component: testDdiv
    }
  ]
})
