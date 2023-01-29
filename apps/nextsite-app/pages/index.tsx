import styles from './index.module.scss';
import { findManyWorks } from '@gcirone/data-models';
import type { GetStaticProps, NextPage } from 'next';

interface WorksProps {
  works: any[];
}

export const getStaticProps: GetStaticProps = async (_context) => {
  const works = await findManyWorks();

  return {
    props: {
      works,
    },
  };
};

const IndexPage: NextPage<WorksProps> = ({ works }) => {
  return (
    <div className={styles.page}>
      Works
      <div>
        {works.map((work) => (
          <div key={work.id}>
            {work.name} @ {work.createdAt}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndexPage;
