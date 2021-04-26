import ReactECharts from 'echarts-for-react';

import styles from './index.less';
import { getPieOption, getBarOption } from './config';

function IndexPage() {
  return (
    <div className={styles.wrap}>
      <div className={styles.separateTertiary} />
      <div className={styles.header}></div>
      <div className={styles.separatePrimary} />
      <div className={styles.boxPrimary}></div>
      <div className={styles.separateSecondary} />
      <div className={styles.boxSecondary}>
        <ReactECharts
          style={{ height: '100%', width: '100%' }}
          option={getBarOption()}
          opts={{ renderer: 'svg' }}
        />
      </div>
      <div className={styles.separateSecondary} />
      <div className={styles.boxTertiary}>
        <ReactECharts
          style={{ height: '100%', width: '100%' }}
          option={getPieOption()}
          opts={{ renderer: 'svg' }}
        />
      </div>
      <div className={styles.separateSecondary} />
      <div className={styles.boxQuaternary}>
        <ReactECharts
          style={{ height: '100%', width: '100%' }}
          option={getBarOption()}
          opts={{ renderer: 'svg' }}
        />
      </div>
      <div className={styles.separateQuaternary} />
    </div>
  );
}

export default IndexPage;
