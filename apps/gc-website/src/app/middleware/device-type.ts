import { createCookie } from 'react-router';
import type { Route } from '../+types/root';
import { UAParser } from 'ua-parser-js';

const deviceCookie = createCookie('device', {
  path: '/',
  sameSite: 'lax',
  httpOnly: false,
  secure: import.meta.env.NODE_ENV === 'production'
});

export const deviceType: Route.unstable_MiddlewareFunction = async ({ request }, next) => {
  const { device } = UAParser(request.headers.get('user-agent') as string);
  const deviceType = device.is('mobile') ? 'mobile' : 'desktop';
  request.headers.set('X-Device-Type', deviceType);

  const response: Response = await next();
  // response.headers.set('X-Device-Type', deviceType);
  response.headers.append('Set-Cookie', await deviceCookie.serialize(deviceType));

  return response;
};
