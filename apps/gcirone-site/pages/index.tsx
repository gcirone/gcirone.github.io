import Image from 'next/image';
import styles from './index.module.scss';
import logo from '../public/static/logo.svg';
import Link from 'next/link';

export default function Index() {
  const toggleClass = ({ target }) => {
    target.classList.toggle(styles.horizontal);
  };

  return (
    <div className={styles.info}>
      <Image src={logo} alt="Gianluca Cirone Logo" onClick={(e) => toggleClass(e)} />

      <h1>
        <strong>Gianluca Cirone</strong>
      </h1>
      <h2>Technology Master</h2>

      <Link hidden href="/about">About</Link>

      <a href="https://www.linkedin.com/in/gianlucacirone">Get in touch!</a>
    </div>
  );
}
