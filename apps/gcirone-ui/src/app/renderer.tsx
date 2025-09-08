import { jsxRenderer } from 'hono/jsx-renderer';
import type { Manifest } from 'vite';

export default jsxRenderer(
  ({ children }) => {
    const manifestImport = import.meta.glob<{ default: Manifest }>(
      '/dist/client/.vite/manifest.json',
      {
        eager: true
      }
    );

    const manifest = Object.values(manifestImport).at(0)?.default || {};

    const Styles = () =>
      import.meta.env.PROD ? (
        <link rel="stylesheet" href={'/' + manifest['src/app/styles.css'].file} />
      ) : (
        <link rel="stylesheet" href="/src/app/styles.css" />
      );

    const Scripts = () =>
      import.meta.env.PROD ? (
        <script type="module" src={'/' + manifest['src/app/client.ts'].file} async={true} />
      ) : (
        <script type="module" src="/src/app/client.ts" async={true} />
      );

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="/favicon.ico" />
          <Styles />
          <Scripts />
        </head>
        <body>{children}</body>
      </html>
    );
  },
  {
    docType: true,
    stream: true
  }
);
