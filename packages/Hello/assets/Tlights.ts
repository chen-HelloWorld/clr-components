import { AmbientLight, Object3D, PointLight, SpotLight } from "three";
import { wall, stage } from "./TBasicObject";

export const LightsList: Object3D[] = [];

const ambientLight: AmbientLight = new AmbientLight("rgb(202,222,252)", 0.4);
//点光 (颜色，强度，最大范围，衰减)
export const pointLight: PointLight = new PointLight(
  "rgb(202,222,252)",
  1,
  100,
  0
);

pointLight.position.set(0, 0, 0);
//聚光  (颜色，强度，最大范围，弧度，衰减，衰减)
export const spotLight: SpotLight = new SpotLight(
  "rgb(191,207,255)",
  0.6,
  100,
  (Math.PI / 180) * 30,
  0,
  0
);

spotLight.castShadow = true;
spotLight.position.set(0, -30, 10);
spotLight.target = stage;

//聚光  (颜色，强度，最大范围，弧度，衰减，衰减)
export const spotLight2: SpotLight = new SpotLight(
  "rgb(191,207,255)",
  0.7,
  100,
  (Math.PI / 180) * 30,
  0,
  0
);

spotLight2.castShadow = true;
spotLight2.position.set(0, 140, 130);
spotLight2.target = stage;

LightsList.push(ambientLight, spotLight, spotLight2, pointLight);
