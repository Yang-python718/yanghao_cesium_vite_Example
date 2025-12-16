
<script setup>
import FogEffect from "@/utils/cesiumCtrl/fog.js";

import { onUnmounted } from "vue";
import { Color } from "cesium";

const { viewer } = window;
const instance = new FogEffect(viewer, {
  visibility: 0.2,
  color: new Color(0.8, 0.8, 0.8, 0.3),
});

const hide = () => {
  instance.show(false);
};
const start = () => {
  instance.show(true);
};
onUnmounted(() => {
  instance.destroy();
});
</script>
<template>
  <div class="container">
    <el-button type="primary" @click="start">开始</el-button>
    <el-button type="primary" @click="hide">停止</el-button>
  </div>
</template>

<style lang="less" scoped>
.container {
  position: absolute;
  z-index: 100;
}
</style>
