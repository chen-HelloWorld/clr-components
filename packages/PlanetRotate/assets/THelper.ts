import {
  AxesHelper,
  GridHelper,
  Object3D,
  PointLightHelper,
  SpotLightHelper,
} from "three";

import { pointLight, spotLight, spotLight2 } from "./Tlights";

export const helperList: Object3D[] = [];
//坐标系
const axesHelper: AxesHelper = new AxesHelper(500);
axesHelper.raycast = () => {};
//网格
const gridHelper: GridHelper = new GridHelper(
  500,
  40,
  "rgb(200, 200, 200)",
  "rgb(100, 100, 100)"
);
gridHelper.raycast = () => {};
//点光 灯光辅助
const pointLightHelper: PointLightHelper = new PointLightHelper(
  pointLight,
  5,
  "rgb(0,0,0)"
);
pointLightHelper.raycast = () => {};

const spotLightHelper: SpotLightHelper = new SpotLightHelper(spotLight, 5);
spotLightHelper.raycast = () => {};

const spotLightHelper2: SpotLightHelper = new SpotLightHelper(spotLight2, 10);
spotLightHelper2.raycast = () => {};

//弧线
// const spotLightHelper: SpotLightHelper = new SpotLightHelper(spotLight, spotLight.color)
// spotLightHelper.raycast = () => {}

helperList.push(axesHelper);
