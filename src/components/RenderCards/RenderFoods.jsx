import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import './Renders.css';

function RenderFoods({ foods }) {
  if (foods.length === 0) return <p>Nenhum pesquisa Feita</p>;
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
});

export default connect(mapStateToProps)(RenderFoods);
