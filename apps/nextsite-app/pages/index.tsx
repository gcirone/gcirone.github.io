import styles from './index.module.scss';
import { findManyWorks } from '@gcirone/data-models';

export async function getStaticProps() {
  const works = await findManyWorks();

  return {
    props: { works }
  }
}


export function Index({ works }) {
  return (
    <div className={styles.page}>
     Works

      <div>
        {works.map(work => (
          <div key={work.id}>{work.name} @ {work.createdAt}</div>
        ))}
      </div>

    </div>
  );
}

export default Index;
