import React from 'react';
import RenderFoods from '../components/RenderCards/RenderFoods';
import Footer from '../components/Footer/Footer';
import Header from '../components/header/Header';

const Foods = () => (
  <div>
    <Header />
    <div>
      <RenderFoods />
    </div>
    <Footer />
  </div>
);

export default Foods;
