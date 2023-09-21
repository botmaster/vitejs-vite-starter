import { URL, fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';
import VueDevTools from 'vite-plugin-vue-devtools';
import Icons from 'unplugin-icons/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader(), VueDevTools(), Icons({ compiler: 'vue3', defaultClass: 'icon' })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@svg': fileURLToPath(new URL('./src/assets/svg', import.meta.url)),
    },
  },
});
