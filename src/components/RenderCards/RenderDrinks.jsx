import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import './Renders.css';

function RenderDrinks({ drinks, isLoading }) {
  console.log(drinks);
  if (isLoading) return null;
  if (isLoading && drinks.length === 0) {
    return alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  }
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
