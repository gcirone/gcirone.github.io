import themeMode from '../../shared/ui/theme/theme-mode?raw';
import { sanitizeJs } from '../../shared/lib/sanitize';
import { jsxRenderer } from 'hono/jsx-renderer';
import { PropsWithChildren } from 'hono/jsx';
import Script from '../../shared/ui/Script';
import Link from '../../shared/ui/Link';

export function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffffff" />
        <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="48x48" />

        {[
          '/src/assets/fonts/icons.woff2',
          '/src/assets/fonts/inter.woff2',
          '/src/assets/fonts/spacegrotesk.woff2'
        ].map((href, i) => (
          <Link
            key={i}
            rel="preload"
            href={href}
            crossOrigin="anonymous"
            type="font/woff2"
            as="font"
          />
        ))}

        <script dangerouslySetInnerHTML={{ __html: sanitizeJs(themeMode) }} />

        {/*<link rel="preload" href="/src/assets/logo.svg" fetchPriority="high" />*/}
        <Link rel="preload" href="/src/assets/styles.css" as="style" />
        <Link rel="stylesheet" href="/src/assets/styles.css" />

        <Link rel="modulepreload" href="/src/app/client.tsx" as="script" />
        <Script type="module" src="/src/app/client.tsx" />
      </head>
      <body className="bg-white text-gray-900 antialiased dark:bg-gray-900 dark:text-white">
        {children}
      </body>
    </html>
  );
}

export default jsxRenderer(RootLayout, {
  docType: true,
  stream: true
});
