import Link from 'next/link';
import styles from './index.module.scss';

export default function Index() {
  return (
    <div className={styles.info}>
      <h1>
        Gianluca Cirone <strong>Technology Master</strong>
      </h1>
      <Link href="/about" hidden={true}>about</Link>
      <a href="https://www.linkedin.com/in/gianlucacirone">keep.in.touch</a>
    </div>
  );
}
