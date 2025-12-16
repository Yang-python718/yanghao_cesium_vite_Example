<!--引自开源代码： https://jiawanlong.github.io/Cesium-Examples/examples/cesiumEx/editor.html#s3m -->
<template>
  <div></div>
</template>
<script setup>
import { ref } from "vue";
import * as Cesium from "cesium";
import "@/components/SuperMap3D/SuperMap3D.js";

const { viewer } = window;

let scenes =
  "https://www.supermapol.com/realspace/services/3D-CBD/rest/realspace";
viewer.scene.open(scenes);
</script>
<style lang="less" scoped></style>
