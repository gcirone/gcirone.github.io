import { BlogLayout } from '../../layouts/blog-layout';
import { jsxRenderer } from 'hono/jsx-renderer';

export default jsxRenderer(({ children, Layout }) => {
  return (
    <Layout>
      <BlogLayout>{children}</BlogLayout>
    </Layout>
  );
});
