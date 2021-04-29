import { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import { get } from 'lodash';

import { getPieOption } from '@/shared/config';
import Api from '@/api';

import styles from './style.less';

function AgeProportion() {
  const [state, setState] = useState([]);

  useEffect(() => {
    Api.getAge().then((res) => {
      const obj = get(res, 'data.data.ageList');

      const list = Object.keys(obj).reduce((arr, key) => {
        return [...arr, { name: key, value: obj[key] }];
      }, []);

      setState(list);
    });
  }, []);

  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>今日登记犬主年龄占比</h2>
      <div className={styles.content}>
        <ReactECharts
          style={{ height: '100%', width: '100%' }}
          option={getPieOption(state)}
          opts={{ renderer: 'svg' }}
        />
      </div>
    </div>
  );
}

export default AgeProportion;
