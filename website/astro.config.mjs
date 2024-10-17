// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: process.env.ASTRO_SITE || 'https://gcirone.github.io',
  base: process.env.ASTRO_BASE_URL || '/',
  trailingSlash: 'always',
  compressHTML: false,
  scopedStyleStrategy: 'where',
  vite: {
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'entry.[hash].mjs',
          chunkFileNames: 'chunks/chunk.[hash].mjs',
          assetFileNames: 'assets/asset.[hash][extname]'
        }
      }
    },
    ssr: {
      external: ['svgo']
    }
  }
});
