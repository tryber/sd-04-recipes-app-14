import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import './Renders.css';

function RenderFoods(props) {
  const { foods, index } = props;
  console.log(foods, index);
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
    length: PropTypes.number,
    map: PropTypes.func,
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default RenderFoods;
