import {
  Group,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PlaneBufferGeometry,
  Sprite,
  SpriteMaterial,
  SphereBufferGeometry,
} from "three";
import {
  earthTexture,
  moonTexture,
  tipsTexture,
  tipsTextureList,
} from "./TTextures";
import { framePromise } from "./TLoadModel";
import pirturesConfigure from "../json/pictures.json";
import { DefaultLoaderManager } from "./TLoaderManager";

export const groupPromise = new Promise<Group>((resolve, reject) => {
  DefaultLoaderManager.addEventListener("loaded", (event) => {
    const scourceMap = event.sourceMap;
    const group = new Group();
    //地球
    const sphereEarth: Mesh = new Mesh(
      new SphereBufferGeometry(10, 64, 32),
      new MeshStandardMaterial({
        map: earthTexture,
        roughnessMap: earthTexture,
      })
    );
    //月球
    const sphereMoon: Mesh = new Mesh(
      new SphereBufferGeometry(10, 64, 32),
      new MeshStandardMaterial({
        map: moonTexture,
        roughnessMap: moonTexture,
        bumpMap: moonTexture,
      })
    );
    sphereEarth.position.set(100, 0, 100);
    sphereMoon.position.set(50, 0, 50);

    group.add(sphereEarth);

    group.add(sphereMoon);
    resolve(group);
  });
});

export const groupListPromise = new Promise<Group[]>((resolve, reject) => {
  DefaultLoaderManager.addEventListener("loaded", (event) => {
    const scourceMap = event.sourceMap;
    framePromise
      .then((frame) => {
        const groupList: Group[] = [];
        const spacing = 200;
        const distance = ((pirturesConfigure.length - 1) * spacing) / 2;
        const pictureGeometry = new PlaneBufferGeometry(192, 108);
        const tipsGeometry = new PlaneBufferGeometry(16, 9);

        pirturesConfigure.forEach((elem, i, arr) => {
          const pictureTexture = scourceMap[elem.url];
          const tipsTexture = tipsTextureList[i];
          const group = new Group();

          // 图片
          const picture: Mesh = new Mesh(
            pictureGeometry,
            new MeshStandardMaterial({
              map: pictureTexture,
            })
          );

          picture.scale.set(0.3, 0.3, 0.3);

          group.add(picture);

          // 标签
          const tips: Mesh = new Mesh(
            tipsGeometry,
            new MeshStandardMaterial({
              map: tipsTexture,
            })
          );

          tips.position.set(0, -30, 0);

          group.add(tips);

          // 相框
          const newFrame = frame.clone();

          group.add(newFrame);

          group.position.y = 140;
          group.position.z = -70;
          group.position.x = i * spacing - distance;

          group.scale.set(2, 2, 2);

          groupList.push(group);
        });

        resolve(groupList);
      })
      .catch((err) => {
        reject(err);
      });
  });
});
