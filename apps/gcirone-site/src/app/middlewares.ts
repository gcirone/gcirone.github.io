import type { MiddlewareHandler } from 'hono';
import { logger } from 'hono/logger';
import jsxRenderer from './renderer';

export const customLogger = (message: string, ...rest: string[]) => {
  const excludeLogs = /well-known|favicon/;

  if (!message.match(excludeLogs)) {
    console.log(message, ...rest);
  }
};

export const middlewares: MiddlewareHandler[] = [logger(customLogger), jsxRenderer];
