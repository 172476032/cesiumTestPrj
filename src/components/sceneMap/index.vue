<template>
  <div class="scene-content">
    <div id="sceneMap"
         class="sceneMap"></div>
    <flyManage></flyManage>
  </div>
</template>

<script>
import Cesium from "cesium/Cesium";
import flyManage from "@/components/flyManager/flyManager.vue";

export default {
  data() {
    return {};
  },
  components: { flyManage },
  mounted() {
    this.initSceneMap();
  },
  computed: {},
  methods: {
    initSceneMap() {
      console.log("场景初始化");
      console.log("180转弧度: ", Cesium.Math.toRadians(180));
      window.Cesium = Cesium;
      window.Viewer = new Cesium.Viewer("sceneMap");
    }
  },
  destroyed() {}
};
</script>

<style lang="scss">
.scene-content {
  width: 100%;
  height: 100%;
  .sceneMap {
    width: 100%;
    height: 100%;
  }
}
</style>
