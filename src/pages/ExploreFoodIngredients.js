import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const ExploreFoodIngredients = ({ name = 'Explorar Ingredientes' }) => {
  return (
    <div>
      <Header name={name} />
      <Footer />
    </div>
  );
};

ExploreFoodIngredients.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ExploreFoodIngredients;
