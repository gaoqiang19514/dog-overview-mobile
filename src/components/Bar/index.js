import { useState, useEffect } from 'react';
import { get } from 'lodash';

import today1Icon from '@/assets/images/today1_icon.svg';
import today2Icon from '@/assets/images/today1_icon.svg';
import month1Icon from '@/assets/images/month1_icon.svg';
import month2Icon from '@/assets/images/month2_icon.svg';
import chip1Icon from '@/assets/images/chip1_icon.svg';
import chip2Icon from '@/assets/images/chip2_icon.svg';
import Api from '@/api';

import styles from './index.less';
import Item from './Item';

function Bar() {
  const [total, setTotal] = useState({
    apply: 0,
    pass: 0,
  });
  const [list, setList] = useState([
    {
      id: 1,
      title: '今日申请数',
      value: 0,
      icon: today1Icon,
    },
    {
      id: 2,
      title: '今日通过数',
      value: 0,
      icon: today2Icon,
    },
    {
      id: 3,
      title: '本月申请数',
      value: 0,
      icon: month1Icon,
    },
    {
      id: 4,
      title: '本月通过数',
      value: 0,
      icon: month2Icon,
    },
    {
      id: 5,
      title: '今日芯片注射数',
      value: 0,
      icon: chip1Icon,
    },
    {
      id: 6,
      title: '芯片注射总数',
      value: 0,
      icon: chip2Icon,
    },
  ]);

  useEffect(() => {
    const promises = [
      Api.getDataToday(),
      Api.getDataMonth(),
      Api.getDataTotal(),
    ];

    Promise.all(promises).then(([dayRes, monthRes, totalRes]) => {
      const {
        applyNum: applyNumDay,
        applyPass: applyPassDay,
        chipInjectionNum: chipInjectionNumDay,
      } = get(dayRes, 'data.data.sumList');

      const { applyNum: applyNumMonth, applyPass: applyPassMonth } = get(
        monthRes,
        'data.data.sumList',
      );

      const {
        applyNum: applyNumTotal,
        applyPass: applyPassTotal,
        chipInjectionNum: chipInjectionNumTotal,
      } = get(totalRes, 'data.data.sumList');

      const data = [
        {
          id: 1,
          title: '今日申请数',
          value: applyNumDay,
          icon: today1Icon,
        },
        {
          id: 2,
          title: '今日通过数',
          value: applyPassDay,
          icon: today2Icon,
        },
        {
          id: 3,
          title: '本月申请数',
          value: applyNumMonth,
          icon: month1Icon,
        },
        {
          id: 4,
          title: '本月通过数',
          value: applyPassMonth,
          icon: month2Icon,
        },
        {
          id: 5,
          title: '今日芯片注射数',
          value: chipInjectionNumDay,
          icon: chip1Icon,
        },
        {
          id: 6,
          title: '芯片注射总数',
          value: chipInjectionNumTotal,
          icon: chip2Icon,
        },
      ];

      setList(data);

      if (applyNumTotal && applyPassTotal) {
        setTotal({
          apply: applyNumTotal,
          pass: applyPassTotal,
        });
      }
    });
  }, []);

  return (
    <div className={styles.wrap}>
      <div className={styles.bar}>
        <div className={styles.barInner}></div>
      </div>
      <div className={styles.content}>
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
        <div className={styles.main}>
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
