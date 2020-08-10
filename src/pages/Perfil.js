import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Perfil = ({ name = 'Perfil' }) => (
  <div>
    <Header name={name} />
    <Footer />
  </div>
);

Perfil.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Perfil;
