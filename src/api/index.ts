import axios from 'axios';
import { SummonerSearchOptions } from '../types';

export async function fetchMatchStatsBySummonerName({
  region,
  summonerName,
  type,
}: SummonerSearchOptions) {
  const res = await axios.get(
    `https://lol-stats.onrender.com/stats/by-name/${summonerName}`,
    {
      params: {
        platform: region,
        type: type,
        count: 5, // Add form option later??
      },
    }
  );

  return res.data;
}
