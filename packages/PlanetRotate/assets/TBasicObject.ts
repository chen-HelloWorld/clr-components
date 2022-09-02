import {
  Mesh,
  BoxBufferGeometry,
  MeshStandardMaterial,
  LineDashedMaterial,
  LineBasicMaterial,
  SphereBufferGeometry,
  BufferGeometry,
  EdgesGeometry,
  CircleGeometry,
  LineSegments,
  CylinderBufferGeometry,
  Object3D,
  ArcCurve,
  Geometry,
  Line,
  Points,
  PointsMaterial,
  Material,
  PlaneBufferGeometry,
  Color,
  Event,
} from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import {
  earthTexture,
  FireTexture,
  frameColorTexture,
  frameDispTexture,
  frameRoughnessTexture,
  MarsTexture,
  mercuryTexture,
  NeptuneTexture,
  PlutoTexture,
  saturnTexture,
} from "./TTextures";
export const basicObjectList: Object3D[] = [];
export const lineObjectList: Object3D[] = [];
// 地面
export const stage: Mesh = new Mesh(
  new BoxBufferGeometry(1000, 10, 400),
  new MeshStandardMaterial({
    color: "rgb(255, 255, 255，0.9)",
    roughness: 0,
  })
);

stage.castShadow = true;
stage.receiveShadow = true;
stage.position.y = -5;
// 墙面
export const wall: Mesh = new Mesh(
  new BoxBufferGeometry(1000, 200, 10),
  new MeshStandardMaterial({
    color: "white",
  })
);
wall.position.y = 100;
wall.position.z = -80;

wall.updateMatrix();
wall.updateMatrixWorld();
wall.addEventListener("click", () => {
  console.log("wall click");
});
//圆形1
export const sphere: Mesh = new Mesh(
  new SphereBufferGeometry(40, 64, 32),
  new MeshStandardMaterial({
    map: FireTexture,
    roughnessMap: FireTexture,
    // bumpMap: FireTexture, //凹凸贴图
  })
);

//圆形2
export const sphere2: Mesh = new Mesh(
  new SphereBufferGeometry(5, 64, 32),
  new MeshStandardMaterial({
    map: PlutoTexture,
    roughnessMap: PlutoTexture,
    bumpMap: PlutoTexture, //凹凸贴图
  })
);

//水星
export const sphere3: Mesh = new Mesh(
  new SphereBufferGeometry(7, 64, 32),
  new MeshStandardMaterial({
    map: mercuryTexture,
    roughnessMap: mercuryTexture,
    bumpMap: mercuryTexture, //凹凸贴图
  })
);
//海王星NeptuneTexture
export const sphere4: Mesh = new Mesh(
  new SphereBufferGeometry(10, 64, 32),
  new MeshStandardMaterial({
    map: NeptuneTexture,
    roughnessMap: NeptuneTexture,
    bumpMap: NeptuneTexture, //凹凸贴图
  })
);
//土星
export const sphere5: Mesh = new Mesh(
  new SphereBufferGeometry(15, 64, 32),
  new MeshStandardMaterial({
    map: saturnTexture,
    roughnessMap: saturnTexture,
    bumpMap: saturnTexture, //凹凸贴图
  })
);
//火星
export const Mars: Mesh = new Mesh(
  new SphereBufferGeometry(10, 64, 32),
  new MeshStandardMaterial({
    map: MarsTexture,
    roughnessMap: MarsTexture,
    bumpMap: MarsTexture, //凹凸贴图
  })
);
sphere2.position.set(50, 0, 50);
sphere3.position.set(100, 0, 100);
sphere4.position.set(70, 0, 70);
sphere5.position.set(200, 0, 60);
Mars.position.set(150, 0, 60);
basicObjectList.push(sphere, sphere2, sphere3, sphere4, sphere5, Mars);

//圆形轨迹1
export const line1 = new LineSegments(
  new EdgesGeometry(new CircleGeometry(100, 150)),
  new LineDashedMaterial({
    color: "white",
    scale: 1,
  })
);
line1.rotateX(-Math.PI / 2); //绕X轴旋转-90°
//圆形轨迹2
export const line2 = new LineSegments(
  new EdgesGeometry(new CircleGeometry(250, 150)),
  new LineDashedMaterial({
    color: "white",
    scale: 1,
  })
);
line2.rotateX(-Math.PI / 2); //绕X轴旋转-90°
//圆形轨迹3
export const line3 = new LineSegments(
  new EdgesGeometry(new CircleGeometry(150, 150)),
  new LineDashedMaterial({
    color: "white",
    scale: 1,
  })
);
line3.rotateX(-Math.PI / 2); //绕X轴旋转-90°
//圆形轨迹3
export const line4 = new LineSegments(
  new EdgesGeometry(new CircleGeometry(200, 150)),
  new LineDashedMaterial({
    color: "white",
    scale: 1,
  })
);
line4.rotateX(-Math.PI / 2); //绕X轴旋转-90°

lineObjectList.push(line1, line2, line3, line4);
