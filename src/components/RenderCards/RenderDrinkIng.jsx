import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Renders.css';
import { setDrinkIngredient } from '../../actions/actionIngredient';

function RenderDrinkIng(props) {
  const { foods, index } = props;

  function handlClick() {
    const { sendIng } = props;
    const actualDrink = foods.strIngredient1;
    sendIng(actualDrink);
    return actualDrink;
  }

  return (
    <Link to="/bebidas/" onClick={() => handlClick()}>
      <div data-testid={`${index}-ingredient-card`} className="foods-card">
        <img
          className="picture-cards-food"
          data-testid={`${index}-card-img`}
          src={`https://www.thecocktaildb.com/images/ingredients/${foods.strIngredient1}-Small.png`}
          alt={foods.strIngredient1}
        />
        <p data-testid={`${index}-card-name`}>{foods.strIngredient1}</p>
      </div>
    </Link>
  );
}

const mapDispatchToProps = (dispatch) => ({
  sendIng: (ing) => dispatch(setDrinkIngredient(ing)),
});

RenderDrinkIng.propTypes = {
  foods: PropTypes.shape({
    strIngredient1: PropTypes.any,
  }).isRequired,
  index: PropTypes.number.isRequired,
  sendIng: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(RenderDrinkIng);
