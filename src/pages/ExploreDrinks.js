import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ExploreButtons from '../components/ExploreButtons/ExploreButtons';

const ExploreDrinks = ({ name = 'Explorar Bebidas' }) => (
  <div>
    <Header name={name} />
    <ExploreButtons type="bebidas" />
    <Footer />
  </div>
);

ExploreDrinks.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ExploreDrinks;
