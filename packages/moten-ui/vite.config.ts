import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import {createVuePlugin} from 'vite-plugin-vue2';
import {isVue2} from 'vue-demi';


const name= isVue2 ? 'vue2' : 'vue3';
// https://vite.dev/config/
export default defineConfig({
  plugins: [isVue2 ? createVuePlugin() : vue()],
  build: {
    outDir: resolve(__dirname, 'dist', name),
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'moten',
      // 将添加适当的扩展名后缀
      fileName: 'moten',
    },
    rollupOptions: {
      external: ['vue-demi', 'vue'],
      output: {
        globals: {
          'vue-demi': 'VueDemi',
          vue: 'Vue',
        },
      },
    },
  }
});
