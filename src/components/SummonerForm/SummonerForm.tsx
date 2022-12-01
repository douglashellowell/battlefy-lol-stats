import { useState } from 'react';
import {
  gameType,
  regions,
  SummonerSearchOptions,
  TGameType,
  TRegion,
} from '../../types';
import styles from './SummonerForm.module.scss';

const SummonerForm = () => {
  const [formInputs, setFormInputs] = useState<SummonerSearchOptions>({
    region: 'na1',
    summonerName: '',
    type: 'ranked',
  });

  return (
    <form className={styles.form}>
      <label htmlFor="summonerNameInput" className={styles.summonerName}>
        Summoner Name:
        <input
          type="text"
          name="summonerName"
          id="summonerNameInput"
          value={formInputs.summonerName}
          onChange={(e) =>
            setFormInputs((prevInputs) => ({
              ...prevInputs,
              summonerName: e.target.value,
            }))
          }
        />
      </label>
      <label htmlFor="regionInput" className={styles.region}>
        Region:
        <select
          name="region"
          id="regionInput"
          onChange={(e) =>
            setFormInputs((prevInputs) => ({
              ...prevInputs,
              region: e.target.value as TRegion,
            }))
          }
          value={formInputs.region}
        >
          {regions.map((region) => {
            return <option value={region}>{region}</option>;
          })}
        </select>
      </label>
      <label htmlFor="typeInput" className={styles.type}>
        Game Type:
        <select
          name="type"
          id="typeInput"
          value={formInputs.type}
          onChange={(e) =>
            setFormInputs((prevInputs) => ({
              ...prevInputs,
              type: e.target.value as TGameType,
            }))
          }
        >
          {gameType.map((type) => {
            return <option value={type}>{type}</option>;
          })}
        </select>
      </label>
      <button type="submit" className={styles.submit}>
        GO
      </button>
    </form>
  );
};

export default SummonerForm;
