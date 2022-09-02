import { basicObjectList } from "./TBasicObject";
import { groupPromise } from "./TGroup";
import { Clock, Vector3 } from "three";
//围绕旋转
export function revolution(mesh: any, degree: any, speed: any, radius: any) {
  function render() {
    //圆的弧长等于l=⊙r（r为半径，⊙为圆心角）
    //这里将绕着圆的半径趋近于看成走直线运动，所以degree就是走过的弧长
    const d1 = (++degree * speed * Math.PI) / 180;
    // basicObjectList[0].geometry.rotation.set(d1, 0, 0);
    const x = Math.cos(d1) * radius;
    const z = Math.sin(d1) * radius;
    mesh.position.set(x, 0, z);
    // basicObjectList[1].geometry.rotateY(0.01); //每次绕y轴旋转0.01弧度
    requestAnimationFrame(render); //请求再次执行渲染函数render
  }
  render();
}
//自转
export function rotation(mesh: any, radion: any, axis: any) {
  function render() {
    if (axis === "X") {
      mesh.rotateX(radion); //每次绕y轴旋转0.01弧度
    } else if (axis == "Y") {
      mesh.rotateY(radion); //每次绕y轴旋转0.01弧度
    } else {
      mesh.rotate(radion); //每次绕y轴旋转0.01弧度
    }

    requestAnimationFrame(render); //请求再次执行渲染函数render
  }
  render();
}
export function render1() {
  let degree = 0;
  let speed = 0.3;
  let speed2 = 0.5;
  function render() {
    const radius1 = 100;
    //圆的弧长等于l=⊙r（r为半径，⊙为圆心角）
    //这里将绕着圆的半径趋近于看成走直线运动，所以degree就是走过的弧长
    const d1 = (++degree * speed * Math.PI) / 180;
    // basicObjectList[0].geometry.rotation.set(d1, 0, 0);
    const x = Math.cos(d1) * radius1;
    const z = Math.sin(d1) * radius1;
    basicObjectList[1].position.set(x, 0, z);
    basicObjectList[3].position.set(
      Math.cos((++degree * speed2 * Math.PI) / 180) * radius1,
      0,
      Math.sin((++degree * speed2 * Math.PI) / 180) * radius1
    );
    // basicObjectList[1].geometry.rotateY(0.01); //每次绕y轴旋转0.01弧度
    requestAnimationFrame(render); //请求再次执行渲染函数render
  }
  render();
}
export function render2() {
  let degree = 0;
  let degree2 = 3;
  let speed = 0.6;
  let speed2 = 1.2;
  const radius1 = 250;
  const radius2 = 230;
  function render() {
    //圆的弧长等于l=⊙r（r为半径，⊙为圆心角）
    //这里将绕着圆的半径趋近于看成走直线运动，所以degree就是走过的弧长
    const d1 = (++degree * speed * Math.PI) / 180;
    const x = Math.cos(d1) * radius1;
    const z = Math.sin(d1) * radius1;
    basicObjectList[2].position.set(x, 0, z);
    const d2 = (++degree2 * speed2 * Math.PI) / 180;
    const x2 = Math.cos(d2) * 230;
    const z2 = Math.sin(d2) * 230;
    basicObjectList[4].position.set(x2, 0, z2);
    // basicObjectList[4].position.set(x, 0, z);
    // basicObjectList[1].geometry.rotateY(0.01); //每次绕y轴旋转0.01弧度
    requestAnimationFrame(render); //请求再次执行渲染函数render
  }
  render();
}
export function text(moon: any, earth: any) {
  let center = new Vector3();
  console.log("earth", earth.geometry.boundingBox.getCenter(center));
  console.log("center", center.x, center.y, center.z);
  const clock = new Clock();
  function render() {
    //自转
    var axis = new Vector3(0, 1, 0);
    earth.rotateOnAxis(axis, Math.PI / 100);
    requestAnimationFrame(render); //请求再次执行渲染函数render
  }
  render();
}
