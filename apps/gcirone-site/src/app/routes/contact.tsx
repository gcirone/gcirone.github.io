import { ContactPage } from '../../pages/Contact';
import { Hono } from 'hono';

const page = new Hono().basePath('/contact');

page.get('/', (c) => c.render(<ContactPage />));

export default page;
