import MainLayout from '../components/layouts/main-layout';
import { Inter } from '@next/font/google';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/styles.scss';

const inter = Inter({ subsets: ['latin'] });

export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Gianluca Cirone Technology Master</title>
        <meta name="description" content="Gianluca Cirone Developer" />
        <meta name="keywords" content="HTML, CSS, JavaScript, Portfolio, Engineering, Technology" />
        <meta name="author" content="Gianluca Cirone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{`:root { --inter-font: ${inter.style.fontFamily}; }`}</style>
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
