import health from './routes/api/health-check';
import contact from './routes/contact';
import blog from './routes/blog/blog';
import home from './routes/home';
import { Hono } from 'hono';

export const routes: Hono[] = [home, blog, contact, health];
