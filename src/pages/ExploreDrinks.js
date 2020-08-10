import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const ExploreDrinks = ({ name = 'Explorar Bebidas' }) => (
  <div>
    <Header name={name} />
    <Footer />
  </div>
);

ExploreDrinks.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ExploreDrinks;
