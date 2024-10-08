import { Montserrat } from 'next/font/google';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/styles.scss';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function MainApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>
      <Head>
        <title>Welcome to the Personal Website of Gianluca Cirone, Technology Master</title>
        <meta
          name="description"
          content="Leading Innovation and Driving Results with Strategic Technology Leadership"
        />
        <meta
          name="keywords"
          content="Technology, Strategy, Planning, Engineering, Development, Risk, HTML, CSS, JavaScript, Portfolio"
        />
        <meta name="author" content="Gianluca Cirone" />
        <link rel="apple-touch-icon" sizes="57x57" href="/static/favicon/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/static/favicon/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/static/favicon/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/static/favicon/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/static/favicon/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/static/favicon/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/static/favicon/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/static/favicon/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/static/favicon/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/static/favicon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/static/favicon/site.webmanifest" />
        <meta content="/static/favicon/browserconfig.xml" name="msapplication-config" />
        <meta name="msapplication-TileColor" content="#121212" />
        <meta name="msapplication-TileImage" content="/static/favicon/ms-icon-144x144.png" />
        <meta name="theme-color" content="#121212" />
        <link href="/static/favicon/favicon.ico" rel="shortcut icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
