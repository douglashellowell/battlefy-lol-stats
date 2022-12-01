export type SummonerSearchOptions = {
  summonerName: string;
  region: TRegion;
  type: TGameType;
};

export const regions = [
  'br1',
  'eun1',
  'euw1',
  'jp1',
  'kr',
  'la1',
  'la2',
  'na1',
  'oc1',
  'tr1',
  'ru',
] as const;
export type TRegion = typeof regions[number];

export const gameType = ['ranked', 'normal', 'tourney', 'tutorial'] as const;
export type TGameType = typeof gameType[number];
