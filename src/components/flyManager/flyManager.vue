<template>
  <div class="">
    <button @click="addGltf">飞行</button>
    <button @click="add3dtiles">3dtiles</button>

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
    // setTimeout(() => {
    //   console.log("飞行管理");
    //   this.position = Cesium.Cartesian3.fromDegrees(
    //     -123.0744619,
    //     44.0503706,
    //     5000.0
    //   );
    //   this.hpRoll = new Cesium.HeadingPitchRoll();
    //   this.hpRange = new Cesium.HeadingPitchRange();
    //   this.speedVctor = new Cesium.Cartesian3();
    //   this.fixedFrameTransform = Cesium.Transforms.localFrameToFixedFrameGenerator(
    //     "north",
    //     "west"
    //   );
    // }, 2000);
  },
  computed: {},
  methods: {
    add3dtiles() {
      console.log("加载3dtiles");
      let tileset = new Cesium.Cesium3DTileset({
        url: "/3dtiles/tree/tileset.json"
      });
      Viewer.scene.primitives.add(tileset);

      tileset.readyPromise.then(argument => {
        alert(1);
        let longitude = 116.39122445882526;
        let latitude = 39.906918134959426;
        let height = 2.914091294264452;
        let heading = 0;

        var mat = Cesium.Transforms.eastNorthUpToFixedFrame(
          Cesium.Cartesian3.fromDegrees(113, 26)
        );
        var rotationX = Cesium.Matrix4.fromRotationTranslation(
          Cesium.Matrix3.fromRotationZ(Cesium.Math.toRadians(heading))
        );
        Cesium.Matrix4.multiply(mat, rotationX, mat);
        tileset._root.transform = mat;
        Viewer.camera.flyTo({
          destination: Cesium.Cartesian3.fromDegrees(
            longitude,
            latitude,
            height + 1000
          )
        });
      });
    },
    addGltf() {
      const model = Viewer.scene.primitives.add(
        Cesium.Model.fromGltf({
          url: "../../../static/model/zhuzi.gltf"
        })
      );

      model.readyPromise
        .then(function(model) {
          console.log("model", model);
        })
        .otherwise(err => {
          console.log("error", err);
        });
    },
    addGltf1() {
      let promise = Viewer.scene.primitives.add(
        Cesium.Model.fromGltf({
          url: "../../../static/model/zhuzi.gltf"
          // modelMatrix: Cesium.Transforms.headingPitchRollToFixedFrame(
          //   this.position,
          //   this.hpRoll,
          //   Cesium.Ellipsoid.WGS84,
          //   this.fixedFrameTransform
          // ),
          // minimumPixelSize: 128
        })
      );
      promise.readyPromise
        .then(function(model) {
          console.log("model: ", model);
          //模型活动动画设置
          // model.activeAnimations.addAll({
          //   loop: Cesium.ModelAnimationLoop.REPEAT,
          //   multiplier: 0.5
          // });

          // //相机定位到模型
          // this.hpRange.heading = Cesium.Math.toRadians(230);
          // this.hpRange.pitch = Cesium.Math.toRadians(-20);
          // this.hpRange.range =
          //   2 *
          //   50 *
          //   Math.max(model.boundingSphere, Viewer.scene.camera.frustum.near);
          // Viewer.scene.camera.lookAt(this.positon, this.hpRange);
        })
        .otherwise(error => {
          console.log("error: ", error);
        });
    }
  },
  destroyed() {}
};
</script>

<style lang="scss">
</style>
