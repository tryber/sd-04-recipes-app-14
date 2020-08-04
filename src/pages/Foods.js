import React from 'react';
import RenderFoods from '../components/RenderCards/RenderFoods';
import Footer from '../components/Footer/Footer';
import Header from '../components/header/Header';
import FilterMeal from '../components/Filter/FilterMeal';

const Foods = () => (
  <div>
    <Header />
    <FilterMeal />
    <RenderFoods />
    <Footer />
  </div>
);

export default Foods;
