import dayjs from 'dayjs';

import styles from './style.less';

function Banner() {
  const date = dayjs().format('YYYY.MM.DD HH:mm');

  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <div className={styles.title}>更新时间</div>
        <div className={styles.value}>{date}</div>
      </div>
    </div>
  );
}

export default Banner;
