import styles from './main-layout.module.scss';

export default function MainLayout({ children }) {
  return (
    <>
      <main className={styles.main}>{children}</main>
    </>
  );
}
