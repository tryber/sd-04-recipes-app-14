import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Perfil = ({ name = 'Perfil' }) => (
  <div>
    <Header name={name} />
    <Footer />
  </div>
);

export default Perfil;
