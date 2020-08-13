import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setFoodIngredient } from '../../actions/actionIngredient';
import './Renders.css';

function RenderFoodIng(props) {
  const { foods, index } = props;

  function handleClick() {
    const { sendIng } = props;
    const actualFood = foods.strIngredient;
    console.log(actualFood);
    sendIng(actualFood);
    return actualFood;
  }

  return (
    <Link to="/comidas/" onClick={() => handleClick()}>
      <div
        data-testid={`${index}-ingredient-card`}
        className="foods-card"
        key={foods.idIngredient}
      >
        <img
          className="picture-cards-food"
          data-testid={`${index}-card-img`}
          src={`https://www.themealdb.com/images/ingredients/${foods.strIngredient}-Small.png`}
          alt={foods.strIngredient}
        />
        <p data-testid={`${index}-card-name`}>{foods.strIngredient}</p>
      </div>
    </Link>
  );
}

const mapDispatchToProps = (dispatch) => ({
  sendIng: (ing) => dispatch(setFoodIngredient(ing)),
});

RenderFoodIng.propTypes = {
  foods: PropTypes.shape({
    idIngredient: PropTypes.any,
    strIngredient: PropTypes.any,
  }).isRequired,
  index: PropTypes.number.isRequired,
  sendIng: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(RenderFoodIng);
