import React from 'react';
import PropTypes from 'prop-types';

const GamerFilter = ({ currentFilter, setCurrentFilter }) => {
  const handleCurrentFilter = () => {
    const selectedFilter = document.getElementById('classification_filter').value;
    setCurrentFilter(selectedFilter);
  };

  return (
    <form>
      <label htmlFor="classification_filter">
        Partidas:
        <select
          id="classification_filter"
          defaultValue={ currentFilter }
        >
          <option>Classificação Geral</option>
        </select>
      </label>
      <button
        type="button"
        onClick={ () => handleCurrentFilter() }
      >
        Buscar
      </button>
    </form>
  );
};

GamerFilter.propTypes = ({
  currentFilter: PropTypes.string,
  setCurrentFilter: PropTypes.func,
}).isRequired;

export default GamerFilter;