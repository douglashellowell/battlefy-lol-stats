import { MatchStatApiResponse, SummonerSearchOptions } from '../../types';
import SummonerForm from '../SummonerForm/SummonerForm';
import styles from './LeagueStats.module.scss';
import { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import SelectedSummonerData from '../SelectedSummonerData/SelectedSummonerData';
import { fetchMatchStatsBySummonerName } from '../../api';
import MatchList from '../MatchList/MatchList';

const LeagueStats = () => {
  const [searchParams, setSearchParams] = useState<SummonerSearchOptions>({
    region: 'na1',
    summonerName: '',
    type: 'ranked',
  });

  const handleFormSubmit = (formData: SummonerSearchOptions) => {
    setSearchParams(formData);
  };

  const { data, isError, isLoading } = useQuery<{}, {}, MatchStatApiResponse>(
    [
      'matches',
      searchParams.summonerName,
      searchParams.region,
      searchParams.type,
    ],
    () => fetchMatchStatsBySummonerName(searchParams),
    {
      enabled: searchParams.summonerName !== '',
      retry: false,
    }
  );

  const showLoadingSpinner = isLoading && !isError;

  return (
    <div className={styles.container}>
      <SummonerForm onFormSubmit={handleFormSubmit} />

      {showLoadingSpinner ? (
        <Loading />
      ) : isError ? (
        <p>err!</p>
      ) : data ? (
        <>
          <SelectedSummonerData selectedSummoner={data.summoner} />
          <MatchList
            matches={data.matches}
            selectedSummoner={data.summoner.name}
          />
        </>
      ) : null}
    </div>
  );
};

export default LeagueStats;
