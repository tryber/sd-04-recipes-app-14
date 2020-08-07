import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { ModeloFood, ModeloDrink } from './Modelo';

class AuxCarousel extends React.Component {
  render() {
    const { drinks, foods, drinksLoading, foodsLoading } = this.props;
    const type = window.location.href.includes('comidas');
    if (!drinksLoading && !foodsLoading) {
      if (type) {
        return (
          <div>
            <Carousel
              arrows
              slidesPerPage={2}
              slidesPerScroll={1}
              animationSpeed={1500}
              autoPlay={3000}
              stopAutoPlayOnHover
              centered
            >
              {drinks.slice(0, 6).map((e, index) => {
                return <ModeloDrink data={e} index={index} />;
              })}
            </Carousel>
          </div>
        );
      }
      if (!type) {
        return (
          <div>
            <Carousel
              arrows
              slidesPerPage={2}
              slidesPerScroll={1}
              animationSpeed={1500}
              autoPlay={3000}
              stopAutoPlayOnHover
              centered
            >
              {foods.slice(0, 6).map((e, index) => {
                return <ModeloFood data={e} index={index} />;
              })}
            </Carousel>
          </div>
        );
      }
    }
    return null;
  }
}

AuxCarousel.propTypes = {
  drinks: PropTypes.shape({
    idDrink: PropTypes.string,
    strDrink: PropTypes.string,
    strDrinkThumb: PropTypes.string,
  }).isRequired,
  drinksLoading: PropTypes.bool.isRequired,
  foods: PropTypes.PropTypes.shape({
    idMeal: PropTypes.string,
    strMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
  }).isRequired,
  foodsLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  indexInitial: state.reducerCarousel.indexInitial,
  indexLast: state.reducerCarousel.indexLast,
  drinks: state.reducerDrinks.Drinks,
  foods: state.reducerFoods.Foods,
  drinksLoading: state.reducerDrinks.isLoading,
  foodsLoading: state.reducerFoods.isLoading,
});

export default connect(mapStateToProps)(AuxCarousel);
