import MainLayout from '../components/layouts/main-layout';
import { AppProps } from 'next/app';
import '../styles/styles.scss';

export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
