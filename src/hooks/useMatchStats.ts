import { useQuery } from 'react-query';
import { fetchMatchStatsBySummonerName } from '../api';
import { MatchStatApiResponse, SummonerSearchOptions } from '../types';

function useMatchStats({ region, summonerName, type }: SummonerSearchOptions) {
  return useQuery<{}, {}, MatchStatApiResponse>(
    ['matches', summonerName, region, type],
    () => fetchMatchStatsBySummonerName({ region, summonerName, type }),
    {
      enabled: summonerName !== '',
      retry: false,
    }
  );
}

export default useMatchStats;
