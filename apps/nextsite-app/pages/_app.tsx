import PageLayout from '../components/layout/page-layout';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/styles.scss';

import { Inter } from '@next/font/google';

const inter = Inter({
  weight: ['400', '500', '600'],
  style: ['normal'],
  subsets: ['latin'],
});

export default function MainApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Gianluca Cirone Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>{`:root { --font-family: ${inter.style.fontFamily}; }`}</style>
      </Head>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </>
  );
}
