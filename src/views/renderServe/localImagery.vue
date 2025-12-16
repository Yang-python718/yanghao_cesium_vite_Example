<script setup>
import { onMounted, ref, onUnmounted } from "vue";
import * as Cesium from "cesium";

const { viewer } = window;

const imageryProvider = new Cesium.UrlTemplateImageryProvider({
  url: new Cesium.Resource({
    url: "http://127.0.0.1:7789/static/map/{z}/{x}/{reverseY}.jpg",
    // tilingScheme: new Cesium.GeographicTilingScheme(),

    tilingScheme: new Cesium.WebMercatorTilingScheme(),
  }),
});
// viewer.scene3DOnly = true;
const imageLayer = viewer.imageryLayers.addImageryProvider(imageryProvider);

viewer.camera.setView({
  // 从以度为单位的经度和纬度值返回笛卡尔3位置。
  destination: Cesium.Cartesian3.fromDegrees(120.36, 36.09, 100000),
});
onUnmounted(() => {
  const layers = viewer.imageryLayers;
  const index = layers.indexOf(imageLayer);
  if (index > -1) {
    const res = layers.remove(layers.get(index));
    console.log("--删除图层--", res);
  }
});
</script>
<template>
  <div></div>
</template>
<style lang="less" scoped></style>
