import { defineConfig } from 'vite'
import path from "node:path"
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@' : path.resolve(__dirname, 'src'),
    }
  }
  ,
  plugins: [
    vue(),
    Layouts({
      layoutDirs: './src/layouts',
      pagesDirs: './src/pages',
      defaultLayout: 'default'
    }),
    Pages({
      dirs: './src/pages',
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
})
