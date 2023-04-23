import Image from 'next/image';
import styles from './index.module.scss';
import logo from '../public/static/logo.svg';

export default function Index() {
  const toggleClass = ({ target }) => {
    target.classList.toggle(styles.vertical);
  };

  return (
    <div className={styles.info}>
      <Image src={logo} alt="GC Logo" onClick={(e) => toggleClass(e)} />
      <h1 hidden>
        Gianluca Cirone <strong>Technology</strong>
      </h1>
      <a href="https://www.linkedin.com/in/gianlucacirone">
        Get in touch with <span>Gianluca</span>
      </a>
    </div>
  );
}
