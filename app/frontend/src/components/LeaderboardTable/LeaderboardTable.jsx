import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { requestData } from '../../services/requests';
import Loading from '../Loading';
import { v4 as uuidv4 } from 'uuid';
import styles from './LeaderboardTable.module.css';

const LeaderboardTable = ({ currentFilter }) => {
  const [leaderboard, setLeaderboard] = useState([]);

  const getLeaderboard = (endpoint) => requestData(endpoint)
    .then((response) => setLeaderboard(response))
    .catch((error) => console.log(error));

  useEffect(() => {
    const apiLeaderboard = '/leaderboard';
    switch (currentFilter) {
    default:
      getLeaderboard(apiLeaderboard);
      break;
    }
  }, [currentFilter]);

  useEffect(() => {
    const endpoint = '/leaderboard';

    if (leaderboard.length === 0) {
      getLeaderboard(endpoint);
    }
  }, [leaderboard]);

  if (!leaderboard.length) {
    return (<Loading />);
  }

  return (
    <section className={styles.score_board_table_section}>
      <table className={styles.score_board_table}>
        <thead>
          <tr>
            <th>Classificação</th>
            <th>Time</th>
            <th>P</th>
            <th>J</th>
            <th>V</th>
            <th>E</th>
            <th>D</th>
            <th>GP</th>
            <th>GC</th>
            <th>SG</th>
            <th>%</th>
          </tr>
        </thead>
        <tbody>
          {
            leaderboard.map(({
              name,
              totalPoints,
              totalGames,
              totalVictories,
              totalDraws,
              totalLosses,
              goalsFavor,
              goalsOwn,
              goalsBalance,
              efficiency,
            },
            index) => (
              <tr key={ uuidv4() }>
                <td
                  className={styles.score_board_classification}
                >
                  {`${index + 1}`}
                </td>
                <td
                  className={styles.score_board_team_name}
                >
                  {name}
                </td>
                <td
                  className={styles.score_board_total_points}
                >
                  { totalPoints }
                </td>
                <td
                  className={styles.score_board_total_games}
                >
                  { totalGames }
                </td>
                <td
                  className={styles.score_board_total_victories}
                >
                  { totalVictories }
                </td>
                <td
                  className={styles.score_board_total_draws}
                >
                  { totalDraws }
                </td>
                <td
                  className={styles.score_board_total_looses}
                >
                  { totalLosses }
                </td>
                <td
                  className={styles.score_board_goals_favor}
                >
                  { goalsFavor }
                </td>
                <td
                  className={styles.score_board_goals_own}
                >
                  { goalsOwn }
                </td>
                <td
                  className={styles.score_board_goals_balance}
                >
                  { goalsBalance }
                </td>
                <td
                  className={styles.score_board_efficiency}
                >
                  { efficiency }
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </section>
  );
};

LeaderboardTable.propTypes = {
  currentFilter: PropTypes.string.isRequired,
};
export default LeaderboardTable;