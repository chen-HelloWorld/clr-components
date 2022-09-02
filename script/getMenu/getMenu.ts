export function setMenu(menuList) {
  console.log("menuList", menuList);
  console.log(menuList.map((menuList) => createMenu(menuList)));
  let menu =
    `<el-menu class="el-menu-vertical-demo">` +
    menuList.map((menuList) => createMenu(menuList)) +
    `</el-menu>`;

  return menu;
}

/**
 * @description 创建菜单
 * @param {Function} h createElement
 * @param {Object} menu 菜单项
 */
export function elMenuItem(menu) {
  // else if (menu.iconSvg) icon = <d2-icon-svg name={menu.iconSvg} />
  // else icon = <i class="fa fa-file-o" />
  console.log("elMenuItem", menu);
  return (
    `<el-menu-item><router-link :to="/components/CSSUnit">` +
    menu.compZhName +
    `</router-link></el-menu-item>`
  );
}

/**
 * @description 创建子菜单
 * @param {Function} h createElement
 * @param {Object} menu 菜单项
 */
export function elSubmenu(menu) {
  let icon = null;
  let elmenu;
  // else if (menu.iconSvg) icon = <d2-icon-svg slot="title" name={menu.iconSvg} />
  // else icon = <i slot="title" class="fa fa-folder-o" />
  console.log("elSubmenu", menu, menu != undefined);
  if (menu != undefined && menu.childrens != undefined) {
    elmenu =
      `<el-submenu
  ><router-link :to="/components/CSSUnit">` +
      menu.compZhName +
      `</router-link>` +
      menu.childrens.map((childrens) => createMenu(childrens)) +
      `</el-submenu>`;
  }
  return elmenu;
}

/**
 * @description 在组件中调用此方法渲染菜单项目
 * @param {Function} h createElement
 * @param {Object} menu 菜单项
 */
export function createMenu(menu) {
  console.log("createMenu", menu && menu.childrens === undefined);
  if (menu && menu.childrens === undefined) return elMenuItem.call(this, menu);
  return elSubmenu(menu);
}
