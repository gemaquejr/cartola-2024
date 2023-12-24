import React, { useState } from 'react';
import LeaderboardTable from '../../components/LeaderboardTable/LeaderboardTable';
import TableFilter from '../../components/TableFilter';

import styles from './Leaderboard.module.css';

const Leaderboard = () => {
  const [currentFilter, setCurrentFilter] = useState('Classificação Geral');

  return (
    <>
      <div className={styles.classification_handlers}>
        <TableFilter
          currentFilter={ currentFilter }
          setCurrentFilter={ setCurrentFilter }
        />
      </div>
      <LeaderboardTable
        currentFilter={ currentFilter }
        setCurrentFilter={ setCurrentFilter }
      />
    </>
  );
};

export default Leaderboard;