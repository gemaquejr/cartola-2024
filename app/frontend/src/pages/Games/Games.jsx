import React from 'react';
import Header from '../../components/Header/Header';

import styles from './Games.module.css';

const Games = () => {
  return (
    <>
      <Header
        page="PARTIDAS"
      />
      <section className={styles.games_section}>
        <div className={styles.games_handlers}>
        </div>
      </section>
    </>
  );
};

export default Games;