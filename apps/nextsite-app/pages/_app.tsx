import PageLayout from '../components/layout/page-layout';
import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

import { Roboto } from '@next/font/google'

const roboto = Roboto({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin']
});

export default function MainApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Gianluca Cirone Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>{`:root { --font-main: ${roboto.style.fontFamily}; }`}</style>
      </Head>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </>
  );
}
