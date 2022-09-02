import { App, Plugin } from 'vue';
import Text from './src/index.vue';

export const TextPlugin: Plugin = {
  install(app: App) {
    app.component('my-text', Text);
  },
};

export {
  Text,
};
