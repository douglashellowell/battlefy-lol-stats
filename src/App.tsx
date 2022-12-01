import './App.scss';
import LeagueStats from './components/LeagueStats/LeagueStats';

import SearchParamsContextProvider from './contexts/SearchParamsContext';

function App() {
  return (
    <div className="App">
      <SearchParamsContextProvider>
        <LeagueStats />
      </SearchParamsContextProvider>
    </div>
  );
}

export default App;
