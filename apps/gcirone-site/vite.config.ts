import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
// @ts-expect-error vite
import tailwindCss from '@tailwindcss/vite';
import { builtinModules } from 'module';
import { defineConfig } from 'vite';
import { resolve, join } from 'node:path';

export default defineConfig(({ mode }) => {
  const cacheDir = '../../node_modules/.vite/apps/gcirone-site';
  const isProd = process.env.NODE_ENV === 'production';
  const isWatch = process.argv.includes('--watch')
  const root = resolve(__dirname);
  const envPrefix = 'APP_';

  console.log('env', process.env.NODE_ENV);
  console.log('mode', mode);

  const clientConfig = {
    cacheDir,
    envPrefix,
    root,
    plugins: [tailwindCss()],
    build: {
      outDir: './dist/client',
      reportCompressedSize: isProd,
      assetsDir: 'static',
      copyPublicDir: true,
      cssCodeSplit: true,
      emptyOutDir: true,
      manifest: true,
      minify: isProd && !isWatch,
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

  const serverConfig = {
    cacheDir,
    envPrefix,
    root,
    plugins: [nxViteTsPaths(), nxCopyAssetsPlugin(['package.json'])],
    ssr: {
      target: 'node'
    },
    build: {
      outDir: './dist/server',
      reportCompressedSize: isProd,
      copyPublicDir: false,
      emptyOutDir: true,
      ssrManifest: true,
      minify: isProd && !isWatch,
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
          assetFileNames: 'assets/[name].[ext]'
        }
      }
    }
  };

  if (mode === 'client') {
    return clientConfig;
  } else if (mode === 'server') {
    return serverConfig;
  } else {
    return {};
  }
});
