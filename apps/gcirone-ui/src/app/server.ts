import { serveStatic } from '@hono/node-server/serve-static';
import { serve } from '@hono/node-server';
import { logger } from 'hono/logger';
import jsxRenderer from './renderer';
import { routes } from './routes';
import { Hono } from 'hono';

export const app = new Hono();

app.use('*', serveStatic({ root: import.meta.env.PROD ? './dist/client' : './public' }));
app.get('/favicon.ico', () => new Response(null, { status: 204 }));
app.get('/.well-known/*', () => new Response(null, { status: 204 }));

app.use('*', logger());
app.use('*', jsxRenderer);

routes.forEach((route) => {
  app.get(route.path, (c) => c.render(route.children));
});

const port = parseInt(process.env.PORT || '3000', 10);
const hostname = process.env.HOST || 'localhost';

if (import.meta.env.PROD) {
  serve({ fetch: app.fetch, hostname, port }, () =>
    console.log(`Listening on http://${hostname}:${port}`)
  );
}

export default app;
