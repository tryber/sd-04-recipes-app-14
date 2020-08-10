import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const ExploreFood = ({ name = 'Explorar Comidas' }) => {
  return (
    <div>
      <Header name={name} />
      <Footer />
    </div>
  );
};

ExploreFood.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ExploreFood;
