/* eslint-disable prettier/prettier */

/**
 * !--------- FBI WARNING ----------!
 *
 * 根据 /packages 目录下的组件所生成的组件类侧边导航栏配置，请勿手动修改
 */

import { createRouter, createWebHashHistory, RouterOptions } from "vue-router";

const routes = [
  {
    title: "日常组件",
    name: "NomalComponents",
    path: "/components/NomalComponents",
    component: () => import("packages/NomalComponents/docs/README.md"),
  },
  {
    title: "Button",
    name: "Button",
    path: "/components/Button",
    component: () => import("packages/Button/docs/README.md"),
  },
  {
    title: "css",
    name: "css",
    path: "/components/css",
    component: () => import("packages/css/docs/README.md"),
  },
  {
    title: "Div3D",
    name: "Div3D",
    path: "/components/Div3D",
    component: () => import("packages/Div3D/docs/README.md"),
  },
  {
    title: "3d建模",
    name: "Components3D",
    path: "/components/Components3D",
    component: () => import("packages/Components3D/docs/README.md"),
  },
  {
    title: "Hello",
    name: "Hello",
    path: "/components/Hello",
    component: () => import("packages/Hello/docs/README.md"),
  },
  {
    title: "行星旋转",
    name: "PlanetRotate",
    path: "/components/PlanetRotate",
    component: () => import("packages/PlanetRotate/docs/README.md"),
  },
  {
    title: "模型材料",
    name: "Material3d",
    path: "/components/Material3d",
    component: () => import("packages/Material3d/docs/README.md"),
  },
  {
    title: "测试",
    name: "Text",
    path: "/components/Text",
    component: () => import("packages/Text/docs/README.md"),
  },
];

const routerConfig = {
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to: any, from: any) {
    if (to.path !== from.path) {
      return { top: 0 };
    }
  },
};

const router = createRouter(routerConfig as RouterOptions);

export default router;
