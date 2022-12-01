import { createContext, ReactNode, useState } from 'react';
import { SummonerSearchOptions } from '../types';

export const SearchParamsContext = createContext<
  [
    SummonerSearchOptions,
    React.Dispatch<React.SetStateAction<SummonerSearchOptions>>
  ]
>([
  {
    region: 'na1',
    summonerName: '',
    type: 'ranked',
  },
  () => {},
]);

type SearchParamsContextProviderProps = {
  children: ReactNode;
};

const SearchParamsContextProvider = ({
  children,
}: SearchParamsContextProviderProps) => {
  const [searchParams, setSearchParams] = useState<SummonerSearchOptions>({
    region: 'na1',
    summonerName: '',
    type: 'ranked',
  });

  return (
    <SearchParamsContext.Provider value={[searchParams, setSearchParams]}>
      {children}
    </SearchParamsContext.Provider>
  );
};

export default SearchParamsContextProvider;
