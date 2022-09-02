<template>
  <div class="wrapDiv">
    <div class="div1">
      <img src="@/assets/img/start1.jpeg" alt="" />
    </div>
    <div class="div2">
      <img src="@/assets/img/start2.jpeg" alt="" />
    </div>
    <div class="div3">
      <img src="@/assets/img/start3.jpeg" alt="" />
    </div>
    <div class="div4">
      <img src="@/assets/img/start4.jpeg" alt="" />
    </div>
    <div class="div5">
      <img src="@/assets/img/start5.jpeg" alt="" />
    </div>
    <div class="div6">
      <img src="@/assets/img/start6.jpeg" alt="" />
    </div>
  </div>
</template>

<script setup>
</script>
<style scoped>
* {
  margin: 0;
}
body {
  /* perspective视距添加给body */
  perspective: 400px;
}
.wrapDiv {
  width: 100px;
  height: 100px;
  /* margin: 350px auto; */
  transform-style: preserve-3d; /**给子元素增加3d效果！！子元素 */
  /* transform: rotateX(45deg) rotateZ(45deg); */
  animation: r3d 15s infinite linear;
}
img {
  /* 设置图片为不是基线对齐的方式 */
  /* 
  vertical-align: top; */
  width: 100px;
  height: 100px;
}
.wrapDiv > div {
  /**> 代表第一代子元素，也就是wrapDiv下的第一个div元素 */
  width: 100px;
  height: 100px;
  /* 开启子元素的绝对定位 */
  position: absolute;
  opacity: 0.7;
}
/**旋转图片位置 */
.div1 {
  transform: rotateY(-90deg) translateZ(50px);
}
.div2 {
  transform: rotateY(90deg) translateZ(50px);
}
.div3 {
  transform: rotateX(-90deg) translateZ(50px);
}
.div4 {
  transform: rotateX(90deg) translateZ(50px);
}
.div5 {
  transform: rotateX(0deg) translateZ(50px);
}
.div6 {
  transform: rotateY(180deg) translateZ(50px);
}
@keyframes r3d {
  from {
    transform: rotateX(0) rotateZ(0);
  }
  /**1turn 就是360deg */
  to {
    transform: rotateX(1turn) rotateZ(1turn);
  }
}
</style>