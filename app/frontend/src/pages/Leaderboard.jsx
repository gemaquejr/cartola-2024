import React, { useState } from 'react';
import LeaderboardTable from '../components/Leaderboard/LeaderboardTable';
import TableFilter from '../components/TableFilter';

const Leaderboard = () => {
  const [currentFilter, setCurrentFilter] = useState('Classificação Geral');

  return (
    <>
      <div className="classification-handlers score-board-table-section">
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