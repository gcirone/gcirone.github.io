import { LandingPage } from '../../pages/Landing';
import RootLayout from '../renderer';
import { Hono } from 'hono';

const page = new Hono().basePath('/landing');

page.use(RootLayout);

page.get('/', (c) => c.render(<LandingPage />));

export default page;
