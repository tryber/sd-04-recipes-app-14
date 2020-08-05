import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React from 'react';
import CreateArray from './CreateArray';
import { actionCarousel } from '../../action/actionCarousel';
import { ModeloFood, ModeloDrink } from './Modelo';

const increaseCar = (indexInitial, changeIndex) => {
  if (indexInitial === 0) return changeIndex(2, 3);
  if (indexInitial === 2) return changeIndex(4, 5);
  if (indexInitial === 4) return changeIndex(0, 1);
  return null;
};

const decreaseCar = (indexInitial, changeIndex) => {
  if (indexInitial === 0) return changeIndex(4, 5);
  if (indexInitial === 2) return changeIndex(0, 1);
  if (indexInitial === 4) return changeIndex(2, 3);
  return null;
};

function AuxCarousel({ indexInitial, indexLast, drinks, foods, changeIndex }) {
  const type = window.location.href.includes('comidas');
  if (type) {
    const recomendation = CreateArray(foods);
    return (
      <div className="div-carousel-cards">
        <button type="button" onClick={() => decreaseCar(indexInitial, changeIndex)}>
          &lt;
        </button>
        <ModeloFood data={foods[indexInitial]} index={indexInitial} />
        <ModeloFood data={foods[indexLast]} index={indexLast} />
        <button type="button" onClick={() => increaseCar(indexInitial, changeIndex)}>
          &gt;
        </button>
      </div>
    );
  }

  const recomendation = CreateArray(drinks);

  return (
    <div className="div-carousel-cards">
      <button type="button" onClick={() => decreaseCar(indexInitial, changeIndex)}>
        &lt;
      </button>
      <ModeloDrink data={recomendation[indexInitial]} index={indexInitial} />
      <ModeloDrink data={recomendation[indexLast]} index={indexLast} />
      <button type="button" onClick={() => increaseCar(indexInitial, changeIndex)}>
        &gt;
      </button>
    </div>
  );
}

AuxCarousel.propTypes = {
  drinks: PropTypes.object.isRequired,
  foods: PropTypes.object.isRequired,
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
