import { SummonerDTO } from '../../types';
import styles from './SelectedSummoner.module.scss';

type SelectedSummonerDataProps = {
  selectedSummoner: SummonerDTO;
};

const SelectedSummonerData = ({
  selectedSummoner,
}: SelectedSummonerDataProps) => {
  return (
    <section className={styles.container}>
      <img
        src={`/images/profileicon/${selectedSummoner.profileIconId}.png`}
        alt={selectedSummoner.name} // TODO better alt needed
      />
      <h2>{selectedSummoner.name}</h2>
      <p>Lv. {selectedSummoner.summonerLevel}</p>
    </section>
  );
};

export default SelectedSummonerData;
