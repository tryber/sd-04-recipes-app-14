import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React from 'react';
import { actionCarousel } from '../../actions/actionCarousel';
import { ModeloFood, ModeloDrink } from './Modelo';

class AuxCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.decreaseCar = this.decreaseCar.bind(this);
    this.increaseCar = this.increaseCar.bind(this);
  }

  increaseCar() {
    const { indexInitial, changeIndex } = this.props;
    if (indexInitial === 0) return changeIndex(2, 3);
    if (indexInitial === 2) return changeIndex(4, 5);
    if (indexInitial === 4) return changeIndex(0, 1);
    return null;
  }

  decreaseCar() {
    const { indexInitial, changeIndex } = this.props;
    if (indexInitial === 0) return changeIndex(4, 5);
    if (indexInitial === 2) return changeIndex(0, 1);
    if (indexInitial === 4) return changeIndex(2, 3);
    return null;
  }

  render() {
    const { indexInitial, indexLast, drinks, foods, changeIndex } = this.props;
    const type = window.location.href.includes('comidas');
    if (foods.length > 0 && drinks.length > 0) {
      console.log('passou');
      if (type) {
        console.log(drinks, 'drinks');
        return (
          <div className="div-carousel-cards">
            <button type="button" onClick={() => this.decreaseCar(indexInitial, changeIndex)}>
              &lt;
            </button>
            <ModeloDrink data={drinks[indexInitial]} index={indexInitial} />
            <ModeloDrink data={drinks[indexLast]} index={indexLast} />
            <button type="button" onClick={() => this.increaseCar(indexInitial, changeIndex)}>
              &gt;
            </button>
          </div>
        );
      }
      if (!type) {
        console.log(foods, 'foods');
        return (
          <div className="div-carousel-cards">
            <button type="button" onClick={() => this.decreaseCar(indexInitial, changeIndex)}>
              &lt;
            </button>
            <ModeloFood data={foods[indexInitial]} index={indexInitial} />
            <ModeloFood data={foods[indexLast]} index={indexLast} />
            <button type="button" onClick={() => this.increaseCar(indexInitial, changeIndex)}>
              &gt;
            </button>
          </div>
        );
      }
    }
    return null;
  }
}

AuxCarousel.propTypes = {
  changeIndex: PropTypes.func.isRequired,
  drinks: PropTypes.shape({
    idDrink: PropTypes.string,
    strDrink: PropTypes.string,
    strDrinkThumb: PropTypes.string,
  }).isRequired,
  foods: PropTypes.PropTypes.shape({
    idMeal: PropTypes.string,
    strMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
  }).isRequired,
  indexInitial: PropTypes.number.isRequired,
  indexLast: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  indexInitial: state.reducerCarousel.indexInitial,
  indexLast: state.reducerCarousel.indexLast,
  drinks: state.reducerDrinks.Drinks,
  foods: state.reducerFoods.Foods,
});

const mapDispatchToProps = (dispatch) => ({
  changeIndex: (a, b) => dispatch(actionCarousel(a, b)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuxCarousel);
