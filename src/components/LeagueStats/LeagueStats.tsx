import SummonerForm from '../SummonerForm/SummonerForm';
import styles from './LeagueStats.module.scss';

const LeagueStats = () => {
  return (
    <div className={styles.container}>
      <SummonerForm />
    </div>
  );
};

export default LeagueStats;
