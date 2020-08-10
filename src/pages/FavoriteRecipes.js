import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';

const FavoriteRecipes = ({ name = 'Receitas Favoritas' }) => {
  return (
    <div>
      <Header name={name} />
    </div>
  );
};

FavoriteRecipes.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FavoriteRecipes;
