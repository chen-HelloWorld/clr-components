import { App, Plugin } from 'vue';
import Material3d from './src/index.vue';

export const Material3dPlugin: Plugin = {
  install(app: App) {
    app.component('my-material3d', Material3d);
  },
};

export {
  Material3d,
};
