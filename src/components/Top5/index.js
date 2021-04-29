import { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import { get } from 'lodash';

import { getBarPrimaryOption } from '@/shared/config';
import Api from '@/api';

import styles from './style.less';

const defaultList = [
  { name: '犬只名', value: 0 },
  { name: '犬只名', value: 0 },
  { name: '犬只名', value: 0 },
  { name: '犬只名', value: 0 },
  { name: '犬只名', value: 0 },
];

function Top5() {
  const [state, setState] = useState(defaultList);

  useEffect(() => {
    Api.getTop5().then((res) => {
      const list = get(res, 'data.data.topList');

      const nextList = list.slice(0, 5).map((item) => ({
        name: item.name,
        value: Number(item.count),
      }));

      setState(nextList);
    });
  }, []);

  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>今日犬只品种登记TOP5</h2>
      <div className={styles.content}>
        <ReactECharts
          style={{ height: '100%', width: '100%' }}
          option={getBarPrimaryOption(state)}
          opts={{ renderer: 'svg' }}
        />
      </div>
    </div>
  );
}

export default Top5;
