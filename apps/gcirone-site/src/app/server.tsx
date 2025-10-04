import { serveStatic } from '@hono/node-server/serve-static';
import { serve } from '@hono/node-server';
import RootLayout from './routes/layout';
import { Hono } from 'hono';

const app = new Hono();

console.log('LOG_LEVEL', process.env.LOG_LEVEL)
console.log('APP_LOG_LEVEL', process.env.APP_LOG_LEVEL)
console.log('META:APP_LOG_LEVEL', import.meta.env.APP_LOG_LEVEL)
console.log(import.meta.env)

app.use('*', serveStatic({ root: import.meta.env.PROD ? './dist/client' : './public' }));
app.use(RootLayout);

app.get('/', (c) => c.render(<div>home</div>));
app.get('/blog', (c) => c.render(<div>blog</div>));
app.get('/contact', (c) => c.render(<div>contact</div>));

const port = parseInt(process.env.PORT || '3000', 10);
const hostname = process.env.HOST || 'localhost';

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
