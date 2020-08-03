import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import './Renders.css';
import oneResultOrError from '../../Helper/SearchBar-Missing';

function RenderDrinks({ drinks, isLoading }) {
  if (isLoading) return null;
  if (drinks === null || drinks.length === 1) return oneResultOrError(drinks, 'bebidas');
  return drinks.map((drink, index) => {
    if (index < 12) {
      return (
        <Link to={`/bebidas/${drink.idDrink}`}>
          <div className="foods-card" id={drink.idDrink} key={drink.strDrink}>
            <img
              className="picture-cards-food"
              data-testid={`${index}-card-image`}
              src={drink.strDrinkThumb}
              alt={drink.strDrink}
            />
            <p data-testid={`${index}-card-name`}>{drink.strDrink}</p>
          </div>
        </Link>
      );
    }
    return null;
  });
}

RenderDrinks.propTypes = {
  drinks: PropTypes.shape({
    length: PropTypes.number,
    map: PropTypes.func,
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  drinks: state.reducerDrinks.Drinks,
  isLoading: state.reducerDrinks.isLoading,
});

export default connect(mapStateToProps)(RenderDrinks);
