import { Links, Meta, Scripts, ScrollRestoration } from 'react-router';

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" data-theme="dark">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <Meta />
      <Links />
    </head>
    <body>
      {children}
      <ScrollRestoration />
      <Scripts />
    </body>
    </html>
  );
}
