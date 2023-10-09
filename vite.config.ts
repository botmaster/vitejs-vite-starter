import { URL, fileURLToPath } from 'node:url';
import * as path from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';
import VueDevTools from 'vite-plugin-vue-devtools';
import Icons from 'unplugin-icons/vite';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgLoader(),
    VueDevTools(),
    Icons({ compiler: 'vue3', defaultClass: 'icon' }),

    // https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n
    VueI18nPlugin({
      include: path.resolve(__dirname, './src/locales/**'),
      jitCompilation: true,
    }),
  ],
  build: {
    commonjsOptions: {
      include: ['tailwind-config.cjs', 'node_modules/**'],
    },
  },

  optimizeDeps: {
    include: ['tailwind-config'],
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@svg': fileURLToPath(new URL('./src/assets/svg', import.meta.url)),
      'tailwind-config': path.resolve(__dirname, './tailwind.config.js'),
    },
  },
});
