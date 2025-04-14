import type { Route } from '../+types/root';

const cacheControlTypes: Record<string, string> = {
  default: 'no-cache, no-store, must-revalidate, s-maxage=30',
  'text/html': 'public, max-age=600, s-maxage=3600',
  'application/json': 'no-cache, no-store, must-revalidate, s-maxage=10'
};

export const cacheControl: Route.unstable_MiddlewareFunction = async (
  { request, params, context },
  next
) => {
  const response: Response = await next();

  const contentType = response.headers.get('Content-Type') || '';

  const cacheControlType = Object.entries(cacheControlTypes).find(([type]) => {
    return contentType.startsWith(type);
  });

  let cacheControlValue = cacheControlTypes['default'];

  if (cacheControlType) {
    cacheControlValue = cacheControlType[1];
  }

  response.headers.set('Cache-Control', cacheControlValue);

  // console.log(response.headers);

  return response;
};
