import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import AuxCarousel from './AuxCarousel';
import './carousel.css';

function Carousel({ foodsLoading, drinksLoading }) {
  if (!drinksLoading || !foodsLoading) {
    return (
      <div>
        <h2>Recomendações:</h2>
        <AuxCarousel />
      </div>
    );
  }
  return null;
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
