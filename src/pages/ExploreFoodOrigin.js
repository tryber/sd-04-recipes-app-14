import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const ExploreFoodOrigin = ({ search = true, name = 'Explorar Origem' }) => (
  <div>
    <Header search={search} name={name} />
    <Footer />
  </div>
);

ExploreFoodOrigin.propTypes = {
  search: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default ExploreFoodOrigin;
