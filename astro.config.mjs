// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "static",
  base: "/staging",
  trailingSlash: "always",
  compressHTML: false,
  scopedStyleStrategy: "where",
  site: "https://gcirone.github.io",
  vite: {
    build: {
      rollupOptions: {
        output: {
          entryFileNames: "entry.[hash].mjs",
          chunkFileNames: "chunks/chunk.[hash].mjs",
          assetFileNames: "assets/asset.[hash][extname]",
        },
      },
    },
    ssr: {
      external: ["svgo"],
    },
  },
});
