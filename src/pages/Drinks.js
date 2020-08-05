import React from 'react';
import RenderDrinks from '../components/RenderCards/RenderDrinks';
import Footer from '../components/Footer/Footer';
import Header from '../components/header/Header';

const Drinks = () => (
  <div>
    <Header />
    <div>
      <RenderDrinks />
    </div>
    <Footer />
  </div>
);

export default Drinks;
