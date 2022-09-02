import { App, Plugin } from "vue";
import Div3D from "./src/index.vue";

//创建插件
export const Div3DPlugin: Plugin = {
  install(app: App) {
    app.component("my-div3d", Div3D);
  },
};

export { Div3D };
