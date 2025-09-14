/// <reference types='vitest' />
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import build, { NodeBuildOptions } from '@hono/vite-build/node';
import nodeAdapter from '@hono/vite-dev-server/node';
import devServer from '@hono/vite-dev-server';
import tailwindCss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  const cacheDir = '../../node_modules/.vite/apps/gcirone-ui';
  const root = __dirname;

  if (mode === 'client') {
    return {
      root,
      cacheDir,
      plugins: [tailwindCss()],
      build: {
        rollupOptions: {
          input: ['./src/app/client.tsx', './src/app/styles.css'],
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
        jsxImportSource: 'react'
      }
    };
  }

  return {
    root,
    cacheDir,
    plugins: [
      nxViteTsPaths(),
      tailwindCss(),

      devServer({
        entry: 'src/app/server.tsx',
        adapter: nodeAdapter
      }),

      build({
        ...setupEntryContentHooks(),
        entry: './src/app/server.tsx',
        outputDir: './dist/server',
        output: 'main.js',
        emptyOutDir: true,
        minify: false
      })
    ],
    ssr: {
      external: ['hono', '@hono/node-server', 'react', 'react-dom', './routes/home']
    },
    build: {
      ssrManifest: true,
      copyPublicDir: false,
      reportCompressedSize: true,
      commonjsOptions: { transformMixedEsModules: true }
    },
    define: {
      'import.meta.vitest': undefined,
      'import.meta.env.PORT': 'process.env.PORT',
      'import.meta.env.HOST': 'process.env.HOST'
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

function setupEntryContentHooks() {
  return {
    entryContentBeforeHooks: [
      async (appName: string) => {
        return `import { serveStatic } from '@hono/node-server/serve-static';
          ${appName}.use('*', serveStatic({ root: import.meta.env.PROD ? './dist/client' : './public' }));
          ${appName}.get('/favicon.ico', () => new Response(null, { status: 204 }));
          ${appName}.get('/.well-known/*', () => new Response(null, { status: 204 }));
        `;
      }
    ],
    entryContentAfterHooks: [
      async (appName: string) => {
        return `import { serve } from '@hono/node-server';
          const port = parseInt(import.meta.env.PORT || '3000', 10);
          const hostname = import.meta.env.HOST || 'localhost';
          const server = serve({ fetch: ${appName}.fetch, port: port.toString() }, () => {
            console.log('Listening on http://' + hostname + ':' + port);
          });
          process.on('SIGINT', () => { server.close(); process.exit(0); });
          process.on('SIGTERM', () => {
            server.close((err) => {
              if (err) { console.error(err); process.exit(1); }
              process.exit(0);
            });
          });
        `;
      }
    ]
  } as NodeBuildOptions;
}
