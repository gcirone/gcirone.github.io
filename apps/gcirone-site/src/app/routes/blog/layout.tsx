import { jsxRenderer } from 'hono/jsx-renderer';
import { PropsWithChildren } from 'hono/jsx';

export function BlogLayout({ children }: PropsWithChildren) {
  return (
    <div className="m-6 bg-orange-600">
      {children}
    </div>
  );
}

export default jsxRenderer(({ children, Layout }) => {
  return (
    <Layout>
      <BlogLayout>{children}</BlogLayout>
    </Layout>
  );
});
