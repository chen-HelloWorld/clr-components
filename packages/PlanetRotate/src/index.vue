<template>
  <div class="three-canvas" ref="threeTarget"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from "vue";
import { TEngine } from "../assets/TEngine";
import { message } from "ant-design-vue";
import { Material, Mesh, Vector3, Object3D, Clock } from "three";
import { DefaultLoaderManager } from "../assets/TLoaderManager";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { basicObjectList, lineObjectList } from "../assets/TBasicObject";
import { LightsList } from "../assets/Tlights";
import { helperList } from "../assets/THelper";
import {
  render1,
  render2,
  revolution,
  rotation,
  text,
} from "../assets/TActive";
import { codeModelList } from "../assets/TCodeModel";
// import { framePromise } from './assets/ts/TLoadModel'
import { groupPromise, groupListPromise } from "../assets/TGroup";
import { frameMaterial, gltframe, gltFramePromise } from "../assets/TLoadModel";
import { groupPromise } from "../assets/TGroup";
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
      // render1();
      // render2();
      revolution(basicObjectList[1], 200, 0.3, 200);
      revolution(basicObjectList[2], 500, 0.4, 100);
      revolution(basicObjectList[3], 800, 0.2, 150);
      revolution(basicObjectList[4], 2, 0.2, 250);
      revolution(basicObjectList[5], 100, 0.4, 200);
      rotation(basicObjectList[4], 0.01, "Y");
      rotation(basicObjectList[5], 0.02, "Y");
      TE.addObject(...LightsList);
      TE.addObject(...helperList);
      TE.addObject(...basicObjectList);
      TE.addObject(...lineObjectList);

      groupPromise.then((group) => {
        console.log("group", group);
        text(group.children[1], group.children[0]);
        // group.children.forEach((element: any, index: number) => {
        //   // if (index === 0) {
        //   //   //  地球自转
        //   //   // rotation(element, 0.01, "Y");
        //   //   // revolution(element, 0.4, 0.3, 100 - 10 * index);
        //   //   //rotateOnAxis 在局部空间中绕着该物体的轴来旋转一个物体
        //   //   var axis = new Vector3(0, 0, 0);
        //   //   element.rotateOnAxis(axis, 0.03);
        //   // }
        //   // //月球围着地球公转
        //   // else if (index === 1) {
        //   // }
        // });
        TE.addObject(...group.children);
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
