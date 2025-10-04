import { serveStatic } from '@hono/node-server/serve-static';
import { middlewares } from './middlewares';
import { serve } from '@hono/node-server';
import { showRoutes } from 'hono/dev';
import { routes } from './routes';
import { Hono } from 'hono';

async function createApp() {
  const app = new Hono();

  middlewares.forEach((middleware) => app.use(middleware));
  routes.forEach((route) => app.route('/', route));

  if (import.meta.env.PROD) {
    await serveApp(app);
  } else {
    showRoutes(app, {
      verbose: true,
      colorize: true
    });
  }

  return app;
}

async function serveApp(app: Hono) {
  const port = parseInt(process.env.PORT || '3000', 10);
  const hostname = process.env.HOST || 'localhost';

  app.use(serveStatic({ root: './dist/client' }));

  const server = serve({ fetch: app.fetch, port }, () => {
    console.log('Listening on http://' + hostname + ':' + port);
  });

  process.on('SIGINT', () => {
    server.close();
    process.exit(0);
  });

  process.on('SIGTERM', () => {
    server.close((err) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      process.exit(0);
    });
  });
}

export default createApp();
