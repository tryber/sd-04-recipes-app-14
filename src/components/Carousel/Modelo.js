import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import './carousel.css';

export const ModeloFood = (props) => {
  const { data, index } = props;
  return (
    <div className="recomendation-card">
      <Link to={`/comidas/${data.idMeal}`}>
        <div className="foods-card" key={index}>
          <img
            className="picture-cards-food"
            data-testid={`${index}-recomendation-card`}
            src={data.strMealThumb}
            alt={data.strMeal}
          />
          <p data-testid={`${index}-card-name`}>{data.strMeal}</p>
        </div>
      </Link>
    </div>
  );
};

ModeloFood.propTypes = {
  data: PropTypes.shape({
    idMeal: PropTypes.string,
    strMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export const ModeloDrink = (props) => {
  const { data, index } = props;
  return (
    <div data-testid="recomendation-card" className="recomendation-card">
      <Link to={`/bebidas/${data.idDrink}`}>
        <div
          data-testid={`${index}-recomendation-card`}
          className="foods-card"
          id={data.idDrink}
          key={index}
        >
          <img className="picture-cards-food" src={data.strDrinkThumb} alt={data.strDrink} />
          <p data-testid={`${index}-recomendation-title`}>{data.strDrink}</p>
        </div>
      </Link>
    </div>
  );
};

ModeloDrink.propTypes = {
  data: PropTypes.shape({
    idDrink: PropTypes.string,
    strDrink: PropTypes.string,
    strDrinkThumb: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
