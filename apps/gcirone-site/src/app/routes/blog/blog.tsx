import { BlogPage } from '../../../pages/Blog';
import BlogLayout from './layout';
import { Hono } from 'hono';

const page = new Hono().basePath('/blog');

page.use(BlogLayout);

page.get('/', (c) => c.render(<BlogPage />));
page.get('/view', (c) => c.render(<BlogPage />));

export default page;
