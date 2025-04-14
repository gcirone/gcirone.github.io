import type { Route } from '../+types/root';

export const serverLogger: Route.unstable_MiddlewareFunction = async (
  { request, params, context },
  next
) => {
  const start = performance.now();

  const res: Response = await next();

  res.headers.set('X-Perf-Duration', (performance.now() - start).toFixed(3));

  return res;
};
