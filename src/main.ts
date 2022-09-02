import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./assets/markdown.css";

import MyKit from "../packages";
import Preview from "./components/Preview.vue";

const app = createApp(App);
//定义全局组件
app.component("Preview", Preview);
app.use(MyKit).use(router).use(ElementPlus).mount("#app");
