import { HomePage } from '../../pages/Home';
import { Hono } from 'hono';

const page = new Hono();

page.get('/', (c) => c.render(<HomePage />));

export default page;
