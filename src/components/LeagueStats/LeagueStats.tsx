import { SummonerSearchOptions } from '../../types';
import SummonerForm from '../SummonerForm/SummonerForm';
import styles from './LeagueStats.module.scss';
import { useState } from 'react';

const LeagueStats = () => {
  const [searchParams, setSearchParams] = useState<SummonerSearchOptions>({
    region: 'na1',
    summonerName: '',
    type: 'ranked',
  });

  const handleFormSubmit = (formData: SummonerSearchOptions) => {
    setSearchParams(formData);
  };

  return (
    <div className={styles.container}>
      <SummonerForm onFormSubmit={handleFormSubmit} />
    </div>
  );
};

export default LeagueStats;
