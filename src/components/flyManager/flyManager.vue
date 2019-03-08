<template>
  <div class="">
    <button @click="addGltf">飞行</button>
  </div>
</template>

<script>
import Cesium from "cesium/Cesium";

export default {
  data() {
    return {
      position: null,
      hpRoll: null,
      hpRange: null,
      speed: 10,
      speedVctor: null,
      deltaRadians: null,
      fixedFrameTransform: null
    };
  },
  components: {},
  mounted() {
    setTimeout(() => {
      console.log("飞行管理");
      this.position = Cesium.Cartesian3.fromDegrees(
        -123.0744619,
        44.0503706,
        5000.0
      );
      this.hpRoll = new Cesium.HeadingPitchRoll();
      this.hpRange = new Cesium.HeadingPitchRange();
      this.speedVctor = new Cesium.Cartesian3();
      this.fixedFrameTransform = Cesium.Transforms.localFrameToFixedFrameGenerator(
        "north",
        "west"
      );
    }, 2000);
  },
  computed: {},
  methods: {
    addGltf() {
      let gltf = Cesium.Model.fromGltf({
        url: "../../../static/model/zhuzi.gltf",
        modelMatrix: Cesium.Transforms.headingPitchRollToFixedFrame(
          this.position,
          this.hpRoll,
          Cesium.Ellipsoid.WGS84,
          this.fixedFrameTransform
        ),
        minimumPixelSize: 128
      });
      console.log("gltf: ", gltf);
      let promise = Viewer.scene.primitives.add(gltf);
      Cesium.when(promise.readyPromise).then(model => {
        console.log("model: ", model);
        //模型活动动画设置
        model.activeAnimations.addAll({
          loop: Cesium.ModelAnimationLoop.REPEAT,
          multiplier: 0.5
        });

        //相机定位到模型
        this.hpRange.heading = Cesium.Math.toRadians(230);
        this.hpRange.pitch = Cesium.Math.toRadians(-20);
        this.hpRange.range =
          2 *
          50 *
          Math.max(model.boundingSphere, Viewer.scene.camera.frustum.near);
        Viewer.scene.camera.lookAt(this.positon, this.hpRange);
      });
    }
  },
  destroyed() {}
};
</script>

<style lang="scss">
</style>
