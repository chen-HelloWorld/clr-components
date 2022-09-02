<template>
  <div>
    <el-row>
      <el-col :span="4">
        <el-menu>
          <MenuTree :menuData="ComponentList"></MenuTree>
        </el-menu>
      </el-col>

      <el-col :span="20">
        <router-view class="right-content"></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import ComponentList from "packages/list.json";
import { reactive } from "vue";
import MenuTree from "./components/MenuTree.vue";

const data = reactive({
  links: ComponentList.map((item) => ({
    path: `/components/${item.compName}`,
    name: item.compZhName,
    childrens: item.childrens,
  })),
});
</script>

<style lang="less" scoped>
html,
body {
  margin: 0;
  padding: 0;
}
.right-content {
  padding: 1rem 10rem 0rem 2rem;
}
// .my-kit-doc {
//   display: flex;
//   min-height: 100vh;
//   aside {
//     width: 200px;
//     padding: 15px;
//     border-right: 1px solid #ccc;
//     display: flex;
//     flex-direction: column;
//   }
//   main {
//     width: 100%;
//     flex: 1;
//     padding: 15px;
//   }
// }
</style>