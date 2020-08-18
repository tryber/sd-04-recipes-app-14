import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ExploreButtons from '../components/ExploreButtons/ExploreButtons';

const ExploreFood = ({ name = 'Explorar Comidas' }) => (
  <div>
    <Header name={name} />
    <ExploreButtons type="comidas" />
    <Footer />
  </div>
);

ExploreFood.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ExploreFood;
