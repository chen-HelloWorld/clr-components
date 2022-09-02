import { App, Plugin } from "vue";
import Button from "./src/index.vue";

//创建插件
export const ButtonPlugin: Plugin = {
  install(app: App) {
    app.component("my-button", Button);
  },
};

export { Button };
