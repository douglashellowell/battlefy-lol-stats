import { MatchStatApiResponse, SummonerSearchOptions } from '../../types';
import SummonerForm from '../SummonerForm/SummonerForm';
import styles from './LeagueStats.module.scss';
import { useContext } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import SelectedSummonerData from '../SelectedSummonerData/SelectedSummonerData';
import { fetchMatchStatsBySummonerName } from '../../api';
import MatchList from '../MatchList/MatchList';
import { SearchParamsContext } from '../../contexts/SearchParamsContext';
import useMatchStats from '../../hooks/useMatchStats';

const LeagueStats = () => {
  const [searchParams, setSearchParams] = useContext(SearchParamsContext);

  const handleFormSubmit = (formData: SummonerSearchOptions) => {
    setSearchParams(formData);
  };

  const { data, isError, isLoading } = useMatchStats(searchParams);

  const showLoadingSpinner = isLoading && !isError;

  return (
    <div className={styles.container}>
      <SummonerForm onFormSubmit={handleFormSubmit} />

      {showLoadingSpinner ? (
        <Loading />
      ) : isError ? (
        <p>Something went wrong, sorry!</p>
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
