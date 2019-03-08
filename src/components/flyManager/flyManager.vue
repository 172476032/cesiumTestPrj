<template>
  <div class="">

  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  mounted() {},
  computed: {},
  methods: {
    addGltf() {
      Viewer.scene.primitives.add(
        Cesium.Model.fromGltf({
          url: "../../assets/model/CesiumAir/Cesium_Air.glb"
          // modelMartix:Cesium.transforms.
        })
      );
    }
  },
  destroyed() {}
};
</script>

<style lang="scss">
</style>
