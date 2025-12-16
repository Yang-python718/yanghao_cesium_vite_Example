
<script setup>
import * as Cesium from "cesium";
import { onMounted, onUnmounted, ref } from "vue";
import MeasureVolume from "@/utils/cesiumCtrl/MeasureVolume.js";

const { viewer } = window;

// 设置相机位置
viewer.camera.setView({
  destination: Cesium.Cartesian3.fromDegrees(115.15, 27.15, 50000.0),
});

onMounted(async () => {
  // 加载默认地形
  viewer.terrainProvider = await Cesium.createWorldTerrainAsync({
    requestVertexNormals: true, // 请求法线以实现光照效果
  });
});

// 初始化挖填方量测量类
const measureVolume = new MeasureVolume(viewer);

// 高度数据
const planeHeight = ref("");
const wallMinHeight = ref("");
const wallMaxHeight = ref("");

// 开始绘制
const startDraw = () => {
  // 挖填方返回的数据
  measureVolume.initMeasureVolume((data) => {
    planeHeight.value = data.planeHeight.toFixed(1);
    wallMinHeight.value = data.wallMinHeight.toFixed(1);
    wallMaxHeight.value = data.wallMaxHeight.toFixed(1);
  });
};

// 清除绘制
const clearDraw = () => {
  measureVolume.clear();
};

// 调整参数
const adjustParameters = () => {
  measureVolume.setParameters(
    {
      planeHeight: Number(planeHeight.value), // 基准面高
      wallMinHeight: Number(wallMinHeight.value), // 围墙底高
      wallMaxHeight: Number(wallMaxHeight.value), // 围墙顶高
    },
    (data) => {
      console.log(data);
    }
  );
};

// 组件卸载时清除
onUnmounted(() => {
  clearDraw();
});
</script>

<template>
  <operate-box>
    <div class="menu-container">
      <p>
        <el-button type="primary" @click="startDraw">绘制</el-button>
        <el-button type="primary" @click="clearDraw">清除</el-button>
        <el-button type="primary" @click="adjustParameters">调整</el-button>
      </p>
      <p>
        基准面高
        <el-input
          v-model="planeHeight"
          size="small"
          style="width: 120px"
        /><br />
        围墙底高
        <el-input
          v-model="wallMinHeight"
          size="small"
          style="width: 120px"
        /><br />
        围墙顶高
        <el-input
          v-model="wallMaxHeight"
          size="small"
          style="width: 120px"
        />(墙显示效果，与结算结果无关)
      </p>
      <p class="description">
        1. 挖方量: 计算"基准面"到地表之间的凸出部分进行挖掉的体积。 <br />
        2. 填方量：计算"基准面"与"墙底部"之间的缺少部分进行填平的体积。
      </p>
    </div>
  </operate-box>
</template>

<style scoped lang="less">
.menu-container {
  padding: 10px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 3px;
  border: 1px solid rgba(128, 128, 128, 0.5);
  color: #ffffff;
  box-shadow: 0 3px 14px rgba(128, 128, 128, 0.5);
  min-width: 300px;
}

.description {
  font-size: 12px;
  margin-top: 10px;
}
</style>
