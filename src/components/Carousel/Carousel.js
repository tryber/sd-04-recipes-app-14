import PropTypes from 'prop-types';
import React from 'react';
import { connect, useSelector } from 'react-redux';
import AuxCarousel from './AuxCarousel';
import './carousel.css';

function Carousel() {
  const foods = useSelector((state) => state.reducerFoods.Foods);
  const drinks = useSelector((state) => state.reducerDrinks.Drinks);
  console.log(foods, drinks);
  return (
    <div>
      <h2>Recomendações:</h2>
      <AuxCarousel />
    </div>
  );
}

Carousel.propTypes = {
  drinksLoading: PropTypes.bool.isRequired,
  foodsLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  drinksLoading: state.reducerDrinks.isLoading,
  foodsLoading: state.reducerFoods.isLoading,
});

export default connect(mapStateToProps)(Carousel);
