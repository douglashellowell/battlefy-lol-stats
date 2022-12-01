import { Match } from '../../types';
import MatchCard from '../MatchCard/MatchCard';
import styles from './MatchList.module.scss';

type MatchListProps = {
  matches: Match[];
  selectedSummoner: string;
};

const MatchList = ({ matches, selectedSummoner }: MatchListProps) => {
  return (
    <ul className={styles.list}>
      {matches.map((match) => {
        return (
          <li key={match.metadata.matchId} className={styles.listItem}>
            <MatchCard match={match} selectedSummoner={selectedSummoner} />
          </li>
        );
      })}
    </ul>
  );
};

export default MatchList;
