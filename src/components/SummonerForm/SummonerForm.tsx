import { useState } from 'react';
import { SummonerSearchOptions } from '../../types';
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
        <input
          type="text"
          name="region"
          id="regionInput"
          value={formInputs.region}
          onChange={(e) =>
            setFormInputs((prevInputs) => ({
              ...prevInputs,
              region: e.target.value,
            }))
          }
        />
      </label>
      <label htmlFor="typeInput" className={styles.type}>
        Game Type:
        <input
          type="text"
          name="type"
          id="typeInput"
          value={formInputs.type}
          onChange={(e) =>
            setFormInputs((prevInputs) => ({
              ...prevInputs,
              type: e.target.value,
            }))
          }
        />
      </label>
      <button type="submit" className={styles.submit}>
        GO
      </button>
    </form>
  );
};

export default SummonerForm;
