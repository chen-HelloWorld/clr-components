<template>
  <div class="three-canvas" ref="threeTarget"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from "vue";
import { TEngine } from "../assets/TEngine";
import { message } from "ant-design-vue";
import { Material, Mesh, Object3D } from "three";
import { DefaultLoaderManager } from "../assets/TLoaderManager";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { basicObjectList } from "../assets/TBasicObject";
import { LightsList } from "../assets/Tlights";
import { helperList } from "../assets/THelper";

import { codeModelList } from "../assets/TCodeModel";
// import { framePromise } from './assets/ts/TLoadModel'
import { groupPromise, groupListPromise } from "../assets/TGroup";
import { frameMaterial, gltframe, gltFramePromise } from "../assets/TLoadModel";

const key = "tips";
const tipsBox = reactive(DefaultLoaderManager.tipsBox);
DefaultLoaderManager.tipsBox = tipsBox;
const tips = message.loading({
  content: () =>
    `正在加载资源：${Math.round(
      ((tipsBox.success + tipsBox.error) / tipsBox.total) * 100
    )}%`,
  key,
  duration: 100,
});
DefaultLoaderManager.addEventListener("loaded", () => {
  tips();
});

export default defineComponent({
  setup() {
    const threeTarget = ref(null);
    onMounted(() => {
      const gltObjfList: Object3D[] = [];
      const TE = new TEngine(threeTarget.value!);
      //辅助
      TE.addObject(...LightsList);
      TE.addObject(...helperList);
      //  TE.addObject(...basicObjectList);
      //读取模型
      gltFramePromise.then((frame) => {
        //动画
        function render() {
          frame.children[7].rotateY(0.01); //每次绕y轴旋转0.01弧度
          requestAnimationFrame(render); //请求再次执行渲染函数render
        }
        render();
        TE.addObject(frame);
      });
    });
    return {
      threeTarget,
    };
  },
});
</script>

<style>
.three-canvas {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
