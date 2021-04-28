import styles from './style.less';

function Item(props) {
  const { title, value, icon } = props;

  return (
    <div className={styles.wrap}>
      <img className={styles.icon} src={icon} alt="" />
      <div className={styles.main}>
        <div className={styles.title}>{title}</div>
        <div className={styles.value}>{value}</div>
      </div>
    </div>
  );
}

export default Item;
