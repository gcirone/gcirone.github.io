import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import devServer, { defaultOptions } from '@hono/vite-dev-server';
import nodeAdapter from '@hono/vite-dev-server/node';
import { defineConfig, UserConfig } from 'vite';
import tailwindCss from '@tailwindcss/vite';
import { builtinModules } from 'module';
import path from 'node:path';

export default defineConfig(({ mode }) => {
  const cacheDir = path.resolve('../../node_modules/.vite/apps/gcirone-site');
  const isProd = process.env.NODE_ENV === 'production';
  const root = path.resolve(__dirname);
  const envPrefix = 'APP_';

  const clientConfig: UserConfig = {
    cacheDir,
    envPrefix,
    root,
    plugins: [tailwindCss()],
    build: {
      outDir: './dist/client',
      reportCompressedSize: isProd,
      assetsInlineLimit: 0,
      assetsDir: 'static',
      copyPublicDir: true,
      cssCodeSplit: true,
      emptyOutDir: true,
      manifest: true,
      minify: isProd,
      rollupOptions: {
        input: ['./src/app/client.tsx', './src/assets/styles.css'],
        output: {
          entryFileNames: 'static/[name]-[hash].js',
          chunkFileNames: 'static/chunks/[name]-[hash].js',
          assetFileNames: 'static/assets/[name]-[hash].[ext]'
        }
      }
    },
    esbuild: {
      jsxImportSource: 'hono/jsx'
    }
  };

  const serverConfig: UserConfig = {
    cacheDir,
    envPrefix,
    root,
    plugins: [
      nxCopyAssetsPlugin(['package.json']),
      nxViteTsPaths(),
      tailwindCss(),
      devServer({
        exclude: [...defaultOptions.exclude, /.*\.(jpg|svg|png|woff2)/],
        entry: './src/app/server.tsx',
        adapter: nodeAdapter
      })
    ],
    build: {
      outDir: './dist/server',
      reportCompressedSize: isProd,
      copyPublicDir: false,
      emptyOutDir: true,
      assetsInlineLimit: 0,
      ssrEmitAssets: true,
      ssrManifest: false,
      minify: isProd,
      ssr: true,
      commonjsOptions: {
        transformMixedEsModules: true
      },
      rollupOptions: {
        external: [...builtinModules, /^node:/],
        input: ['./src/app/server.tsx'],
        output: {
          entryFileNames: 'main.js',
          chunkFileNames: 'chunks/[name].js',
          assetFileNames: 'static/assets/[name]-[hash].[ext]'
        }
      }
    }
  };

  if (mode === 'client') {
    return clientConfig;
  } else {
    return serverConfig;
  }
});
