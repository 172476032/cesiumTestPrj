<template>
  <div class="layers-manager-wrap">
    <Tree :data="layers"
          multiple
          @on-check-change="layerSelected"
          show-checkbox></Tree>
  </div>
</template>

<script>
const layers = require("./layercfg.json");

export default {
  name: "layers-manager",
  data() {
    return {
      layers: layers
    };
  },
  components: {},
  mounted() {},

  computed: {},
  methods: {
    layerSelected(checkeds, checked) {
      console.log("checkeds,checked: ", checkeds, checked);
    }
  },
  destroyed() {}
};
</script>

<style lang="scss" scope>
.layers-manager-wrap {
  position: absolute;
  right: 0px;
  top: 35px;
  background: #ffff;
  .ivu-tree li ul {
    // padding: 0px;
  }
}
</style>
