import { Match, Participant } from '../../types';
import ItemIcon from '../Icons/ItemIcon/ItemIcon';
import styles from './MatchCard.module.scss';

type MatchCardProps = {
  match: Match;
  selectedSummoner: string;
};

const MatchCard = ({ match, selectedSummoner }: MatchCardProps) => {
  const selectedSummonerProfile = match.info.participants.find(
    (party) => party.summonerName === selectedSummoner
  ) as Participant; // TODO - selected summoner _should_ always be in match - but type weakness here...

  const isWinningMatch = selectedSummonerProfile.win;

  return (
    <article>
      {/* pic , win/loss , level, cham name*/}
      <div className={styles.block}>
        {<p>{isWinningMatch ? 'Victory' : 'Defeat'}</p>}
        <img
          src={`images/champion/${selectedSummonerProfile.championName}.png`}
          alt={selectedSummonerProfile.championName}
        />
        <p>{selectedSummonerProfile.championName}</p>
      </div>
      {/* KDA, items*/}
      <div className={styles.block}>
        <p>
          <span>{selectedSummonerProfile.kills}</span> /{' '}
          <span>{selectedSummonerProfile.deaths}</span> /{' '}
          <span>{selectedSummonerProfile.assists}</span>
        </p>

        <ul>
          <ItemIcon itemNumber={selectedSummonerProfile.item0} />
          <ItemIcon itemNumber={selectedSummonerProfile.item1} />
          <ItemIcon itemNumber={selectedSummonerProfile.item2} />
          <ItemIcon itemNumber={selectedSummonerProfile.item3} />
          <ItemIcon itemNumber={selectedSummonerProfile.item4} />
          <ItemIcon itemNumber={selectedSummonerProfile.item5} />
          <ItemIcon itemNumber={selectedSummonerProfile.item6} />
        </ul>
      </div>
      {/* perks */}
      <div className={styles.block}></div>
      {/* teams */}
      <div className={styles.block}></div>
    </article>
  );
};

export default MatchCard;
