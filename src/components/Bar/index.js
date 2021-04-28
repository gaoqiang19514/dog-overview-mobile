import { useState, useEffect } from 'react';
import styles from './index.less';

import today1Icon from '@/assets/images/today1_icon.svg';
import Api from '@/api';

import Item from './Item';

function Bar() {
  const [total, setTotal] = useState({
    apply: 218,
    pass: 197,
  });
  const [list, setList] = useState([
    {
      id: 1,
      title: '今日申请数',
      value: 47,
      icon: today1Icon,
    },
    {
      id: 2,
      title: '今日通过数',
      value: 47,
      icon: today1Icon,
    },
    {
      id: 3,
      title: '本月申请数',
      value: 47,
      icon: today1Icon,
    },
    {
      id: 4,
      title: '本月通过数',
      value: 47,
      icon: today1Icon,
    },
    {
      id: 5,
      title: '今日芯片注射数',
      value: 47,
      icon: today1Icon,
    },
    {
      id: 6,
      title: '芯片注射总数',
      value: 47,
      icon: today1Icon,
    },
  ]);

  useEffect(() => {
    Api.getStatistics().then((res) => {
      console.log('res', res);
    });
  }, []);

  return (
    <div className={styles.wrap}>
      <div className={styles.bar}>
        <div className={styles.barInner}></div>
      </div>
      <div className={styles.boxPrimary}>
        <div className={styles.head}>
          <div>
            <div className={styles.title}>申请总数</div>
            <div className={styles.num}>{total.apply}</div>
          </div>
          <div>
            <div className={styles.title}>通过总数</div>
            <div className={styles.num}>{total.pass}</div>
          </div>
        </div>
        <div className={styles.list}>
          {list.map((item) => (
            <Item
              key={item.id}
              title={item.title}
              value={item.value}
              icon={item.icon}
            />
          ))}
        </div>

        <div className={styles.mask}></div>
        <div className={styles.icon}></div>
      </div>
    </div>
  );
}

export default Bar;
