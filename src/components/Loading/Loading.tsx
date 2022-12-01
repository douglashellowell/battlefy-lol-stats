import styles from './Loading.module.scss';

const Loading = () => {
  return (
    <div className={styles.loading}>
      <img
        src="images/loadingporo.png"
        alt="loading..."
        className={styles.poro}
      />
      <p>loading...</p>
    </div>
  );
};

export default Loading;
