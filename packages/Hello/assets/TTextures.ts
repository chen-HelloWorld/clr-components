import {
  CanvasTexture,
  Material,
  MeshBasicMaterial,
  Texture,
  TextureLoader,
} from "three";
import { TCanvasEditor } from "./TCanvasEditor";
import pirturesConfigure from "../json/pictures.json";

const textureLoader: TextureLoader = new TextureLoader();
export const frameColorTexture = textureLoader.load(
  "/WoodFloor024_1K_Color.jpg"
);
export const frameRoughnessTexture = textureLoader.load(
  "/WoodFloor024_1K_Roughness.jpg"
);
export const frameDispTexture = textureLoader.load(
  "/WoodFloor024_1K_Displacement.jpg"
);
export const blueTexture = textureLoader.load("/blue.png");
//白色材质

//蓝色材质
// export const blueTexture = new MeshBasicMaterial({
//   color: "#4775ff",
// });
export const tipsTexture = new CanvasTexture(
  // .preview()
  new TCanvasEditor(1920, 1080).draw((ctx) => {
    ctx.fillStyle = "rgb(200, 200, 100)";
    ctx.beginPath();
    ctx.fillRect(0, 0, 1920, 1080);
    ctx.closePath();

    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "72px 微软雅黑";
    ctx.translate(960, 440);

    ctx.beginPath();
    ctx.fillText("作者：kieed", 0, 0);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillText("ID: 64226886", 0, 100);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillText("时间：2017年8月4日", 0, 200);
    ctx.closePath();
  }).canvas
);

export const tipsTextureList: CanvasTexture[] = [];

pirturesConfigure.forEach((elem) => {
  tipsTextureList.push(
    new CanvasTexture(
      // .preview()
      new TCanvasEditor(1920, 1080).draw((ctx) => {
        ctx.fillStyle = "rgb(200, 200, 100)";
        ctx.beginPath();
        ctx.fillRect(0, 0, 1920, 1080);
        ctx.closePath();

        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = "72px 微软雅黑";
        ctx.translate(960, 440);

        ctx.beginPath();
        ctx.fillText(`作者：${elem.author}`, 0, 0);
        ctx.closePath();

        ctx.beginPath();
        ctx.fillText(`ID: ${elem.ID}`, 0, 100);
        ctx.closePath();

        ctx.beginPath();
        ctx.fillText(`时间：${elem.date}`, 0, 200);
        ctx.closePath();

        ctx.beginPath();
        ctx.fillText(`类型：${elem.type}`, 0, 300);
        ctx.closePath();
      }).canvas
    )
  );
});
