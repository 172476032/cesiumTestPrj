<!--  -->
<template>
  <div class="two-map">
    <div id="map">
      <Tree class="tree" :data="layersCfg" show-checkbox @on-check-change="checked"></Tree>
    </div>
  </div>
</template>

<script>
import "ol/ol.css";
import * as ol from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import XYZ from "ol/source/XYZ";
import { transform } from "ol/proj";

const layersCfg = require("./layer.json");

export default {
  data() {
    return {
      layersCfg: layersCfg
    };
  },

  components: {},

  computed: {},

  mounted() {
    this.initMap();
  },

  methods: {
    initMap() {
      this.map = new ol.Map({
        view: new ol.View({
          center: [113, 26],
          zoom: 10,
          projection: "EPSG:4326"
        }),
        layers: [
          new TileLayer({
            source: new OSM()
          })
        ],
        target: "map"
      });
      this.map.on("click", e => {
        console.log(
          "中心点,级别",
          e.target.getView().getCenter(),
          e.target.getView().getZoom()
        );
        console.log(
          "4326 to 3857",
          e.target.getView().getCenter(),
          transform.transforms(
            e.target.getView().getCenter(),
            "EPSG:4326",
            "EPSG:3857"
          )
        );
      });
      this.addLayers();
    },
    addLayers() {
      for (let i = 0; i < this.layersCfg[0].children.length; i++) {
        let v = this.layersCfg[0].children[i];
        if (v.type == "WMTS") {
          let tileLayer = new TileLayer({
            source: new XYZ({
              url: v.url
            })
          });
          tileLayer.setVisible(v.visible);
          this.map.set(v.real_name, tileLayer);
          this.map.addLayer(tileLayer);
        }
      }
    },
    checked(selectedArr, selected) {
      console.log("selectedArr,selected: ", selectedArr, selected);
      if (this.map.get(selected.real_name) instanceof TileLayer) {
        selected.visible
          ? this.map.get(selected.real_name).setVisible(true)
          : this.map.get(selected.real_name).setVisible(false);
      }
    },
    hideAllOtherLayer(layer){
        

    }
  },
  destroyed: {}
};
</script>
<style lang='scss' scoped>
.two-map {
  width: 100%;
  height: 100%;
  #map {
    width: 100%;
    height: 100%;
    position: relative;
    .tree {
      width: 150px;
      position: absolute;
      right: 30px;
      top: 20px;
      z-index: 2;
      background: #ffff;
    }
  }
}
</style>