import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';

const ExploreButtons = ({ type }) => {
  const history = useHistory();
  const getRandomRecipe = () => {
    if (document.URL.includes('comidas')) {
      return fetch('https://www.themealdb.com/api/json/v1/1/random.php').then((data) =>
        data.json().then((json) => history.push(`/comidas/${json.meals[0].idMeal}`)),
      );
    }
    return fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php').then((data) =>
      data.json().then((json) => history.push(`/bebidas/${json.drinks[0].idDrink}`)),
    );
  };
  const redirectTo = (path) => {
    history.push(`/explorar/${type}/${path}`);
  };
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          redirectTo('ingredientes');
        }}
        data-testid="explore-by-ingredient"
      >
        Por Ingredientes
      </button>
      {type === 'comidas' && (
        <button
          type="button"
          onClick={() => {
            redirectTo('area');
          }}
          data-testid="explore-by-area"
        >
          Por Local de Origem
        </button>
      )}
      <button type="button" onClick={() => getRandomRecipe()} data-testid="explore-surprise">
        Me Surpreenda!
      </button>
    </div>
  );
};

ExploreButtons.propTypes = {
  type: PropTypes.string.isRequired,
};

export default ExploreButtons;
