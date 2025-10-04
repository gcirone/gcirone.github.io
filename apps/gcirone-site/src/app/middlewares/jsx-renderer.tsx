import { jsxRenderer } from 'hono/jsx-renderer';
import { RootLayout } from '../routes/layout';

export default jsxRenderer(
  ({ children }) => {
    return <RootLayout>{children}</RootLayout>;
  },
  {
    docType: true,
    stream: true
  }
);
