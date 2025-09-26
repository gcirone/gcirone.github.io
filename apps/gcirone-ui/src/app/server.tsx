import { serveStatic } from '@hono/node-server/serve-static';
import { isValidElement } from 'react';
import { showRoutes } from 'hono/dev';
import { logger } from 'hono/logger';
import jsxRenderer from './renderer';
import { routes } from './routes';
import { Hono } from 'hono';

const app = new Hono();

app.use('*', serveStatic({ root: import.meta.env.PROD ? './dist/client' : './public' }));
app.get('/favicon.ico', () => new Response(null, { status: 204 }));
app.get('/.well-known/*', () => new Response(null, { status: 204 }));

// setup middlewares
app.use('*', logger());
app.use('*', jsxRenderer);

// setup routes
for (const { path, children } of routes) {
  if (isValidElement(children)) {
    app.get(path, (c) => c.render(children));
  } else if (children instanceof Hono) {
    app.route(path, children);
  }
}

// debug routes
if (import.meta.env.DEV) {
  showRoutes(app, {
    verbose: true,
    colorize: true
  });
}

export default app;
