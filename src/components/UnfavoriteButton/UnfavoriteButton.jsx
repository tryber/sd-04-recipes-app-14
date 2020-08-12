import PropTypes from 'prop-types';
import React from 'react';
import blackHeartIcon from '../../images/blackHeartIcon.svg';

const UnfavoriteButton = ({ idRecipe, dataTestId, setData }) => {
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
        setData();
      }}
      src={blackHeartIcon}
      alt="Unfavorite button"
      data-testid={dataTestId}
    />
  );
};

UnfavoriteButton.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  idRecipe: PropTypes.number.isRequired,
  setData: PropTypes.func.isRequired,
};

export default UnfavoriteButton;
