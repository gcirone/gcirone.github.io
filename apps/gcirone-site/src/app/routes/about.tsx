import { AboutPage } from '../../pages/About';
import { Hono } from 'hono';

const page = new Hono().basePath('/about');

page.get('/', (c) => c.render(<AboutPage />));

export default page;
