// eslint-disable-next-line no-unused-vars
import styles from './style.css';

export default ({ name }) => {
  const n = name || 'unknown';

  return (
    <div className={styles.u}>
      {n}
      {/* <Button /> */}
    </div>
  );
};
