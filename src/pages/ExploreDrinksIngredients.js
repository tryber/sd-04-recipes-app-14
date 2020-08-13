import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import IngredientDrink from '../components/ingredientCard/IngredientDrink';

const ExploreDrinksIngredients = ({ name = 'Explorar Ingredientes' }) => (
  <div>
    <Header name={name} />
    <IngredientDrink />
    <Footer />
  </div>
);

ExploreDrinksIngredients.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ExploreDrinksIngredients;
