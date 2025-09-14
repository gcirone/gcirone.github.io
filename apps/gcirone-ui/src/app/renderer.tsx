import { reactRenderer } from '@hono/react-renderer';
import Script from '../shared/ui/Script';
import Link from '../shared/ui/Link';

export default reactRenderer(
  ({ children }) => {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="/favicon.ico" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          {[
            'https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7W0Q5nw.woff2',
            'https://fonts.gstatic.com/s/spacegrotesk/v22/V8mDoQDjQSkFtoMM3T6r8E7mPbF4C_k3HqU.woff2'
          ].map((href, i) => (
            <link
              key={i}
              rel="preload"
              href={href}
              crossOrigin="anonymous"
              type="font/woff2"
              as="font"
            />
          ))}

          {/*<link rel="preload" href="/src/assets/logo.svg" fetchPriority="high" />*/}
          <Link rel="preload" href="/src/app/styles.css" as="style" fetchPriority="high" />
          <Link rel="modulepreload" href="/src/app/client.tsx" as="script" fetchPriority="high" />

          <Link rel="stylesheet" href="/src/app/styles.css" />
          <Script type="module" src="/src/app/client.tsx" />
        </head>
        <body className="bg-gray-900 text-white antialiased">{children}</body>
      </html>
    );
  },
  {
    docType: true,
    stream: true
  }
);
