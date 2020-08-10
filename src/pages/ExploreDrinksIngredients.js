import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const ExploreDrinksIngredients = ({ name = 'Explorar Ingredientes' }) => {
  return (
    <div>
      <Header name={name} />
      <Footer />
    </div>
  );
};

ExploreDrinksIngredients.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ExploreDrinksIngredients;
