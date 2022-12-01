import { Match, Participant } from '../../types';
import ItemIcon from '../Icons/ItemIcon/ItemIcon';
import TeamList from '../TeamList/TeamList';
import styles from './MatchCard.module.scss';
import summonerSpells from '../../assets/summonerSpells.json';

type MatchCardProps = {
  match: Match;
  selectedSummoner: string;
};

const MatchCard = ({ match, selectedSummoner }: MatchCardProps) => {
  const selectedSummonerProfile = match.info.participants.find(
    (party) => party.summonerName === selectedSummoner
  ) as Participant; // TODO - selected summoner _should_ always be in match - but type weakness here...

  const isWinningMatch = selectedSummonerProfile.win;

  const chosenSummonerSpell1 = Object.entries(summonerSpells.data).find(
    ([name, spell]) => {
      return spell.key === `${selectedSummonerProfile.summoner1Id}`;
    }
  );
  const chosenSummonerSpell2 = Object.entries(summonerSpells.data).find(
    ([name, spell]) => spell.key === `${selectedSummonerProfile.summoner2Id}`
  );

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
      {/* KDA, spells items*/}
      <div className={styles.block}>
        <p>
          <span>{selectedSummonerProfile.kills}</span> /{' '}
          <span>{selectedSummonerProfile.deaths}</span> /{' '}
          <span>{selectedSummonerProfile.assists}</span>
        </p>

        {chosenSummonerSpell1 ? (
          <img
            src={`/images/spells/summonerSpells/${chosenSummonerSpell1[0]}.png`}
            alt={chosenSummonerSpell1[1].name}
          />
        ) : (
          <p>spell not found</p>
        )}
        {chosenSummonerSpell2 ? (
          <img
            src={`/images/spells/summonerSpells/${chosenSummonerSpell2[0]}.png`}
            alt={chosenSummonerSpell2[1].name}
          />
        ) : (
          <p>spell not found</p>
        )}

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
      <div className={styles.block}>
        {selectedSummonerProfile.perks.styles.map((perk) => {
          return (
            <div key={perk.style}>
              <img src={`/images/perkStyle/${perk.style}.png`} />

              {/* TODO: FIND PERK IMAGES or DATA!! */}
              {/* {perk.selections.map((selection) => {
                console.log(selection);

                return <img src="" />;
              })} */}
            </div>
          );
        })}
        <span>
          def:
          <img
            src={`images/statMods/${selectedSummonerProfile.perks.statPerks.defense}.png`}
            alt="defence stat"
          />
        </span>
        <span>
          off:
          <img
            src={`images/statMods/${selectedSummonerProfile.perks.statPerks.offense}.png`}
            alt="offence stat"
          />
        </span>
        <span>
          flx:
          <img
            src={`images/statMods/${selectedSummonerProfile.perks.statPerks.flex}.png`}
            alt="flex stat"
          />
        </span>
      </div>
      {/* teams */}
      <div className={styles.block}>
        <TeamList teams={match.info.participants} />
      </div>
    </article>
  );
};

export default MatchCard;
