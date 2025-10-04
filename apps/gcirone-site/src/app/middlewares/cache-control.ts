import { createMiddleware } from 'hono/factory';

export const cacheControl = createMiddleware(async (c, next) => {
  await next();
});
