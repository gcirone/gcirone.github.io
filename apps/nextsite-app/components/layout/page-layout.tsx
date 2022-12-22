import styles from './page-layout.module.scss';
import Header from '../ui/header/header';
import Footer from '../ui/footer/footer';

export function PageLayout({ children }) {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}

export default PageLayout;
