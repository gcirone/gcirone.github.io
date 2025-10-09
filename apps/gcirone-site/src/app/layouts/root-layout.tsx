import themeMode from '../../shared/ui/theme/theme-mode?raw';
import { sanitizeJs } from '../../shared/lib/sanitize';
import { PropsWithChildren } from 'hono/jsx';
import Script from '../../shared/ui/script';
import Link from '../../shared/ui/link';

export function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#ff6A01" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="shortcut icon" type="image/svg+xml" href="/favicon.svg" />
        {/*<link rel="icon" sizes="48x48" href="/favicon.ico" />*/}
        {/*<link rel="manifest" href="/manifest.json" />*/}

        {[
          '/src/assets/fonts/icons.woff2',
          '/src/assets/fonts/inter.woff2',
          '/src/assets/fonts/spacegrotesk.woff2',
          '/src/assets/fonts/poppins.woff2',
          '/src/assets/fonts/oxanium.woff2'
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

        <Link rel="preload" href="/src/assets/images/logo.svg" fetchPriority="low" />
        <Link rel="preload" href="/src/assets/styles.css" as="style" fetchPriority="high" />
        <Link rel="stylesheet" href="/src/assets/styles.css" />

        <Link rel="modulepreload" href="/src/app/client.tsx" as="script" />
        <Script type="module" src="/src/app/client.tsx" />
      </head>
      <body className="bg-gray-100 bg-linear-to-tl from-gray-800/80 to-gray-900/80 text-gray-900 antialiased dark:bg-gray-900 dark:text-gray-100">
        {children}
      </body>
    </html>
  );
}
