import health from './routes/api/health-check';
import landing from './routes/landing';
import contact from './routes/contact';
import blog from './routes/blog/blog';
import about from './routes/about';
import home from './routes/home';
import { Hono } from 'hono';

export const routes: Hono[] = [home, about, blog, contact, landing, health];
