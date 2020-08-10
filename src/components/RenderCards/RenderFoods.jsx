import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import './Renders.css';
import oneResultOrError from '../../Helper/SearchBar-Missing';

function RenderFoods({ foods, isLoading }) {
  if (isLoading) return null;
  if (foods === null) {
    oneResultOrError(foods, 'comidas', 'idMeal');
    return null;
  }
  if (foods.length === 1) return <Redirect to={`/comidas/${foods[0].idMeal}`} />;
  return foods.map((food, index) => {
    if (index < 12) {
      return (
        <div data-testid={`${index}-recipe-card`} className="foods-card" key={food.idMeal}>
          <Link to={`/comidas/${food.idMeal}`}>
            <img
              className="picture-cards-food"
              data-testid={`${index}-card-img`}
              src={food.strMealThumb}
              alt={food.strMeal}
            />
            <p data-testid={`${index}-card-name`}>{food.strMeal}</p>
          </Link>
        </div>
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
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  foods: state.reducerFoods.Foods,
  isLoading: state.reducerFoods.isLoading,
});

export default connect(mapStateToProps)(RenderFoods);
