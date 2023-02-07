import styles from './index.module.scss';

export function Index() {
  return (
    <div className={styles.info}>
      <h1>
        Gianluca Cirone <strong>Developer</strong>
      </h1>
      <a href="https://www.linkedin.com/in/gianlucacirone">keep.in.touch</a>
    </div>
  );
}

export default Index;
