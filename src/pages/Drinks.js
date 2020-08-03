import React from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import RenderDrinks from '../components/RenderCards/RenderDrinks';
import Footer from '../components/Footer/Footer';
import Header from '../components/header/Header';

const Drinks = () => (
  <div>
    <Header />
    <SearchBar />
    <RenderDrinks />
    <Footer />
  </div>
);

export default Drinks;
