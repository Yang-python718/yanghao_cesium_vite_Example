import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import routes from "@/router/router";
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import store from "@/store/store.js";

import "cesium/Build/Cesium/Widgets/widgets.css"


const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);

app.use(router);
app.use(store);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.mount("#app");
