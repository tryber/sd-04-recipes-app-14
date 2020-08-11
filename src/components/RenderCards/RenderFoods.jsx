import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import './Renders.css';
import oneResultOrError from '../../Helper/SearchBar-Missing';

function RenderFoods(props) {
  const { foods, index } = props;
  if (foods === null) {
    oneResultOrError(foods, 'comidas', 'idMeal');
    return null;
  }
  if (foods.length === 1) return <Redirect to={`/comidas/${foods[0].idMeal}`} />;
  return (
    <div data-testid={`${index}-recipe-card`} className="foods-card" key={foods.idMeal}>
      <Link to={`/comidas/${foods.idMeal}`}>
        <img
          className="picture-cards-food"
          data-testid={`${index}-card-img`}
          src={foods.strMealThumb}
          alt={foods.strMeal}
        />
        <p data-testid={`${index}-card-name`}>{foods.strMeal}</p>
      </Link>
    </div>
  );
}

RenderFoods.propTypes = {
  foods: PropTypes.shape({
    idMeal: PropTypes.any,
    length: PropTypes.number,
    map: PropTypes.func,
    strMeal: PropTypes.any,
    strMealThumb: PropTypes.any,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default RenderFoods;
