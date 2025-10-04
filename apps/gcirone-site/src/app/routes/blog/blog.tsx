import { BlogPage } from '../../../pages/Blog';
import { jsxRenderer } from 'hono/jsx-renderer';
import { BlogLayout } from './layout';
import { Hono } from 'hono';

const page = new Hono().basePath('/blog');

page.use(
  jsxRenderer(({ children, Layout }) => {
    return (
      <Layout>
        <BlogLayout>{children}</BlogLayout>
      </Layout>
    );
  })
);

page.get('/', (c) => c.render(<BlogPage />));
page.get('/view', (c) => c.render(<BlogPage />));

export default page;
