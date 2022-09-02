<template>
  <template v-for="menu in menuData">
    <el-sub-menu
      :key="menu.compZhName"
      :index="menu.compZhName"
      v-if="menu.childrens"
    >
      <template #title>
        <span>{{ menu.compZhName }}</span>
      </template>
      <MenuTree :menuData="menu.childrens"></MenuTree>
    </el-sub-menu>
    <router-link
      :key="menu.compZhName"
      v-else
      class="menu-content"
      style="height: 10px"
      :to="`/components/${menu.compName}`"
    >
      <el-menu-item :key="menu.compZhName" :index="menu.compZhName">
        <span> {{ menu.compZhName }}</span>
      </el-menu-item>
    </router-link>
  </template>
</template>
<script>
export default {
  props: ["menuData"],
  name: "MenuTree",
};
</script>
<style scoped>
a {
  padding: 0px;
  color: rgb(133, 144, 166);
}
.clr-menu-item {
  color: rgb(133, 144, 166);
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  pointer-events: none;
  word-break: break-all;
  width: calc(100% - 22px);
}

.menu-content {
  color: rgb(133, 144, 166);
  font-size: 12;
  font-weight: 400;
}
.clr-menu-item {
  height: 2rem;
  line-height: 2rem;
}
:deep(.clr-menu-item .el-sub-menu__title) {
  height: 2rem;
  line-height: 2rem;
  color: rgb(133, 144, 166);
}
</style>