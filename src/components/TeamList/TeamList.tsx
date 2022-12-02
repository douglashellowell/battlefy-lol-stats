import { Participant } from '../../types';
import styles from './TeamList.module.scss';
import classnames from 'classnames';
import { useContext } from 'react';
import { SearchParamsContext } from '../../contexts/SearchParamsContext';

type TeamListProps = {
  teams: Participant[];
};

const TeamList = ({ teams }: TeamListProps) => {
  // create tuple separating teams
  const [teamA, teamB] = teams.reduce<[Participant[], Participant[]]>(
    (teamsArr, party) => {
      return party.teamId === 100
        ? [[...teamsArr[0], party], teamsArr[1]]
        : [teamsArr[0], [...teamsArr[1], party]];
    },
    [[], []]
  );

  return (
    <div className={styles.listContainer}>
      {/* team A teamID: 100 */}
      <Team team={teamA} />
      {/* team B teamID: 200 */}
      <Team team={teamB} />
    </div>
  );
};

type TeamProps = {
  team: Participant[];
};
const Team = ({ team }: TeamProps) => {
  const [_, setSearchParams] = useContext(SearchParamsContext);

  const setSelectedSummoner = (newSummoner: string) => {
    setSearchParams((prevParams) => {
      return {
        ...prevParams,
        summonerName: newSummoner,
      };
    });
  };

  return (
    <ul className={styles.teamUl}>
      {team.map((partyMember) => {
        return (
          <li
            key={partyMember.summonerId}
            className={classnames(styles.baseTeamMember, {
              [styles.teamA]: partyMember.teamId === 100,
              [styles.teamB]: partyMember.teamId === 200,
            })}
          >
            <img src={`images/champion/${partyMember.championName}.png`} />
            <div className={styles.champLevel}>
              <p>{partyMember.champLevel}</p>
            </div>
            <button
              onClick={() => setSelectedSummoner(partyMember.summonerName)}
            >
              {partyMember.summonerName}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default TeamList;
