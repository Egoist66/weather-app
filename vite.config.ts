
//@ts-ignore

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';


//@ts-ignore

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      features: {
        propsDestructure: true,
      }
    }),
    vueJsx(),
    vueDevTools(),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
      jpeg: {
        quality: 100,
        optimiseCoding: true
      }
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
