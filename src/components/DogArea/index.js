import { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import { get, size } from 'lodash';

import { getBarOption } from '@/shared/config';
import { cutKeyword, areaSort } from '@/shared/utils';
import Api from '@/api';

import styles from './style.less';

const defaultList = [
  { name: '宝安', value: 0 },
  { name: '龙岗', value: 0 },
  { name: '坪山', value: 0 },
  { name: '福田', value: 0 },
  { name: '南山', value: 0 },
  { name: '龙华', value: 0 },
  { name: '盐田', value: 0 },
  { name: '罗湖', value: 0 },
  { name: '大鹏', value: 0 },
  { name: '光明', value: 0 },
];

function DogArea() {
  const [list, setList] = useState(defaultList);

  useEffect(() => {
    Api.getArea().then((res) => {
      const list = get(res, 'data.data.dataList');

      const nextList = list.map((item) => ({
        name: cutKeyword(item.name, ['区', '新区']),
        value: Number(item.count),
      }));

      if (size(nextList)) {
        setList(nextList);
      }
    });
  }, []);

  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>今日各区养犬申请情况</h2>
      <div className={styles.content}>
        <ReactECharts
          style={{ height: '100%', width: '100%' }}
          option={getBarOption(areaSort(list))}
          opts={{ renderer: 'svg' }}
        />
        <div className={styles.icon}></div>
      </div>
    </div>
  );
}

export default DogArea;
