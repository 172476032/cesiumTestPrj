<template>
  <div class="tool-bar-wrap">
    <ButtonGroup shape="circle">
      <Button type="primary"
              @click="query">
        <Icon type="md-search" /> 查询
      </Button>
      <Button type="primary"
              @click="measureDis">
        <Icon type="ios-pulse" />
        测距
      </Button>
      <Button type="primary"
              @click="measureArea">
        <Icon type="ios-tennisball" />
        测面
      </Button>
      <Button type="primary"
              @click="baseLayerPick">
        <Icon type="ios-map" /> 底图
      </Button>
      <Button type="primary"
              @click="layerSelect">
        <Icon type="logo-buffer" />
        图层
      </Button>
    </ButtonGroup>
      <transition name="fade">
        <component :is="activePanel"></component>
      </transition>
  </div>
</template>

<script>
import layerManager from "../layersManager/layersPanel.vue";

export default {
  data() {
    return {
      activePanel: ""
    };
  },
  components: { layerManager },
  mounted() {},
  computed: {},
  methods: {
    query() {},
    measureDis() {},
    measureArea() {},
    baseLayerPick() {},
    layerSelect() {
      this.activePanel = "layerManager";
    }
  },
  destroyed() {}
};
</script>

<style lang="scss" scope>
.tool-bar-wrap {
  position: absolute;
  top: 50px;
  right: 120px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
