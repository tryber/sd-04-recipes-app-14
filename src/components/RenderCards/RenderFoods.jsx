import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import './Renders.css';
import oneResultOrError from '../../Helper/SearchBar-Missing';

function RenderFoods({ foods, isLoading }) {
  if (isLoading) return null;
  if (foods === null || foods.length === 1) return oneResultOrError(foods, 'comidas');
  return foods.map((food, index) => {
    if (index < 12) {
      return (
        <Link to={`/comidas/${food.idMeal}`}>
          <div className="foods-card" key={food.idMeal}>
            <img
              className="picture-cards-food"
              data-testid={`${index}-card-image`}
              src={food.strMealThumb}
              alt={food.strMeal}
            />
            <p data-testid={`${index}-card-name`}>{food.strMeal}</p>
          </div>
        </Link>
      );
    }
    return null;
  });
}

RenderFoods.propTypes = {
  foods: PropTypes.shape({
    length: PropTypes.number,
    map: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  foods: state.reducerFoods.Foods,
  isLoading: state.reducerFoods.isLoading,
});

export default connect(mapStateToProps)(RenderFoods);
