import React from 'react';
import RenderDrinks from '../components/RenderCards/RenderDrinks';
import Footer from '../components/Footer/Footer';
import Header from '../components/header/Header';
import FilterDrink from '../components/Filter/FilterDrink';

const Drinks = () => (
  <div>
    <Header />
    <FilterDrink />
    <RenderDrinks />
    <Footer />
  </div>
);

export default Drinks;
