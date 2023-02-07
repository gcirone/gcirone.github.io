import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

import { Inter } from '@next/font/google';

const inter = Inter({
  weight: ['400', '500', '600'],
  style: ['normal'],
  subsets: ['latin'],
});

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Gianluca Cirone Developer</title>
        <meta name="description" content="Gianluca Cirone Developer" />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, Portfolio, Engineering"
        />
        <meta name="author" content="Gianluca Cirone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{`:root { --font-family: ${inter.style.fontFamily}; }`}</style>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
