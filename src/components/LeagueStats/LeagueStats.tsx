import { SummonerSearchOptions } from '../../types';
import SummonerForm from '../SummonerForm/SummonerForm';
import styles from './LeagueStats.module.scss';
import { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const LeagueStats = () => {
  const [searchParams, setSearchParams] = useState<SummonerSearchOptions>({
    region: 'na1',
    summonerName: '',
    type: 'ranked',
  });

  const handleFormSubmit = (formData: SummonerSearchOptions) => {
    setSearchParams(formData);
  };

  const { data, isError, isLoading } = useQuery(
    [
      'matches',
      searchParams.summonerName,
      searchParams.region,
      searchParams.type,
    ],
    () =>
      axios.get(
        `https://lol-stats.onrender.com/stats/by-name/${searchParams.summonerName}`,
        {
          params: {
            platform: searchParams.region,
            type: searchParams.type,
            count: 5, // Add form option later??
          },
        }
      ),
    {
      enabled: searchParams.summonerName !== '',
      retry: false,
    }
  );

  return (
    <div className={styles.container}>
      <SummonerForm onFormSubmit={handleFormSubmit} />

      {JSON.stringify(data)}
    </div>
  );
};

export default LeagueStats;
