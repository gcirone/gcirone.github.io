import { reactRenderer } from '@hono/react-renderer';
import RootLayout from './layouts/RootLayout';

export default reactRenderer(
  ({ children }) => {
    return <RootLayout>{children}</RootLayout>;
  },
  {
    docType: true,
    stream: true
  }
);
