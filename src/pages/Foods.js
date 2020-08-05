import React from 'react';
import RenderFoods from '../components/RenderCards/RenderFoods';
import Footer from '../components/Footer/Footer';
import Header from '../components/header/Header';
import Carousel from '../components/Carousel/Carousel';

const Foods = () => (
  <div>
    <Header />
    <div>
      <RenderFoods />
      <Carousel />
    </div>
    <Footer />
  </div>
);

export default Foods;
