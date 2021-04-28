import ReactECharts from 'echarts-for-react';

import Bar from '@/components/Bar';

import styles from './index.less';
import { getBarPrimaryOption, getPieOption, getBarOption } from './config';

function IndexPage() {
  return (
    <div className={styles.wrap}>
      <div className={styles.header}></div>
      <div className={styles.main}>
        <div className={styles.boxQuinary}>
          <div className={styles.content}>
            <div className={styles.topTitle}>更新时间</div>
            <div className={styles.value}>2021.04.23 12:00</div>
          </div>
        </div>
        <div className={styles.separatePrimary} />
        <Bar />
        <div className={styles.separateSecondary} />
        <h2 className={styles.title}>今日犬只品种登记TOP5</h2>
        <div className={styles.boxSecondary}>
          <ReactECharts
            style={{ height: '100%', width: '100%' }}
            option={getBarPrimaryOption()}
            opts={{ renderer: 'svg' }}
          />
        </div>
        <div className={styles.separateSecondary} />
        <h2 className={styles.title}>今日登记犬主年龄占比</h2>
        <div className={styles.boxTertiary}>
          <ReactECharts
            style={{ height: '100%', width: '100%' }}
            option={getPieOption()}
            opts={{ renderer: 'svg' }}
          />
        </div>
        <div className={styles.separateSecondary} />
        <h2 className={styles.title}>今日各区养犬申请情况</h2>
        <div className={styles.boxQuaternary}>
          <ReactECharts
            style={{ height: '100%', width: '100%' }}
            option={getBarOption()}
            opts={{ renderer: 'svg' }}
          />
          <div className={styles.icon}></div>
        </div>
      </div>
      <div className={styles.footer}></div>
    </div>
  );
}

export default IndexPage;
