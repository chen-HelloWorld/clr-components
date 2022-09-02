import {
  Group,
  Material,
  Mesh,
  MeshBasicMaterial,
  MeshLambertMaterial,
  MeshPhongMaterial,
  MeshStandardMaterial,
} from "three";
import { DefaultLoaderManager } from "./TLoaderManager";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import {
  blueTexture,
  frameColorTexture,
  frameDispTexture,
  frameRoughnessTexture,
} from "./TTextures";
//读取glb模型
const gltfloader: GLTFLoader = new GLTFLoader();
//export const gltframe = gltfloader.loadAsync("../src/assets/glbmodule/4.glb"); //异步读取

const objLoader: OBJLoader = new OBJLoader();
const mtlLoader: MTLLoader = new MTLLoader();
// export const frameMaterial: MeshStandardMaterial = new MeshStandardMaterial({
//   map: frameColorTexture,
//   roughnessMap: frameRoughnessTexture,
//   bumpMap: frameDispTexture, //凹凸贴图
// });
//方法一   模型加载是异步的，所以一定要用异步的API
export const gltFramePromise = new Promise<Group>((resolve, reject) => {
  gltfloader
    .loadAsync("../packages/Hello/glbmodule/4.glb")
    .then((group: { scene: any }) => {
      const frame = group.scene;
      //定义材质
      frame.children.forEach((element: any, index: number) => {
        const module: Mesh = element as Mesh;
        (module.material as Material).dispose();
        if (index == 1) {
          module.material = new MeshPhongMaterial({
            color: "#4e7efe",
            shininess: 100,
            specular: "#66a0ea",
          });
        } else if ([4].includes(index)) {
          module.material = new MeshPhongMaterial({
            color: "#eeeeee",
            shininess: 150,
            specular: "#66a0ea",
          });
          module.material.transparent = true;
          module.material.opacity = 0.9;
        } else if (index === 3) {
          module.material = new MeshPhongMaterial({
            color: "#eeeeee",
            shininess: 150,
            specular: "#66a0ea",
          });
          module.material.transparent = true;
          module.material.opacity = 0.3;
        } else {
          module.material = new MeshPhongMaterial({
            color: "#b9cbf0",
            shininess: 150,
            specular: "#66a0ea",
          });
          module.material.transparent = true;
          module.material.opacity = 0.8;
        }
      });
      resolve(frame);
    })
    .catch((err) => {
      reject(err);
    });
});
export const framePromise = new Promise<Mesh>((resolve, reject) => {
  DefaultLoaderManager.addEventListener("loaded", (event) => {
    const scourceMap = event.sourceMap;
    const group = scourceMap["../packages/Hello/glbmodule/frame.obj"];
    const frame: Mesh = group.children[0] as Mesh;
    (frame.material as Material).dispose();

    frame.material = new MeshStandardMaterial({
      map: scourceMap["../packages/Hello/glbmodule/WoodFloor024_1K_Color.jpg"],
      roughnessMap:
        scourceMap["../packages/Hello/glbmodule/WoodFloor024_1K_Roughness.jpg"],
      bumpMap:
        scourceMap[
          "../packages/Hello/glbmodule/WoodFloor024_1K_Displacement.jpg"
        ],
    });

    frame.rotation.y = (Math.PI / 180) * -90;
    frame.scale.set(2, 2, 2);

    resolve(frame);
  });
});
//方法二，async + await
// export const getFrame = async function (): Promise<Mesh | null> {
//   const group = await objLoader.loadAsync("/frame.obj");

//   if (group instanceof Group) {
//     const frame: Mesh = group.children[0] as Mesh;
//     (frame.material as Material).dispose();

//     frame.material = new MeshStandardMaterial({
//       map: frameColorTexture,
//       roughnessMap: frameRoughnessTexture,
//       bumpMap: frameDispTexture,
//     });

//     frame.position.y = 45;
//     frame.position.z = -1;
//     frame.rotation.y = (Math.PI / 180) * -90;
//     frame.scale.set(2, 2, 2);

//     return frame;
//   } else {
//     console.error(group);
//     return null;
//   }
// };
