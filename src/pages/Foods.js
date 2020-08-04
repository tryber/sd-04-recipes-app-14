import React from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import RenderFoods from '../components/RenderCards/RenderFoods';
import Footer from '../components/Footer/Footer';
import Header from '../components/header/Header';

const Foods = () => (
  <div>
    <Header />
    <SearchBar />
    <RenderFoods />
    <Footer />
  </div>
);

export default Foods;
