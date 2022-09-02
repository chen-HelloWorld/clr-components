import { App, Plugin } from 'vue';
import PlanetRotate from './src/index.vue';

export const PlanetRotatePlugin: Plugin = {
  install(app: App) {
    app.component('my-planet-rotate', PlanetRotate);
  },
};

export {
  PlanetRotate,
};
