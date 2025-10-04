import { HomePage } from '../../pages/Home';
import MainLayout from './layout';
import { Hono } from 'hono';

const page = new Hono();

page.use(MainLayout);

page.get('/', (c) => c.render(<HomePage />));

export default page;
