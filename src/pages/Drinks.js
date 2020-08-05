import React from 'react';
import RenderDrinks from '../components/RenderCards/RenderDrinks';
import Footer from '../components/Footer/Footer';
import Header from '../components/header/Header';
import Carousel from '../components/Carousel/Carousel';

const Drinks = () => (
  <div>
    <Header />
    <div>
      <RenderDrinks />
      <Carousel />
    </div>
    <Footer />
  </div>
);

export default Drinks;
