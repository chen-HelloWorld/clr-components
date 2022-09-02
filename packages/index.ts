/* eslint-disable */

/**
 * !--------- FBI WARNING ----------!
 *
 * 根据 /packages 目录下的组件所生成的模块导出，请勿手动修改
 */
import { App, Plugin } from "vue";

import { PlanetRotatePlugin } from "./PlanetRotate";
import { Material3dPlugin } from "./Material3d";
import { TextPlugin } from "./Text";
import { Div3DPlugin } from "./Div3D";
import { HelloPlugin } from "./Hello";
const MYKitPlugin: Plugin = {
  install(app: App) {
    Div3DPlugin.install?.(app);
    PlanetRotatePlugin.install?.(app);
    Material3dPlugin.install?.(app);
    TextPlugin.install?.(app);
    HelloPlugin.install?.(app);
  },
};

export default MYKitPlugin;
export * from "./Div3D";
export * from "./PlanetRotate";
export * from "./Material3d";
export * from "./Text";
export * from "./Hello";
