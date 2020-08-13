import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import IngredientFood from '../components/ingredientCard/IngredientFood';

const ExploreFoodIngredients = ({ name = 'Explorar Ingredientes' }) => (
  <div>
    <Header name={name} />
    <IngredientFood />
    <Footer />
  </div>
);

ExploreFoodIngredients.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ExploreFoodIngredients;
