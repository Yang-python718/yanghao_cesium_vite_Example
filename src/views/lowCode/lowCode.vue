
<script setup>
import * as Cesium from "cesium";
import { ref } from "vue";

import Marks from "./components/marks.vue";

const { viewer } = window;
</script>
<template>
  <div class="set-box">
    <Marks></Marks>
  </div>
</template>
<style scoped lang="less">
.set-box {
  position: absolute;
  z-index: 100;
  width: 400px;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
}
</style>
