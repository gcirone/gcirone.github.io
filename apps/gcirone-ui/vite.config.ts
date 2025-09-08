/// <reference types='vitest' />
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import nodeAdapter from '@hono/vite-dev-server/node';
import devServer from '@hono/vite-dev-server';
import build from '@hono/vite-build/node';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  const cacheDir = '../../node_modules/.vite/apps/gcirone-ui';
  const root = __dirname;

  if (mode === 'client') {
    return {
      root,
      cacheDir,
      build: {
        rollupOptions: {
          input: ['./src/app/client.ts', './src/app/styles.css'],
          output: {
            dir: './dist/client',
            entryFileNames: 'static/[name]-[hash].js',
            chunkFileNames: 'static/assets/[name]-[hash].js',
            assetFileNames: 'static/assets/[name]-[hash].[ext]'
          }
        },
        assetsDir: 'static',
        emptyOutDir: true,
        copyPublicDir: true,
        manifest: true
      },
      esbuild: {
        // jsxImportSource: 'hono/jsx',
        // jsxImportSource: 'hono/jsx/dom'
      }
    };
  }

  return {
    root,
    cacheDir,
    plugins: [
      nxViteTsPaths(),

      devServer({
        entry: 'src/app/server.ts',
        adapter: nodeAdapter
      }),

      build({
        entry: './src/app/server.ts',
        entryContentBeforeHooks: [],
        entryContentAfterHooks: [],
        outputDir: './dist/server',
        output: 'main.js',
        emptyOutDir: true
      })
    ],
    ssr: {
      manifest: true,
      external: ['hono', '@hono/node-server']
    },
    build: {
      ssrManifest: true,
      copyPublicDir: false,
      reportCompressedSize: true,
      commonjsOptions: { transformMixedEsModules: true }
    },
    define: {
      'import.meta.vitest': undefined
    },
    test: {
      name: 'gcirone-ui',
      watch: false,
      globals: true,
      environment: 'jsdom',
      include: ['{src,tests}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
      includeSource: ['src/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
      reporters: ['default'],
      coverage: {
        reportsDirectory: './test-output/vitest/coverage',
        provider: 'v8' as const
      }
    }
  };
});
