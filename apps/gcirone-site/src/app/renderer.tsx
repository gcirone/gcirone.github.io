import { RootLayout } from './layouts/root-layout';
import { jsxRenderer } from 'hono/jsx-renderer';

export default jsxRenderer(RootLayout, {
  docType: true,
  stream: true
});
