import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import './Renders.css';
import oneResultOrError from '../../Helper/SearchBar-Missing';

function RenderDrinks(props) {
  const { drink, index } = props;
  if (drink === null) {
    oneResultOrError(drink);
    return null;
  }
  console.log(drink.idDrink);
  if (drink.length === 1) return <Redirect to={`/bebidas/${drink.idDrink}`} />;
  return (
    <div
      data-testid={`${index}-recipe-card`}
      className="foods-card"
      id={drink.idDrink}
      key={drink.strDrink}
    >
      <Link to={`/bebidas/${drink.idDrink}`}>
        <img
          className="picture-cards-food"
          data-testid={`${index}-card-img`}
          src={drink.strDrinkThumb}
          alt={drink.strDrink}
        />
        <p data-testid={`${index}-card-name`}>{drink.strDrink}</p>
      </Link>
    </div>
  );
}

RenderDrinks.propTypes = {
  drink: PropTypes.shape({
    idDrink: PropTypes.number,
    length: PropTypes.number,
    strDrink: PropTypes.string,
    strDrinkThumb: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  drinks: state.reducerDrinks.Drinks,
  isLoading: state.reducerDrinks.isLoading,
});

export default connect(mapStateToProps)(RenderDrinks);
