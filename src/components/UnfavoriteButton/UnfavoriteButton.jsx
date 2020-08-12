import PropTypes from 'prop-types';
import React from 'react';
import blackHeartIcon from '../../images/blackHeartIcon.svg';

const UnfavoriteButton = ({ idRecipe, dataTestId }) => {
  const unfavoriteRecipe = () => {
    const local = JSON.parse(localStorage.favoriteRecipes);
    const newLocal = local.filter(({ id }) => id !== idRecipe);
    localStorage.favoriteRecipes = JSON.stringify(newLocal);
  };
  return (
    <input
      type="image"
      onClick={() => {
        unfavoriteRecipe(idRecipe);
      }}
      src={blackHeartIcon}
      alt="Unfavorite button"
      data-testid={dataTestId}
    />
  );
};

UnfavoriteButton.propTypes = {
  idRecipe: PropTypes.number.isRequired,
};

export default UnfavoriteButton;
