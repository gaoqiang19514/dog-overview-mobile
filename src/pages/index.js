import Banner from '@/components/Banner';
import Bar from '@/components/Bar';
import Top5 from '@/components/Top5';
import AgeProportion from '@/components/AgeProportion';
import DogArea from '@/components/DogArea';

import styles from './index.less';

function IndexPage() {
  return (
    <div className={styles.wrap}>
      <div className={styles.topBg}></div>
      <div className={styles.main}>
        <Banner />
        <div className={styles.separateSecondary} />
        <Bar />
        <div className={styles.separatePrimary} />
        <Top5 />
        <div className={styles.separatePrimary} />
        <AgeProportion />
        <div className={styles.separatePrimary} />
        <DogArea />
      </div>
      <div className={styles.bottomBg}></div>
    </div>
  );
}

export default IndexPage;
