import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const Explore = ({ name = 'Explorar' }) => (
  <div>
    <Header name={name} />
    <Footer />
  </div>
);

Explore.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Explore;
