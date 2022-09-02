import { App, Plugin } from "vue";
import CSSUnit from "./src/index.vue";

//创建插件
export const CSSUnitPlugin: Plugin = {
  install(app: App) {
    app.component("my-cssunit", CSSUnit);
  },
};

export { CSSUnit };
