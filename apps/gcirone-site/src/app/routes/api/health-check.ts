import { Hono } from 'hono';

const app = new Hono();

app.get('/api/health-check', async (c) => {
  return c.json({ status: 'OK' });
});

export default app;
