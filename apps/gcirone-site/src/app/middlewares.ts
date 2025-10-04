import jsxRenderer from './middlewares/jsx-renderer';
import type { MiddlewareHandler } from 'hono';
import { logger } from 'hono/logger';

export const customLogger = (message: string, ...rest: string[]) => {
  const excludeLogs = /well-known|favicon/;

  if (!message.match(excludeLogs)) {
    console.log(message, ...rest);
  }
};

export const middlewares: MiddlewareHandler[] = [jsxRenderer, logger(customLogger)];
