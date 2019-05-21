<template>
  <div class="scene-content">
    <div id="sceneMap"></div>
    <tool-bar></tool-bar>

  </div>
</template>

<script>
import Cesium from "cesium/Cesium";
import toolBar from "./toolBar";

const layers = require("../sceneMap/layersManager/layercfg.json");

export default {
  data() {
    return {
      Viewer: null
    };
  },
  components: { toolBar },
  mounted() {
    this.initSceneMap();
  },
  computed: {},
  methods: {
    initSceneMap() {
      console.log("场景初始化");
      console.log("180转弧度: ", Cesium.Math.toRadians(180));
      this.Viewer = new Cesium.Viewer("sceneMap", {
        baseLayerPicker: false,
        fullscreenButton: false,
        sceneModePicker: false,
        timeline: false,
        geocoder: false,
        homeButton: false,
        navigationHelpButton: false,
        animation: false
      });
      window.Cesium = Cesium;
      window.Viewer = this.Viewer;
      debugger;
      this.initLayers(this.Viewer);
    },
    initLayers(Viewer) {
      debugger;
      if (layers) {
        // for (let i = 0; i < layers.length; i++) {
        //   for (let k = 0; k < layers[i].children.length; k++) {
        //     for (let j = 0; j < layers[i].children[k].children.length; j++) {
        //       //添加地图服务
        //       let arcgisImagery = new Cesium.WebMapTileServiceImageryProvider({
        //         url: layers[i].children[k].children[j].url,
        //         layer: layers[i].children[k].children[j].layername,
        //         style: "default",
        //         format: "image/jpeg",
        //         tileMatrixSetID: "default028mm"
        //       });
        //       Viewer.imageryLayers.addImageryProvider(arcgisImagery);
        //     }
        //   }
        // }
        // Viewer.imageryLayers.addImageryProvider(
        //   new Cesium.ArcGisMapServerImageryProvider({
        //     url:
        //       "http://10.6.172.178:6080/arcgis/rest/services/kingsa/basin_changjiang/MapServer"
        //   })
        // );
      }
    }
  },
  destroyed() {}
};
</script>

<style lang="scss">
.scene-content {
  width: 100%;
  height: 100%;
  #sceneMap {
    width: 100%;
    height: 100%;
    .cesium-credit-logoContainer {
      display: none !important;
    }
    .cesium-credit-textContainer {
      display: none !important;
    }
    .cesium-credit-expand-link {
      display: none !important;
    }
  }
}
</style>
