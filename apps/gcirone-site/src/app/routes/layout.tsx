import { MainLayout } from '../layouts/main-layout';
import { jsxRenderer } from 'hono/jsx-renderer';

export default jsxRenderer(({ children, Layout }) => {
  return (
    <Layout>
      <MainLayout>{children}</MainLayout>
    </Layout>
  );
});
