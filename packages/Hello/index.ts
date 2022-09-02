import { App, Plugin } from 'vue';
import Hello from './src/index.vue';

export const HelloPlugin: Plugin = {
  install(app: App) {
    app.component('my-hello', Hello);
  },
};

export {
  Hello,
};
