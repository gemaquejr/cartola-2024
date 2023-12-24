import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { negativeLogo, exitToAppImg } from '../../assets';

import styles from './Header.module.css';

const Header = ({
  page,
}) => {
  const navigate = useNavigate();

  const logoff = () => {
    navigate('/leaderboard');
  };

  return (
    <header className={styles.common_header}>
      <div className={styles.image_content}>
        <img src={ negativeLogo } alt="Cartola Logo" />
      </div>
      <h1>{ page }</h1>
      <div className={styles.buttons_content}>
        <button type="button" onClick={ () => logoff() }>
            Sair
            <img src={ exitToAppImg } alt="Sair do aplicativo" />
        </button>
      </div>
    </header>
  );
};

Header.propTypes = {
    page: PropTypes.string.isRequired,
  };

export default Header;