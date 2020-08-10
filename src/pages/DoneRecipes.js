import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';

const DoneRecipes = ({ name = 'Receitas Feitas' }) => {
  return (
    <div>
      <Header name={name} />
    </div>
  );
};

DoneRecipes.propTypes = {
  name: PropTypes.string.isRequired,
};

export default DoneRecipes;
